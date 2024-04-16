import i18n from '@dhis2/d2-i18n'
import React from 'react'


export const Home = () => (
    <div>
        <h1>{i18n.t('Home')}</h1>

        <p>{i18n.t('WelcomeMessage')}</p>
    </div>
)
