import React, { useState } from 'react'
import { useGetAttributes } from '../hooks/index.js'
import Table from '../components/table/Table.js'
import { SingleSelect, SingleSelectOption } from '@dhis2-ui/select'
import resources from "../constants/rosources.json"
import { useGetResourcesData } from '../hooks/useGetResourcesData.js'

export const Attributes = () => {
    const { getData, data, loading } = useGetResourcesData()
    const [selected, setselected] = useState("")

    return (
        <div>
            <h1>Attributes</h1>
            <SingleSelect
                className="select"
                filterable
                noMatchText="No match found"
                placeholder="Select the resource"
                selected={selected}
                onChange={(e) => { setselected(e.selected); getData({ resource: e.selected }) }}
            >
                {resources.resources.map(x => (
                    <SingleSelectOption label={x.displayName} value={x.plural} />
                ))}
            </SingleSelect>

            {(resources.resources.length > 0 && selected) &&
                <h3> Lists of {resources.resources.find(x => x.plural === selected).displayName}</h3>}

            <Table data={data} loading={loading} resources={selected} />
        </div >
    )
}
