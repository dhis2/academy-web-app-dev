import { useDataMutation } from '@dhis2/app-runtime'
import i18n from '@dhis2/d2-i18n'
import {
    Button,
    ButtonStrip,
    Modal,
    ModalTitle,
    ModalContent,
    ModalActions,
    ReactFinalForm,
    InputFieldFF,
} from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'

const { Field, Form: RFForm } = ReactFinalForm

const UPDATE_MUTATION = {
    resource: 'attributes',
    id: ({ id }) => id,
    type: 'update',
    partial: true,
    data: ({ newName }) => ({
        name: newName,
    }),
}

const UpdateModal = ({ closeModal, id, refetch, name }) => {
    const [updateName] = useDataMutation(UPDATE_MUTATION)

    return (
        <Modal onClose={closeModal}>
            <RFForm
                onSubmit={async (values) => {
                    await updateName({ id, newName: values.name })
                    await refetch()
                    closeModal()
                }}
            >
                {({ handleSubmit }) => (
                    <form onSubmit={handleSubmit}>
                        <ModalTitle>
                            {i18n.t('Update name for {{name}}', { name })}
                        </ModalTitle>
                        <ModalContent>
                            <Field
                                name="name"
                                label={i18n.t('New name')}
                                component={InputFieldFF}
                            />
                        </ModalContent>
                        <ModalActions>
                            <ButtonStrip>
                                <Button onClick={closeModal}>
                                    {i18n.t('Cancel')}
                                </Button>
                                <Button primary type="submit">
                                    {i18n.t('Update')}
                                </Button>
                            </ButtonStrip>
                        </ModalActions>
                    </form>
                )}
            </RFForm>
        </Modal>
    )
}

UpdateModal.propTypes = {
    closeModal: PropTypes.func,
    id: PropTypes.string,
    name: PropTypes.string,
    refetch: PropTypes.func,
}

export default UpdateModal
