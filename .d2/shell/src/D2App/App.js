import React from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import styles from './App.module.css';
import { Navigation } from './navigation/index.js';
import { Form, Home, Attributes } from './views/index.js';
const MyApp = () => /*#__PURE__*/React.createElement(HashRouter
// HashRouter is used as there is not integration with DHIS2 server
, null, /*#__PURE__*/React.createElement("div", {
  className: styles.container
}, /*#__PURE__*/React.createElement("div", {
  className: styles.left
}, /*#__PURE__*/React.createElement(Navigation
// This component has to be inside the `BrowserRouter`
// because it will use the router's information
// (It will access the react context through hooks)
, null)), /*#__PURE__*/React.createElement("div", {
  className: styles.right
}, /*#__PURE__*/React.createElement(Routes, null, /*#__PURE__*/React.createElement(Route
// Home route, will render "Home" component
// when "/" is the current url
, {
  exact: true,
  path: "/",
  element: /*#__PURE__*/React.createElement(Home, null)
}), /*#__PURE__*/React.createElement(Route
// Form route, will render "Form" component
// when "/form" is the current url
, {
  exact: true,
  path: "/form",
  element: /*#__PURE__*/React.createElement(Form, null)
}), /*#__PURE__*/React.createElement(Route
// Attributes route, will render "Attributes" component
// when "/attributes" is the current url
, {
  exact: true,
  path: "/attributes",
  element: /*#__PURE__*/React.createElement(Attributes, null)
}), /*#__PURE__*/React.createElement(Route
// functions as default route, redirects to home
// when invalid path is provided
, {
  path: "*",
  element: /*#__PURE__*/React.createElement(Navigate, {
    to: "/"
  })
})))));
export default MyApp;