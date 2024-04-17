import React from 'react'
import { useGetHeadAttributes } from '../../hooks/useGetHeadAttributes'
import { useGetAttributes } from '../../hooks'
import { CircularLoader, DataTable } from '@dhis2/ui'
import TableHead from './tableHead/TableHead'
import TableRow from './tableRow/TableRow'

function Table() {
    const { data: headData, loading: headLoading } = useGetHeadAttributes()
    const { data, loading } = useGetAttributes()

    if (loading || headLoading) {
        return (
            <CircularLoader />
        )
    }

    return (
        <DataTable>
            <TableHead
                header={headData.attributes}
            />
            <TableRow
                rows={data.results.indicators}
            />
        </DataTable>
    )
}

export default Table