import { DataTableCell, DataTableRow, TableBody } from '@dhis2/ui'
import React from 'react'

function TableRow({ rows = [], header = [] }) {
    return (
        <TableBody>
            {rows.length > 0 && rows.map(row => {
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
    )
}

export default TableRow