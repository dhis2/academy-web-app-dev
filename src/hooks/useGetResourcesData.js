import { useAlert, useDataEngine, useDataQuery } from '@dhis2/app-runtime'
import { useState } from 'react'
import useAlerts from './useAlert'

const INDICATORSQUERY = (resource) => ({
    results: {
        resource: resource,
        params: {
            order: 'created:desc',
            pageSize: 10
        }

    }
})

export const useGetResourcesData = () => {
    const engine = useDataEngine()
    const [loading, setloading] = useState(false)
    const [data, setdata] = useState({})
    const { show } = useAlerts()

    async function getData({ resource }) {
        setloading(true)
        await engine.query(INDICATORSQUERY(resource))
            .catch(err => {
                console.log(err);
                show({
                    message: err.message,
                    critical: true
                })
            }).then((values) => {
                setdata(values?.results[resource])
            })

        setloading(false)
    }

    return {
        getData,
        data,
        loading
    }
}
