import React from 'react'
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
import { useGetAttributes } from '../hooks/index.js'
import { useDataQuery } from '@dhis2/app-runtime'

const query = {
    attributesList: {
        resource: 'attributes',
        params: {
            fields: ['displayName', 'id', 'unique', 'created'],
            order: 'created.desc',
        },
    },
}

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useDataQuery(query)

    if (loading) {
        return (
            <CenteredContent>
                <CircularLoader></CircularLoader>
            </CenteredContent>
        )
    }

    if (error) {
        return (
            <NoticeBox error>
                {error.message}
            </NoticeBox>
        )
    }


    return (
        <div>
            <h1>Attributes</h1>
            {
                // if there is any data available
                data?.attributesList?.attributes && (
                    <Table>
                        <TableHead>
                            <TableRowHead>
                                <TableCellHead>id</TableCellHead>
                                <TableCellHead>displayName</TableCellHead>
                                <TableCellHead>unique</TableCellHead>
                                <TableCellHead>Created Date</TableCellHead>
                            </TableRowHead>
                        </TableHead>
                        <TableBody>
                            {data.attributesList.attributes.map(
                                ({ id, displayName, unique, created }) => (
                                    <TableRow key={id}>
                                        <TableCell>{id}</TableCell>
                                        <TableCell>{displayName}</TableCell>
                                        <TableCell>
                                            {unique ? 'Yes' : 'No'}
                                        </TableCell>
                                        <TableCell>{created}</TableCell>
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
