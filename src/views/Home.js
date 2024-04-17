import {useConfig} from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {Tag} from '@dhis2/ui'
import React from 'react'

export const Home = () => {
    const config = useConfig()
    return (
        <div>
            <h1>{i18n.t("Home")}</h1>

            <p>{i18n.t("DHIS2 Web App Academy 2024")}</p>

            <Tag positive>{i18n.t("Running on DHIS2 API  version")} {config.apiVersion}</Tag>
        </div>
    )
}
