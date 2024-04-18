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
import i18n from '@dhis2/d2-i18n'

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

export const AttributeForm = () => {
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
            <h1>{i18n.t('Add an attribute')}</h1>

            <RFForm onSubmit={alertValues}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <Field
                                required
                                name="name"
                                label={i18n.t('Attribute name')}
                                component={InputFieldFF}
                                validate={''}
                            />
                        </div>
                        <div className={styles.row}>
                            <Field
                                name="valueType"
                                label={i18n.t('Value Type')}
                                component={SingleSelectFieldFF}
                                className={styles.title}
                                initialValue="TEXT"
                                options={[
                                    {
                                        label: i18n.t('Text'),
                                        value: 'TEXT',
                                    },
                                    {
                                        label: i18n.t('Number'),
                                        value: 'NUMBER',
                                    },
                                ]}
                            />
                        </div>
                        <div className={styles.row}>
                            <Button type="submit" primary>
                                {i18n.t('Save')}
                            </Button>
                        </div>
                    </form>
                )}
            </RFForm>
        </div>
    )

}
