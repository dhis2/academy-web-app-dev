import { useDataMutation, useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {
    Button,
    ButtonStrip,
    CenteredContent,
    CircularLoader,
    NoticeBox,
    Table,
    TableBody,
    TableCell,
    TableCellHead,
    TableHead,
    TableRow,
    TableRowHead,
    TableFoot,
    Pagination,
} from '@dhis2/ui'
import React from 'react'
import AttributeCreateForm from './AttributeCreateForm.js'
import styles from './Attributes.module.css'

const query = {
    myUserInfo: {
        resource: 'me',
        params: {
            fields: ['displayName', 'email'],
        },
    },
    attributes: {
        resource: 'attributes',
        params: ({ page = 1, pageSize = 5 }) => ({
            order: 'created:desc',
            fields: 'displayName,valueType,unique,id',
            paging: true,
            pageSize,
            page,
        }),
    },
}

const deleteMutation = {
    resource: 'attributes',
    type: 'delete',
    id: ({ id }) => id,
}

const attributesDetails = {
    details: {
        resource: 'attributes',
        id: ({ id }) => id,
    },
}

export const Attributes = () => {
    const { loading, error, data, refetch } = useDataQuery(query)
    const [deleteAttribute] = useDataMutation(deleteMutation)
    const { data: attributesData, refetch: fetchDetails } = useDataQuery(
        attributesDetails,
        { lazy: true }
    )

    if (loading) {
        return (
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        )
    }

    if (error) {
        return <NoticeBox error>{error?.message}</NoticeBox>
    }

    const {
        myUserInfo: { displayName, email },
    } = data

    const onDeleteAttribute = async (mutationId) => {
        await deleteAttribute({ id: mutationId })
        refetch()
    }

    return (
        <div>
            <h1>{i18n.t('Attributes')}</h1>
            <div className={styles.tableInfo}>
                {i18n.t('Attributes visible to {{name}} ({{email}})', {
                    name: displayName,
                    email,
                })}
            </div>
            {
                // if there is any data available
                data?.attributes?.attributes && (
                    <Table>
                        <TableHead>
                            <TableRowHead>
                                <TableCellHead>{i18n.t('Name')}</TableCellHead>
                                <TableCellHead>
                                    {i18n.t('Unique')}
                                </TableCellHead>
                                <TableCellHead>
                                    {i18n.t('Value Type')}
                                </TableCellHead>
                                <TableCellHead>
                                    {i18n.t('Actions')}
                                </TableCellHead>
                            </TableRowHead>
                        </TableHead>
                        <TableBody>
                            {data.attributes.attributes.map(
                                ({ id, displayName, unique, valueType }) => (
                                    <TableRow key={id}>
                                        <TableCell>{displayName}</TableCell>
                                        <TableCell>
                                            {unique
                                                ? i18n.t('Yes')
                                                : i18n.t('No')}
                                        </TableCell>
                                        <TableCell>{valueType}</TableCell>
                                        <TableCell>
                                            <ButtonStrip>
                                                <Button
                                                    small
                                                    destructive
                                                    disabled={loading}
                                                    onClick={() =>
                                                        onDeleteAttribute(id)
                                                    }
                                                >
                                                    Delete
                                                </Button>
                                                <Button
                                                    small
                                                    onClick={() => {
                                                        fetchDetails({ id })
                                                    }}
                                                >
                                                    {i18n.t('Details')}
                                                </Button>
                                            </ButtonStrip>
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                        <TableFoot>
                            <TableRow>
                                <TableCell colSpan="100%">
                                    <Pagination
                                        onPageSizeChange={(pageSize) => {
                                            refetch({ pageSize })
                                        }}
                                        onPageChange={(page) => {
                                            refetch({ page })
                                        }}
                                        {...data?.attributes?.pager}
                                    />
                                </TableCell>
                            </TableRow>
                        </TableFoot>
                    </Table>
                )
            }
            <div>
                <pre>{JSON.stringify(attributesData?.details, null, 4)}</pre>
            </div>
            <AttributeCreateForm />
        </div>
    )
}
