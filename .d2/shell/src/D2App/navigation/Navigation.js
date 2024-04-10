import PropTypes from 'prop-types';
import React from 'react';
// @TODO: Import the `Menu` and `MenuItem` components
import { useNavigate, useMatch } from 'react-router-dom';
const NavigationItem = _ref => {
  let {
    path,
    label
  } = _ref;
  // function to navigate to different route
  const navigate = useNavigate();

  // "null" when not active, "object" when active
  const routeMatch = useMatch(path);
  // path is matched if routeMatch is not null
  //   eslint-disable-next-line no-unused-vars
  const isActive = Boolean(routeMatch);
  const onClick = () => navigate(path);

  // @TODO: Use the `MenuItem` component insteaf of the `span`
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClick
  }, label);
};
NavigationItem.propTypes = {
  label: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired
};
export const Navigation = () =>
/*#__PURE__*/
// @TODO: Use the `Menu` components instead of the `div`
React.createElement("div", null, /*#__PURE__*/React.createElement(NavigationItem
// Menu item for the home page
, {
  label: "Home",
  path: "/"
}), /*#__PURE__*/React.createElement(NavigationItem
// Menu item for the meta data page
, {
  label: "Attributes",
  path: "/attributes"
}), /*#__PURE__*/React.createElement(NavigationItem
// Menu item for the Form page
, {
  label: "Form",
  path: "/form"
}));