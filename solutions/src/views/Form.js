import { useAlert } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {
    Button,
    InputFieldFF,
    SingleSelectFieldFF,
    SwitchFieldFF,
    composeValidators,
    createEqualTo,
    email,
    hasValue,
    dhis2Password,
    dhis2Username,
    ReactFinalForm,
} from '@dhis2/ui'
import React from 'react'
import styles from './Form.module.css'

const { Field, Form: RFForm } = ReactFinalForm

export const Form = () => {
    const { show } = useAlert(
        ({ values, error }) => {
            if (error) {
                return `Something went wrong: ${error}`
            }
            return `Form successfully submitted: ${values}`
        },
        ({ error }) => {
            return error ? { critical: true } : { success: true }
        }
    )

    const onSubmit = (values) => {
        // uncomment the following line to simulate error (and comment the second "show" call) - in real life, this will be coming from an API call for example
        // show({ error: 'permission denied' })
        show({ values: JSON.stringify(values, null, 2) })
    }

    return (
        <div>
            <h1>{i18n.t('Form')}</h1>

            <RFForm onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <Field
                                name="title"
                                label={i18n.t('Title')}
                                component={SingleSelectFieldFF}
                                className={styles.title}
                                initialValue="none"
                                options={[
                                    {
                                        label: i18n.t('Professor'),
                                        value: 'prof',
                                    },
                                    { label: i18n.t('Doctor'), value: 'doc' },
                                    { label: i18n.t('None'), value: 'none' },
                                ]}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="surname"
                                label={i18n.t('Surname')}
                                component={InputFieldFF}
                                className={styles.surname}
                                validate={hasValue}
                            />

                            <Field
                                required
                                name="firstname"
                                label={i18n.t('First name')}
                                component={InputFieldFF}
                                className={styles.firstname}
                                validate={hasValue}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="username"
                                label={i18n.t('Username')}
                                component={InputFieldFF}
                                className={styles.email}
                                validate={composeValidators(
                                    dhis2Username,
                                    hasValue
                                )}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="password"
                                label={i18n.t('Password')}
                                type="password"
                                component={InputFieldFF}
                                className={styles.password}
                                // validate={composeValidators(
                                //     dhis2Password,
                                //     hasValue
                                // )}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="email"
                                label={i18n.t('E-mail address')}
                                component={InputFieldFF}
                                className={styles.username}
                                validate={composeValidators(email, hasValue)}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="confirm_email"
                                label={i18n.t('Confirm e-mail address')}
                                component={InputFieldFF}
                                className={styles.email}
                                validate={composeValidators(
                                    createEqualTo('email'),
                                    hasValue
                                )}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                type="checkbox"
                                name="newsletter"
                                label={i18n.t(
                                    'I want to receive the newsletter'
                                )}
                                component={SwitchFieldFF}
                                className={styles.newsletters}
                                initialValue={false}
                            />
                        </div>

                        <div className={styles.row}>
                            <Button type="submit" primary>
                                {i18n.t('Submit form')}
                            </Button>
                        </div>
                    </form>
                )}
            </RFForm>
        </div>
    )
}
