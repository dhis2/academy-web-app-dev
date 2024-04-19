import i18n from '@dhis2/d2-i18n'
import { Menu, MenuItem } from '@dhis2/ui'
import PropTypes from 'prop-types'
import React from 'react'
import { useNavigate, useMatch } from 'react-router-dom'

const NavigationItem = ({ path, label }) => {
    // function to navigate to different route
    const navigate = useNavigate()

    // "null" when not active, "object" when active
    const routeMatch = useMatch(path)

    // path is matched if routeMatch is not null
    const isActive = Boolean(routeMatch)

    const onClick = () => navigate(path)

    return <MenuItem label={label} active={isActive} onClick={onClick} />
}

NavigationItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export const Navigation = () => (
    <Menu>
        <NavigationItem
            // Menu item for the home page
            label={i18n.t('Home')}
            path="/"
        />

        <NavigationItem
            // Menu item for the meta data page
            label={i18n.t('Attributes')}
            path="/attributes"
        />

        <NavigationItem
            // Menu item for the Form page
            label={i18n.t('Form')}
            path="/form"
        />
    </Menu>
)
