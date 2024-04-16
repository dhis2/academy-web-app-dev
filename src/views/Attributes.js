import React from 'react'
import { useGetAttributes } from '../hooks/index.js'
import Table from '../components/table/Table.js'

export const Attributes = () => {
    // we get the data using a custom hook
    // we will update this implementation after learning about app-runtime
    const { loading, error, data } = useGetAttributes()

    return (
        <div>
            <h1>Attributes</h1>
            <Table />
        </div>
    )
}
