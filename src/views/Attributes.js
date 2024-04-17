import { useDataQuery } from '@dhis2/app-runtime'
import { CircularLoader, CenteredContent, NoticeBox, Table, TableBody, TableCell, TableCellHead, TableHead, TableRow, TableRowHead } from '@dhis2/ui'
import React from 'react'

const query = {
    attributesList: {
        resource: 'attributes',
        params: {
            fields: ['displayName', 'code', 'unique'],
            order: 'created:desc',
        },
    }
}

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useDataQuery(query)
    if (loading){
        return(
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        )
    }
    if (error){
        return<NoticeBox error>{error?.message}</NoticeBox>
    }
    console.log(data)

    return (
        <div>
            <h1>Attributes</h1>
            <p>loading: {JSON.stringify(loading)}</p>
            <p>error message: {error?.message}</p>
            {
                // if there is any data available
                data?.attributesList?.attributes && (
                    <Table>
                        <TableHead>
                            <TableRowHead>
                                <TableCellHead>Name</TableCellHead>
                                <TableCellHead>Unique</TableCellHead>
                            </TableRowHead>
                        </TableHead>
                        <TableBody>
                        {data.attributesList.attributes.map(
                            ({id, displayName, unique}) => (
                                <TableRow key={id}>
                                    <TableCell>
                                        {displayName}
                                    </TableCell>
                                    <TableCell>
                                        {unique ? 'Yes' : 'No'}
                                    </TableCell>
                                </TableRow>
                            )
                        )}
                        </TableBody>
                    </Table>
                )
            }
        </div>
    )
}
