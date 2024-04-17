import {useConfig} from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import { Tag } from '@dhis2-ui/tag'
import React from 'react'

export const Home = () => {
    const config = useConfig()
    return (
        <div>
            <h1>{i18n.t('Bienvenue')}</h1>
            <p>{i18n.t(`DHIS2 Web App Academy 2024, Abidjan - Côte d'Ivoire`)}</p>

            <Tag positive> Running on API version: {config.apiVersion}</Tag>
        </div>
    )
}

