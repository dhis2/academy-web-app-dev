import React from 'react'
import { useGetAttributes } from '../hooks/index.js'
import { CircularLoader, CenteredContent, Table, DataTable, TableHead, TableCellHead, TableBody, TableRow, TableCell, } from '@dhis2/ui'
import { useDataQuery } from '@dhis2/app-runtime'
import AttributeCreateForm from './AttributeCreateForm.js'
import { NoticeBox } from '@dhis2/ui'

const query = {

    attributes: {
        resource: "attributes",
        params: {
            fields: ['code', 'displayName', 'unique', 'id'],
            order: 'displayName:desc',
            // pageSize: 5
        }
    },
    me: {
        resource: "me",
        params: {
            fields: ["displayName"]
            
        }
    }

}
export const Attributes = () => {
    const { loading, error, data } = useDataQuery(query)
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
            
            {data?.attributes?.attributes && (
                <Table>
                    <TableHead>
                        <TableCellHead>Name</TableCellHead>
                        <TableCellHead>Unique</TableCellHead>
                    </TableHead>

                    <TableBody>
                        {data.attributes.attributes.map(
                            (atribute) => {
                                const { id, displayName, unique } = atribute
                                return (
                                    <TableRow key={id}>
                                        <TableCell>{displayName}</TableCell>
                                        <TableCell>
                                            {unique ? 'Yes' : 'No'}
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                        )}
                    </TableBody>
                </Table>
            )}
            <AttributeCreateForm/>



        </div>
    )
}
