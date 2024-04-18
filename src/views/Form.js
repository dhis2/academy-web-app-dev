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

import { useAlert } from '@dhis2/app-runtime'
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


const { Field, Form: RNForm } = ReactFinalForm

export const Form = () => {

    const alertValues = (values) => {
        const formattedValuesString = JSON.stringify(values, null, 2)

        //console.log(formattedValuesString);
    
        const { show } = useAlert("test", 300)
       
       // alert(formattedValuesString)
    }

  
    const { show } = useAlert(
         ({ values, error }) => {
            if (error) {
                return `Something went wrong: ${error}`
            }
            return `Form successfully submitted: ${values}`
        },
        ({ error }) => {
            return error ? { critical: true } : { success: true }
        },
        // ({values}) => `Form successfuly submitted: ${JSON.stringify(values,null,2)}`, {duration:3000,success: true }
        )

        const onSubmit = (values) => {
            show({ values: JSON.stringify(values, null, 2) })
        }


    return (
        <div>

      


            <h1>Form</h1>

            <RNForm onSubmit={onSubmit}>
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
                                validate={hasValue}
                            />

                            <Field
                                required
                                name="firstname"
                                label="First name"
                                component={InputFieldFF}
                                className={styles.firstname}
                                validate={hasValue}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="username"
                                label="Username"
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
                                label="Password"
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
                                label="E-mail address"
                                component={InputFieldFF}
                                className={styles.username}
                                validate={composeValidators(email, hasValue)}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                required
                                name="confirm_email"
                                label="Confirm e-mail address"
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
            </RNForm>
        </div>
    )
}