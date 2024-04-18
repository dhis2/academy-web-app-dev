import { useDataMutation, useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {
    Button,
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
        params: {
            order: 'created:desc',
            fields: ['displayName', 'code', 'id', 'unique', 'valueType'],
            pageSize: 5,
        },
    },
}

const deleteMutation = {
    resource: 'attributes',
    type: 'delete',
    id: ({ id }) => id,
}

export const Attributes = () => {
    const { loading, error, data, refetch } = useDataQuery(query)
    const [deleteAttribute] = useDataMutation(deleteMutation)

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
                                <TableCellHead>Delete?</TableCellHead>
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
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                )
            }
            <AttributeCreateForm />
        </div>
    )
}