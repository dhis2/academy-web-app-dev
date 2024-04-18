import { useConfig } from '@dhis2/app-runtime'

import i18n from '@dhis2/d2-i18n'
import { Tag } from '@dhis2/ui';
import React from 'react'


export const Home = () => {
    const config = useConfig();

    return (
        <div>
            <h1>{i18n.t('Home')}</h1>

            <p>{i18n.t('WelcomeMessage')}</p>

            <Tag positive>
               <b> {i18n.t('Running on API Version')}  {config.apiVersion}</b>
            </Tag>

            {/* {JSON.stringify(config, null, 2)} */}

        </div>
    )

}
