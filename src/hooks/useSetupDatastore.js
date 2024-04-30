import { useDataEngine } from '@dhis2/app-runtime'
import { useState, useEffect, useCallback } from 'react'
import { DATASTORE_NAME } from '../constants.js'

const FIRST_PARTICIPANT = {
    name: 'Rene',
    daysAttended: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
    country: 'Netherlands',
}

const DATASTORE_EXISTS_QUERY = {
    configurations: {
        resource: 'dataStore',
        id: DATASTORE_NAME,
    },
}
const SET_UP_DATASTORE_MUTATION = {
    // would normally use 'id' property here instead of concatenating, but
    // 'id' isn't valid on 'create' type mutations
    resource: `dataStore/${DATASTORE_NAME}/${FIRST_PARTICIPANT.name}`,
    type: 'create',
    data: FIRST_PARTICIPANT,
}

export const useSetupDatastore = () => {
    const engine = useDataEngine()
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)

    const fetchAndSetupDatastore = useCallback(async () => {
        try {
            await engine.query(DATASTORE_EXISTS_QUERY)
            console.log('data store configured, proceeding')
            setLoading(false)
            return
        } catch (err) {
            const needToSetUpDatastore = err.details?.httpStatusCode === 404
            if (!needToSetUpDatastore) {
                // error is from something else
                setError(err)
                setLoading(false)
                return
            }
        }

        // set up datastore if needed
        try {
            console.log('Setting up data store namespace', DATASTORE_NAME)
            await engine.mutate(SET_UP_DATASTORE_MUTATION)
            setLoading(false)
            return
        } catch (err) {
            setError(err)
            setLoading(false)
            return
        }
    }, [engine])

    useEffect(() => {
        fetchAndSetupDatastore()
    }, [fetchAndSetupDatastore])

    return { loading, error, refetch: fetchAndSetupDatastore }
}
