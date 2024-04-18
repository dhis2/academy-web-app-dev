import { useAlert } from '@dhis2/app-runtime';

const useAlerts = () => {
    const { show, hide } = useAlert(({ message }) => message, ({ type }) => ({
        ...type,
        duration: 3000
    }))

    return {
        show,
        hide
    }
}

export default useAlerts
