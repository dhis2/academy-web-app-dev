import { useDataQuery } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {
    CenteredContent,
    CircularLoader,
    DataTable,
    DataTableCell,
    DataTableColumnHeader,
    DataTableRow,
    NoticeBox,
    TableBody,
    TableHead
} from '@dhis2/ui'
import React from 'react'

const PAGE_SIZE = 5
const query = {
    attributes: {
        resource: 'attributes',
        params: {
            order: 'displayName:desc',
            pageSize: PAGE_SIZE,
        },
    },
    users: {
        resource: 'me'
    }
}

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useDataQuery(query)
    if (loading) {
        return <CenteredContent>
            <CircularLoader/>
        </CenteredContent>
    }
    if (error) {
        return <NoticeBox error title="Error loading data">{error}</NoticeBox>
    }
    console.log('Users', data?.users)
    const name = data?.users?.name;
    const email = data?.users?.email;

    return (
        <div>
            <h1>Attributes</h1>
            <p>{i18n.t('ATTR_INFO', {name, email})}</p>
            {data?.attributes?.attributes && (
                <DataTable>
                    <TableHead>
                        <DataTableColumnHeader>
                            Name
                        </DataTableColumnHeader>
                        <DataTableColumnHeader>
                            Unique
                        </DataTableColumnHeader>
                    </TableHead>
                    <TableBody>
                        {data.attributes.attributes.map((attr) => {
                            return <DataTableRow key={attr.id}>
                                <DataTableCell>{attr.displayName}</DataTableCell>
                                <DataTableCell>{attr.unique ? 'Yes' : 'No'}</DataTableCell>
                            </DataTableRow>
                        })}
                    </TableBody>
                </DataTable>
            )}
        </div>
    )
}
