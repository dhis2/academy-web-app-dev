import { useAlert, useDataMutation, useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {
    Button,
    CenteredContent,
    CircularLoader,
    DataTable,
    DataTableCell,
    DataTableColumnHeader,
    DataTableRow,
    hasValue,
    InputFieldFF,
    NoticeBox,
    ReactFinalForm,
    SingleSelectFieldFF,
    TableBody,
    TableHead,
    Pagination
} from '@dhis2/ui'
import React from 'react'
import styles from './Form.module.css'

const query = {
    attributes: {
        resource: 'attributes',
        params: {
            order: 'created:desc',
            pageSize: 5,
            fields: ['displayName', 'unique', 'id', 'valueType']
        },
    },
    users: {
        resource: 'me',
        params: {
            fields: ['name', 'email']
        }
    }
}

const mutation = {
    resource: 'attributes',
    type: 'create',
    data: ({value}) => value
}

const deleteMutation = {
    resource: 'attributes',
    type: 'delete',
    id: ({id}) => id
}

const {Field, Form: RFForm} = ReactFinalForm

export const Attributes = () => {

    const [mutate, {loading: saving, error: mutateError, data: response}] = useDataMutation(mutation)
    const [delMutation, {loading: deleteLoading}] = useDataMutation(deleteMutation, {
        onComplete: () => refetch()
    })

    const {show} = useAlert(
        ({message}) => message,
        ({type = 'info'}) =>
            type === 'error' ? {critical: true} : {success: true}
    )

    const deleteAttribute = (id) => {
        delMutation({id})
    }

    const saveAttribute = (value) => {
        console.log('Response', mutateError, response)
        mutate({value})
        let type = 'info';
        let message = i18n.t('ATTR_CREATED', {ID: response?.uid})
        if (mutateError) {
            type = 'error';
            message = mutateError
        }

        show({message, type})
        refetch()
    }
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const {loading, error, data, refetch} = useDataQuery(query)
    if (loading) {
        return <CenteredContent>
            <CircularLoader/>
        </CenteredContent>
    }
    if (error) {
        return <NoticeBox error title="Error loading data">{error}</NoticeBox>
    }
    const user = data?.users;
    const name = user?.name;
    const email = user?.email;
    return (
        <div>
            <h1>Attributes</h1>
            <p>{i18n.t('ATTR_INFO', {name, email})}</p>
            <DataTable>
                <TableHead>
                    <DataTableColumnHeader>
                        {i18n.t('ATTR_NAME_SHORT')}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t('ATTR_UNIQUE')}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t('ATTR_TYPE')}
                    </DataTableColumnHeader>
                    <DataTableColumnHeader>
                        {i18n.t('ATTR_ACTIONS')}
                    </DataTableColumnHeader>
                </TableHead>
                {data?.attributes?.attributes && (
                    <TableBody>
                        {data.attributes.attributes.map((attribute) => {
                            const {id, displayName, unique, valueType} = attribute;
                            return <DataTableRow key={id}>
                                <DataTableCell>{displayName}</DataTableCell>
                                <DataTableCell>{unique ? i18n.t('YES') : i18n.t('NO')}</DataTableCell>
                                <DataTableCell>{valueType}</DataTableCell>
                                <DataTableCell>
                                    <Button small destructive disabled={deleteLoading}
                                            onClick={() => deleteAttribute(id)}>Delete</Button>
                                </DataTableCell>
                            </DataTableRow>
                        })}
                    </TableBody>
                )}
            </DataTable>
            <br/>
            <hr/>
            <p>{i18n.t('ADD_ATTRIBUTE')}</p>
            {saving && (
                <CenteredContent>
                    <CircularLoader/>
                </CenteredContent>
            )}
            <RFForm onSubmit={saveAttribute}>
                {({handleSubmit}) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <Field
                                name="name"
                                label={i18n.t('ATTR_NAME')}
                                required
                                component={InputFieldFF}
                                type="text"
                                placeholder={i18n.t('ATTR_NAME')}
                                className={styles.title}
                                validate={hasValue}
                            />
                        </div>
                        <div className={styles.row}>
                            <ReactFinalForm.Field
                                name="valueType"
                                label={i18n.t('ATTR_TYPE')}
                                component={SingleSelectFieldFF}
                                className={styles.title}
                                required
                                options={[
                                    {label: 'TEXT', value: 'TEXT'},
                                    {label: 'NUMBER', value: 'NUMBER'}
                                ]}
                                validate={hasValue}
                            />
                        </div>
                        <div className={styles.row}>
                            <Button
                                ariaLabel="Button"
                                type="submit"
                                primary
                                disabled={saving}
                                value="default"
                            >
                                {i18n.t('SAVE')}
                            </Button>
                        </div>
                    </form>
                )}
            </RFForm>
        </div>
    )
}
