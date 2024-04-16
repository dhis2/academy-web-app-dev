import { InputFieldFF, ReactFinalForm, SingleSelectFieldFF, SwitchFieldFF, composeValidators, dhis2Password, hasValue, Button } from '@dhis2/ui'
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
        <h1>Formulaire</h1>

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
                                { label: 'None', value: 'none' },
                                { label: 'Professor', value: 'professor' },
                                { label: 'Doctor', value: 'doctor' },
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
                            validate={hasValue}
                        />
                        <Field
                            required
                            name="firtname"
                            label="First Name"
                            component={InputFieldFF}
                            className={styles.firtname}
                            validate={hasValue}
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            required
                            name="username"
                            label="Username"
                            component={InputFieldFF}
                            className={styles.surname}
                            validate={hasValue}
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            required
                            name="password"
                            label="Password"
                            type='password'
                            component={InputFieldFF}
                            className={styles.surname}
                            validate={composeValidators(
                                dhis2Password,
                                hasValue
                            )}
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            required
                            name="emailadress"
                            label="E-mail adress"
                            component={InputFieldFF}
                            className={styles.surname}
                            validate={hasValue}
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            required
                            name="emailadress"
                            label="Confirm E-mail adress"
                            component={InputFieldFF}
                            className={styles.surname}
                            validate={hasValue}
                        />
                    </div>
                    <div className={styles.row}>
                        <Field
                            name="newsletter"
                            type="checkbox"
                            label="I want to receive newsletter"
                            component={SwitchFieldFF}
                            className={styles.surname}
                            initialValue={false}
                        />
                    </div>
                    <div className={styles.row}>
                        <Button type="submit" primary>
                            Submit Form
                        </Button>
                    </div>

                </form>
            )}
        </RFForm>
    </div>
)
