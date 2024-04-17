import { useDataQuery } from '@dhis2/app-runtime'

const INDICATORSQUERY = {
    results: {
        resource: "indicators",
        params: {
            fields: ['displayName', 'code', 'unique'],
            order: 'created:desc',
            pageSize: 10
        }

    }
}

export const useGetAttributes = () => {
    const { loading, data, error } = useDataQuery(INDICATORSQUERY)

    return { loading, error, data }
}
