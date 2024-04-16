import PropTypes from 'prop-types'
import React from 'react'

//step 1 import the menu library
import { Menu, MenuItem } from '@dhis2/ui'
// @TODO: Import the `Menu` and `MenuItem` components
import { useNavigate, useMatch } from 'react-router-dom'

const NavigationItem = ({ path, label }) => {
    // function to navigate to different route
    const navigate = useNavigate()

    // "null" when not active, "object" when active
    const routeMatch = useMatch(path)
    // path is matched if routeMatch is not null
    // eslint-disable-next-line no-unused-vars
    const isActive = Boolean(routeMatch)

    // eslint-disable-next-line no-unused-vars
    const onClick = () => navigate(path)

    // @TODO: Use the `MenuItem` component instead of the `div`
    //step 2 activate the menu bar
    return <MenuItem label={label} target={path} active={isActive} onClick={onClick}/>
}

NavigationItem.propTypes = {
    label: PropTypes.string.isRequired,
    path: PropTypes.string.isRequired,
}

export const Navigation = () => (
    // @TODO: Use the `Menu` components instead of the `div`
    //step 3 convert div int menu
    <Menu>
        <NavigationItem
            // Menu item for the home page
            label="Home"
            path="/"
        />

        <NavigationItem
            // Menu item for the meta data page
            label="Attributes"
            path="/attributes"
        />

        <NavigationItem
            // Menu item for the Form page
            label="Form"
            path="/form"
        />
    </Menu>
)
