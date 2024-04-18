import {
    ReactFinalForm,
    SingleSelectFieldFF,
    InputFieldFF,
    SwitchFieldFF,
    Button,
    AlertBar,
    Center,
} from '@dhis2/ui'
import React from 'react'
import { useAlert } from '@dhis2/app-runtime'
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

const { Field, Form: RFForm } = ReactFinalForm

export const Form = () => {
    const { show } = useAlert(
        (values) => {
            return  JSON.stringify(values,null,2)
        },
        
        (values) => {
            if (values.title === '1. anaconda'){
                return { success: true }
            }
            if (values.title === '2. bobouin'){
                return { warning: true }
            }
            if (values.title === '3. mangouste'){
                return { critical: true }
            } 
            
        }
    )

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
                                initialValue={'1. anaconda'}
                                options={[
                                    {
                                        label: '1. anaconda',
                                        value: '1. anaconda',
                                    },
                                    {
                                        label: '2. bobouin',
                                        value: '2. bobouin',
                                    },
                                    {
                                        label: '3. mangouste',
                                        value: '3. mangouste',
                                    },
                                ]}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                name="surname"
                                label="Surname"
                                component={InputFieldFF}
                                placeholder="Surname"
                                className={styles.surname}
                                initialValue={''}
                            />
                            <Field
                                name="firstname"
                                label="Firstname"
                                component={InputFieldFF}
                                placeholder="Firstname"
                                className={styles.firstname}
                                initialValue={''}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                name="username"
                                label="Username"
                                component={InputFieldFF}
                                placeholder="Username"
                                className={styles.surname}
                                initialValue={''}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                name="password"
                                label="Password"
                                component={InputFieldFF}
                                placeholder="Password"
                                type="password"
                                className={styles.surname}
                                initialValue={'Password'}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                name="email"
                                label="Email"
                                placeholder="exemple@dhis2.ci"
                                component={InputFieldFF}
                                className={styles.surname}
                                initialValue={''}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                name="confirm_email"
                                label="Confirm email"
                                placeholder="exemple@dhis2.ci"
                                component={InputFieldFF}
                                className={styles.surname}
                                initialValue={''}
                            />
                        </div>

                        <div className={styles.row}>
                            <Field
                                type="checkbox"
                                label="I want to receive the newsletter"
                                name="Newsletter"
                                component={SwitchFieldFF}
                                className={styles.surname}
                                initialValue={false}
                            />
                        </div>

                        <div className={styles.row}>
                            <Button
                                ariaLabel="Button"
                                name="Primary button"
                                primary
                                title="Button"
                                type="submit"
                                value="default"
                            >
                                Envoyer
                            </Button>
                        </div>
                    </form>
                )}
            </RFForm>
        </div>
    )
}
