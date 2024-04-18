import { useConfig } from '@dhis2/app-runtime'
import React from 'react'
import { Tag } from '@dhis2/ui'

export const Home = () => {
    const config = useConfig()
    return (
        <div>
            <h1>HOME (Akman's Fork)</h1>
            <p>DHIS2 Web App Academy 2024</p>
            <strong>
                <Tag positive> API Version is 2.{config.apiVersion} </Tag>
            </strong>
        </div>
    )
    
}
    
