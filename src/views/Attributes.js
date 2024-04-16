import React from 'react'
import { useGetAttributes } from '../hooks/index.js'
import { Table ,DataTable, TableHead, TableCellHead, TableBody, TableRow, TableCell,} from '@dhis2/ui'
export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useGetAttributes()
    
    return (
        <div>
            <h1>Attributes</h1>
            {/* <p>loading: {JSON.stringify(loading)}</p>
            <p>error message: {error?.message}</p> */}
            <Table>
                <TableHead>
                    <TableCellHead>Name</TableCellHead>
                    <TableCellHead>Unique</TableCellHead>
                </TableHead>

                <TableBody>
                    {data.attributes.attributes.map(
                        ({id,displayName,unique})=>(
                            <TableRow key={id}>
                                <TableCell>{displayName}</TableCell>
                                <TableCell>
                                    {unique? 'Yes':'No'}
                                </TableCell>
                            </TableRow>
                        )
                    )}
                </TableBody>
            </Table>
                 
            
        </div>
    )
}
