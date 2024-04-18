import React from 'react'
import i18n from '@dhis2/d2-i18n'
import { Tag } from '@dhis2-ui/tag'
import {useConfig} from '@dhis2/app-runtime'

export const Home = () => {
    const config = useConfig()

    return (
    <div>
        <h1>Home</h1>

        <p>{i18n.t('DHIS2 Web App Academy 2024!')}</p>
        <Tag negative> Runing on API version {config.apiVersion} </Tag>
    </div>
    )

}