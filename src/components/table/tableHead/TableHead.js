import { DataTableColumnHeader, DataTableRow, TableHead } from '@dhis2/ui'
import React from 'react'

function TableHeadC({ header }) {
    return (
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
    )
}

export default TableHeadC