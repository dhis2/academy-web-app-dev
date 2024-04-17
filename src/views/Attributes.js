import {
    CenteredContent,
    CircularLoader,
    NoticeBox,
    TableBody,
    TableHead,
    DataTable,
    DataTableRow,
    DataTableColumnHeader,
    DataTableCell,
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

<h4> Attributes</h4>
            {
                // if there is any data available
                data?.attributes?.attributes && (

                    <DataTable>
                        <TableHead>
                            <DataTableRow>
                                <DataTableColumnHeader>
                                Name
                                </DataTableColumnHeader>
                                <DataTableColumnHeader>
                                Unique
                                </DataTableColumnHeader>
                            </DataTableRow>
                        </TableHead>
                        <TableBody loading>
                        {data.attributes.attributes.map(
                                ({ id, displayName, unique }) => (
                                    <DataTableRow key={id} 
                                >
                                        <DataTableCell bordered>{displayName}</DataTableCell>
                                        <DataTableCell bordered>
                                            {unique ? 'Yes' : 'No'}
                                        </DataTableCell>
                                    </DataTableRow>
                                )
                            )}
                            
                        </TableBody>
                      
                    </DataTable>

                )
            }

          
        </div>
    )
}