import React from 'react'
import { useGetHeadAttributes } from '../../hooks/useGetHeadAttributes'
import { useGetAttributes } from '../../hooks'
import { CircularLoader, DataTable, CenteredContent } from '@dhis2/ui'
import TableHead from './tableHead/TableHead'
import TableRow from './tableRow/TableRow'

function Table({ data = [], loading }) {

    if (loading) {
        return (
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        )
    }

    return (
        <DataTable>
            <TableHead
                header={data?.length > 0 && Object.keys(data[0])}
            />
            <TableRow
                rows={data}
                header={data?.length > 1 && Object.keys(data[0])}
            />
        </DataTable>
    )
}

export default Table