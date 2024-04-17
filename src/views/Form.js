import { useAlert } from '@dhis2/app-runtime'
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
//const alertValues = (values) => {
//  const formattedValuesString = JSON.stringify(values, null, 2)
// alert(formattedValuesString)
//}

const { Field, Form: RFForm } = ReactFinalForm

export const Form = () => {
    const { show } = useAlert((values) => {
        if(values.title === 'prof') {
            return `All good ${values.firstname}`
        }
        return 'All is goods'
    }, (values) => {
        if(values.title !== 'prof') {
            return {
                warning: true
            }
        }
        return {
            critical: true
        }
    })

    const alertValues = (values) => {
        show(values)
    }

    return (
        <div>
            <h1>Form</h1>

            <RFForm onSubmit={alertValues}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <Field
                                name="title"
                                label="Title"
                                component={SingleSelectFieldFF}
                                className={styles.title}
                                initialValue="none"
                                options={[
                                    { label: 'Professor', value: 'prof' },
                                    { label: 'Doctor', value: 'doc' },
                                    { label: 'None', value: 'none' },
                                ]}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="surname"
                                label="Surname"
                                component={InputFieldFF}
                                className={styles.surname}
                            />

                            <Field
                                required
                                name="firstname"
                                label="First name"
                                component={InputFieldFF}
                                className={styles.firstname}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="username"
                                label="Username"
                                component={InputFieldFF}
                                className={styles.email}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="password"
                                label="Password"
                                type="password"
                                component={InputFieldFF}
                                className={styles.password}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="email"
                                label="E-mail address"
                                component={InputFieldFF}
                                className={styles.username}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="confirm_email"
                                label="Confirm e-mail address"
                                component={InputFieldFF}
                                className={styles.email}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                type="checkbox"
                                name="newsletter"
                                label="I want to receive the newsletter"
                                component={SwitchFieldFF}
                                className={styles.newsletters}
                                initialValue={false}
                            />
                        </div>

                        <div className={styles.row}>
                            <Button type="submit" primary>
                                Submit form
                            </Button>
                        </div>
                    </form>
                )}
            </RFForm>
        </div>
    )
}
