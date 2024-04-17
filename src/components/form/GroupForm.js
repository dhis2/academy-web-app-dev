import {
    ReactFinalForm,
    InputFieldFF,
    SingleSelectFieldFF,
    SwitchFieldFF,
    composeValidators,
    createEqualTo,
    email,
    hasValue,
    Button,
    dhis2Password
} from '@dhis2/ui'
import React from 'react'
import styles from './Form.module.css'
import useAlerts from '../../hooks/useAlert'

function GroupForm() {
    const { hide, show } = useAlerts()

    const alertValues = (values) => {
        const formattedValuesString = JSON.stringify(values, null, 2)
        // console.log(values, formattedValuesString);

        show({
            message: formattedValuesString,
            type: { critical: true }
        });

    }

    setTimeout(() => {
        console.log('hide', hide)
        hide();
    }, 3000);


    return (
        <div className={styles.container} >
            <ReactFinalForm.Form onSubmit={alertValues}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <ReactFinalForm.Field
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
                            <ReactFinalForm.Field
                                required
                                name="surname"
                                label="Surname"
                                component={InputFieldFF}
                                className={styles.surname}
                                validate={hasValue}
                            />

                            <ReactFinalForm.Field
                                required
                                name="firstname"
                                label="First name"
                                component={InputFieldFF}
                                className={styles.firstname}
                                validate={hasValue}
                            />
                        </div>

                        <div className={styles.row}>
                            <ReactFinalForm.Field
                                required
                                name="username"
                                label="Username"
                                component={InputFieldFF}
                                className={styles.email}
                                validate={hasValue}
                            />
                        </div>

                        <div className={styles.row}>
                            <ReactFinalForm.Field
                                required
                                name="password"
                                label="Password"
                                component={InputFieldFF}
                                className={styles.email}
                                validate={composeValidators(dhis2Password, hasValue)}
                            />
                        </div>

                        <div className={styles.row}>
                            <ReactFinalForm.Field
                                required
                                name="email"
                                label="E-mail address"
                                component={InputFieldFF}
                                className={styles.email}
                                validate={composeValidators(email, hasValue)}
                            />
                        </div>

                        <div className={styles.row}>
                            <ReactFinalForm.Field
                                required
                                name="email-confirmation"
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
                            <ReactFinalForm.Field
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
            </ReactFinalForm.Form>
        </div >
    )
}

export default GroupForm
