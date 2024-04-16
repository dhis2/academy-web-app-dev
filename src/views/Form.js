import React from 'react'
import GroupForm from '../components/form/GroupForm'
import i18n from '@dhis2/d2-i18n'

export const Form = () => (
    <div>
        <h1>{i18n.t("Form")}</h1>
        <GroupForm />
    </div>
)

// <Field
// name="surname"
// label="Surname"
// component={'input'}
// className={styles.surname}
// initialValue={'Traore'}
// />