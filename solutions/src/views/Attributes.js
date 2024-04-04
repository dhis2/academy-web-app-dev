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
import { useGetAttributes } from '../hooks/index.js'

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useGetAttributes()

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
            <h1>Attributes</h1>
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
