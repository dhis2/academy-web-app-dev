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

/**
 * This is just a function to demonstrate the values when the form is submitted
 * It takes the form's values (which is an object), transforms it into readable JSON,
 * and then finally displays the values in an alert box
 *
 * @param {Object} values
 * @param {string} values.title
 * @param {string} values.surname
 * @param {string} values.firstname
 * @param {string} values.email
 * @param {string} values.email-confirmation
 * @param {bool} values.newsletter
 */
const alertValues = (values) => {
    const formattedValuesString = JSON.stringify(values, null, 2)
    alert(formattedValuesString)
}

const { Field, Form: RFForm } = ReactFinalForm

export const Form = () => (
    <div>
        <h1>{i18n.t('Form')}</h1>

        <RFForm onSubmit={alertValues}>
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
                                { label: i18n.t('Professor'), value: 'prof' },
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
                            validate={composeValidators(
                                dhis2Password,
                                hasValue
                            )}
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
                            label={i18n.t('I want to receive the newsletter')}
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
