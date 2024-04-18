import React from 'react'
import i18n from '@dhis2/d2-i18n'

export const Home = () => (
    <div>
        <h1>{i18n.t("Home")}</h1>

        <p>{i18n.t("DHIS2 Web App Academy 2024")}</p>
        <h3>{i18n.t("Made by Edson")}</h3>
    </div>
)
