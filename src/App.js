import i18n from '@dhis2/d2-i18n'
import { CenteredContent, CircularLoader, NoticeBox } from '@dhis2/ui'
import React from 'react'
import StudentList from './components/StudentList.js'
import { useSetupDatastore } from './hooks/useSetupDatastore.js'

const MyApp = () => {
    const { loading, error } = useSetupDatastore()

    if (loading) {
        return (
            <CenteredContent>
                <CircularLoader />
            </CenteredContent>
        )
    }

    if (error) {
        return (
            <NoticeBox
                error
                title={i18n.t(
                    'Something went wrong with your data store set up'
                )}
            >
                {error?.message}
            </NoticeBox>
        )
    }

    return (
        <div>
            <StudentList />
        </div>
    )
}

export default MyApp
