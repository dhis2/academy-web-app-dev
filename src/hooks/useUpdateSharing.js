import { useDataEngine } from '@dhis2/app-runtime'
import { useCallback, useState } from 'react'
import { DATASTORE_NAME } from '../constants.js'

const METADATA_QUERY = {
    metadata: {
        resource: `dataStore/${DATASTORE_NAME}`,
        id: ({ key }) => `${key}/metaData`,
    },
}

const UPDATE_SHARING = {
    resource: 'sharing',
    params: ({ id }) => ({
        type: 'dataStore',
        id: id,
    }),
    type: 'update',
    data: {
        object: {
            publicAccess: 'r-------',
            externalAccess: false,
            user: {},
            userGroupAccesses: [],
        },
    },
}

export const useUpdateSharing = ({ sharingAlert }) => {
    const engine = useDataEngine()
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    // you should define a sharing mutation that is passed a key parameter
    const sharingMutation = useCallback(
        ({ key }) => {
            const updateSharing = async () => {
                setLoading(true)
                try {
                    // first you need to look up the id for the datastore key
                    const { metadata } = await engine.query(METADATA_QUERY, {
                        variables: { key },
                    })

                    // then you need to post to the api to update the sharing
                    const result = await engine.mutate(UPDATE_SHARING, {
                        variables: { id: metadata?.id },
                    })
                    if (result?.status === 'OK') {
                        sharingAlert({ success: true })
                    }
                } catch (e) {
                    console.error(e)
                    setError(e)
                    sharingAlert({ success: false })
                } finally {
                    setLoading(false)
                }
            }

            updateSharing()
        },
        [engine, sharingAlert]
    )

    return [sharingMutation, { loading, error }]
}
