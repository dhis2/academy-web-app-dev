import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { useConfig } from '@dhis2/app-runtime'
import { Tag } from '@dhis2/ui';

export const Home = () => {
    const { baseUrl, apiVersion } = useConfig();
    return(
    <div>
        <h1>{i18n.t('Home')}</h1>

        <p>{i18n.t('This is Dhis2 web Acadamy')}</p>
        <Tag positive>{i18n.t('Running on API version: {{apiVersion}}',{apiVersion, nsSeparator:'~:~'})}</Tag>
    </div>  
    )
    }
