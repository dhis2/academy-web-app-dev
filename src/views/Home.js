import {useConfig} from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import React from 'react'
import { Tag } from '@dhis2-ui/tag'

export const Home = () => {
    const config = useConfig()
    return (
        <div>
        <h1>{i18n.t('Home')}</h1>

        <p>{i18n.t('DHIS2 Web App Academy 2024')}</p>
        {/* Todo: find which UI component to use instead of h2 */}
        
        <Tag positive>
        Running on API version : {config.apiVersion}
        </Tag>
       
    </div>

    )
    
}
