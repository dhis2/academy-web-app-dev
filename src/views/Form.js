import { ReactFinalForm, SingleSelectFieldFF, InputFieldFF, SwitchFieldFF, hasValue, email, composeValidators, Button, createEqualTo, dhis2Username, dhis2Password} from '@dhis2/ui'
import React from 'react'
import styles from './Form.module.css'
import {useAlert} from '@dhis2/app-runtime'

/**
 * This is just a function to demonstrate the values when the form is submitted
 * It takes the form's values (which is an object), transforms it into readable JSON,
 * and then finally displays the values in an alert box
 *
 * @param {Object} values
 * @param {string} values.title
 * @param {string} values.surname
 * @param {string} values.firstname
 * @param {string} values.username
 * @param {string} values.email
 * @param {string} values.email-confirmation
 * @param {bool} values.newsletter
 */



const { Field, Form: RFForm } = ReactFinalForm

export const Form = () => {
    const {show}= useAlert(
        values => {
            return values

        },

        ()=> {
            return {
                critical: true
                
            }

        }   )
        const alertValues = (values) => {
            const formattedValuesString = JSON.stringify(values, null, 2)
            show(formattedValuesString)
        }

    return (
        <div>
            <h1>Form</h1>

            <RFForm onSubmit={alertValues}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <Field
                                name="Title"
                                label="Title"
                                component={SingleSelectFieldFF}
                                className={styles.title}
                                initialValue="a"
                                options={[
                                    { label: 'None', value: 'a' },
                                    { label: 'Professor', value: 'b' },
                                    { label: 'Doctor', value: 'm' },
                                ]} />
                        </div>
                        <div className={styles.row}>
                            <Field
                                name="surname"
                                label="Surname*"
                                component={InputFieldFF}
                                className={styles.surname}
                                initialValue=""
                                validate={hasValue} />
                            <Field
                                name="firstname"
                                label="firstname*"
                                component={InputFieldFF}
                                className={styles.firstname}
                                initialValue=""
                                validate={hasValue} />
                        </div>
                        <div className={styles.row}>
                            <Field
                                name="dhis2Username"
                                label="username*"
                                component={InputFieldFF}
                                className={styles.dhis2Username}
                                initialValue=""
                                validate={hasValue} />

                        </div>
                        <div className={styles.row}>
                            <Field
                                name="password"
                                label="password*"
                                type="password"
                                component={InputFieldFF}
                                className={styles.username}
                                initialValue=""
                                validate={composeValidators(
                                    dhis2Password,
                                    hasValue)} />

                        </div>

                        <div className={styles.row}>
                            <Field
                                name="email"
                                label="E-mail address*"
                                component={InputFieldFF}
                                className={styles.email}
                                initialValue=""
                                validate={composeValidators(email, hasValue)} />
                        </div>
                        <div className={styles.row}>
                            <Field
                                name="confirm_email"
                                label="Confirm e-mail address*"
                                component={InputFieldFF}
                                className={styles.email}
                                initialValue=""
                                validate={composeValidators(createEqualTo("email", "", hasValue))} />
                        </div>
                        <div className={styles.row}>
                            <Field
                                name="newsletter"
                                label="I want to recieve the newsletter*"
                                type="checkbox"
                                component={SwitchFieldFF}
                                className={styles.newsletter}
                                initialValue=""
                                validate={hasValue} />
                        </div>
                        <Button
                            ariaLabel="Button"
                            name="Primary button"
                            type="submit"
                            primary
                            title="Button"
                            value="default"
                        >
                            Submit form
                        </Button>


                    </form>
                )}
            </RFForm>
        </div>
    )
}
