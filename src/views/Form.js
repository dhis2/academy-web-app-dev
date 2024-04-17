import {
    createEqualTo,
    composeValidators,
    email,
    Button,
    InputFieldFF,
    ReactFinalForm,
    SingleSelectFieldFF,
    SwitchFieldFF,
    hasValue,
    dhis2Username
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

const {Field, Form: RFForm} = ReactFinalForm

export const Form = () => (
    <div>
        <h1>Form</h1>

        <RFForm onSubmit={alertValues}>
            {({handleSubmit}) => (
                <form onSubmit={handleSubmit}>
                    <div className={styles.row}>
                        <ReactFinalForm.Field
                            name="title"
                            label="Title"
                            component={SingleSelectFieldFF}
                            className={styles.title}
                            initialValue="None"
                            options={[
                                {label: 'Professor', value: 'Professor'},
                                {label: 'Doctor', value: 'Doctor'},
                                {label: 'None', value: 'None'},
                            ]}
                        />
                    </div>
                    <div className={`${styles.row} ${styles.full}`}>
                        <div className={`${styles.half} ${styles.full}`}>
                            <Field
                                name="surname"
                                label="Surname"
                                required
                                component={InputFieldFF}
                                type="text"
                                placeholder="Surname"
                                className={`${styles.title} ${styles.full}`}
                                validate={hasValue}
                            />
                        </div>
                        <div className={`${styles.half} ${styles.full}`}>
                            <Field
                                name="firstname"
                                label="First name"
                                required
                                component={InputFieldFF}
                                type="text"
                                placeholder="First name"
                                className={`${styles.title} ${styles.full}`}
                                validate={hasValue}
                            />
                        </div>
                    </div>
                    <div className={`${styles.row} ${styles.full}`}>
                        <Field
                            name="username"
                            label="Username"
                            required
                            component={InputFieldFF}
                            type="text"
                            placeholder="Username"
                            className={`${styles.title} ${styles.full}`}
                            validate={composeValidators(hasValue, dhis2Username)}
                        />
                    </div>
                    <div className={`${styles.row} ${styles.full}`}>
                        <Field
                            name="password"
                            label="Password"
                            required
                            component={InputFieldFF}
                            type="password"
                            placeholder="Password"
                            className={`${styles.title} ${styles.full}`}
                            validate={hasValue}
                        />
                    </div>
                    <div className={`${styles.row} ${styles.full}`}>
                        <Field
                            name="email"
                            label="E-mail address"
                            required
                            component={InputFieldFF}
                            type="email"
                            placeholder="E-mail address"
                            className={`${styles.title} ${styles.full}`}
                            validate={composeValidators(email, hasValue)}
                        />
                    </div>
                    <div className={`${styles.row} ${styles.full}`}>
                        <Field
                            name="confirm_email"
                            label="Confirm E-mail address"
                            required
                            component={InputFieldFF}
                            type="email"
                            placeholder="Confirm e-mail address"
                            className={`${styles.title} ${styles.full}`}
                            validate={composeValidators(createEqualTo('email', hasValue))}
                        />
                    </div>
                    <Field
                        name="newsletter"
                        label="I want to receive the newsletter"
                        type="checkbox"
                        component={SwitchFieldFF}
                        className={`${styles.title} ${styles.full}`}
                    />
                    <div className={styles.row}>
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
                    </div>
                </form>
            )}
        </RFForm>
    </div>
)
