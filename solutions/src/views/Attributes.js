import { useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {
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

export const Attributes = () => {
    const { loading, error, data } = useDataQuery(query)

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
