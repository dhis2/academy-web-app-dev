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

const query = {
    attributes: {
        resource: 'attributes',
        params: {
            order: 'displayName:desc',
            fields: ['displayName', 'code', 'id', 'unique'],
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

    return (
        <div>
            <h1>{i18n.t('Attributes')}</h1>
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
                            </TableRowHead>
                        </TableHead>
                        <TableBody>
                            {data.attributes.attributes.map(
                                ({ id, displayName, unique }) => (
                                    <TableRow key={id}>
                                        <TableCell>{displayName}</TableCell>
                                        <TableCell>
                                            {unique
                                                ? i18n.t('Yes')
                                                : i18n.t('No')}
                                        </TableCell>
                                    </TableRow>
                                )
                            )}
                        </TableBody>
                    </Table>
                )
            }
        </div>
    )
}
