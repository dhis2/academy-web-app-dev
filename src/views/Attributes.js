import {
    CenteredContent,
    CircularLoader,
    DataTable,
    DataTableCell,
    DataTableColumnHeader,
    DataTableRow,
    NoticeBox,
    TableBody,
    TableHead
} from '@dhis2/ui'
import React from 'react'
import { useGetAttributes } from '../hooks/index.js'

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const {loading, error, data} = useGetAttributes()
    if (loading) {
        return <CenteredContent>
            <CircularLoader/>
        </CenteredContent>
    }
    if (error) {
        return <NoticeBox error title="Error loading data">{error}</NoticeBox>
    }
    return (
        <div>
            <h1>Attributes</h1>
            {data?.attributes?.attributes && (
                <DataTable>
                    <TableHead>
                        <DataTableColumnHeader>
                            Name
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            Unique
                        </DataTableColumnHeader>
                    </TableHead>
                    <TableBody>
                        {data.attributes.attributes.map((attr) => {
                            return <DataTableRow key={attr.id}>
                                <DataTableCell>{attr.displayName}</DataTableCell>
                                <DataTableCell>{attr.unique ? 'Yes' : 'No'}</DataTableCell>
                            </DataTableRow>
                        })}
                    </TableBody>
                </DataTable>
            )}
        </div>
    )
}
