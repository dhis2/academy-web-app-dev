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

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useGetAttributes()

    return (
        <div>
            <h1>Attributes</h1>
            <p>loading: {JSON.stringify(loading)}</p>
            <p>error message: {error?.message}</p>
            {
                // if there is any data available
                data?.attributes?.attributes && (
                    <Table>
                        <TableHead>
                        <TableRowHead>
                                <TableCellHead>Name</TableCellHead>
                                <TableCellHead>Unique</TableCellHead>
                        </TableRowHead>  
                        </TableHead>
                        <TableBody>
                            {data.attributes.attributes.map(
                                ({ id, displayName, unique }) => (
                                    <TableRow key={id}>
                                        <TableCell>{displayName}</TableCell>
                                        <TableCell>
                                            {unique ? 'Yes' : 'No'}
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
