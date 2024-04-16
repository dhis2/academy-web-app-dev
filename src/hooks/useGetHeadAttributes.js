import { useEffect, useState } from 'react'

const HEADATTRIBUTES = {
    attributes:  [
            {
                displayName: 'Name',
                id: 'displayName',
            },
            {
                displayName: 'Unique',
                id: 'unique',
            }
        ],
}

const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms))
}

export const useGetHeadAttributes = () => {
    const [loading, setLoading] = useState(true)
    const error = null
    const data = HEADATTRIBUTES

    useEffect(() => {
        const delayLoading = async () => {
            await sleep(1000)
            setLoading(false)
        }
        delayLoading()
    }, [])

    return { loading, error, data }
}
