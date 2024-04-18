import React from 'react'
import { CircularLoader, DataTable, CenteredContent, DataTableRow, DataTableCell, DataTableColumnHeader, TableHead, TableBody } from '@dhis2/ui'


function Table({ data = [], loading }) {
    const header = data?.length > 0 && Object.keys(data[0])

    if (loading) {
        return (
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        )
    }

    return (
        <DataTable>
            <TableHead>
                <DataTableRow>
                    {header && header.map(head => {
                        return (
                            <DataTableColumnHeader>
                                {head}
                            </DataTableColumnHeader>
                        )
                    })}
                </DataTableRow>
            </TableHead>
            <TableBody>
                {data.length > 0 && data.map(row => {
                    return (
                        <DataTableRow>
                            {header.map(head =>
                            (
                                <DataTableCell>
                                    {row[head]}
                                </DataTableCell>
                            )
                            )}
                        </DataTableRow>
                    )
                })}
            </TableBody>
        </DataTable>
    )
}

export default Table