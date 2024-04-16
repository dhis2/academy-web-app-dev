import { DataTableCell, DataTableRow, TableBody } from '@dhis2/ui'
import React from 'react'

function TableRow({ rows = [] }) {
    console.log(rows);
    return (
        <TableBody>
            {rows.length > 0 && rows.map(row => {
                return (
                    <DataTableRow>
                        <DataTableCell>
                            {row.displayName}
                        </DataTableCell>
                        <DataTableCell>
                            {row.unique? "Yes" : "No" }
                        </DataTableCell>
                    </DataTableRow>
                )
            })}
        </TableBody>
    )
}

export default TableRow