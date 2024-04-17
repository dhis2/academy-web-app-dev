import {useDataQuery} from '@dhis2/app-runtime'
import {
    CenteredContent,
    CircularLoader,
    NoticeBox} from '@dhis2/ui'
import {
    DataTable,
    DataTableBody,
    DataTableCell,
    DataTableColumnHeader,
    DataTableHead,
    DataTableRow} from '@dhis2-ui/table'   
import React from 'react'
//import { useGetAttributes } from '../hooks/index.js'

//tested query in the playground
const query= {
    "attributesList": {
        "resource": "attributes",
        "params": {
            "pageSize": 5,
            "fields": ["displayName", "code", "unique"],
            "order": "displayName:desc",
        },
    },
}
export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data} = useDataQuery(query)

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
            <DataTable>
                <DataTableHead>
                    <DataTableRow>
                        <DataTableColumnHeader>
                            Name
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            Unique
                        </DataTableColumnHeader>
                    </DataTableRow>
                </DataTableHead>
                <DataTableBody>
                    {data?.attributesList?.attributes.map(
                        ({id, displayName, unique}) => (
                            <DataTableRow key={id}>
                                <DataTableCell>{displayName}</DataTableCell>
                                <DataTableCell>{
                                    unique ? 'Yes' : 'No'
                                
                                }</DataTableCell>
                            </DataTableRow>
                        )
                    )}
                </DataTableBody>
            </DataTable>
        </div>
    )
}
