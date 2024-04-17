import i18n from '@dhis2/d2-i18n'
import {
    Button,
    InputFieldFF,
    hasValue,
    ReactFinalForm,
    SingleSelectFieldFF,
} from '@dhis2/ui'
import React from 'react'
import styles from './Form.module.css'
import { useDataMutation } from '@dhis2/app-runtime'

const { Field, Form: RFForm } = ReactFinalForm

const mutation= {
    resource : 'attributes',
    type: 'create',
    data: (values) =>values,
}

const AttributeCreateForm = () => {
    const [mutate] = useDataMutation(mutation, {
        onComplete : () => { alert('success')},
        onError : () => { alert('error')}

    }) 
    const onSubmit = async (values) => {
        mutate(values)
        // @todo: add the mutation
    }

    return (
        <div>
            <h1>{i18n.t('Add an attribute')}</h1>

            <RFForm onSubmit={onSubmit}>
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <div className={styles.row}>
                            <Field
                                required
                                name="name"
                                label={i18n.t('Attribute name')}
                                component={InputFieldFF}
                                validate={hasValue}
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

export default AttributeCreateForm
