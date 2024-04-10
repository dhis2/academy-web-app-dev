import React from 'react';
import { useGetAttributes } from '../hooks/index.js';
export const Attributes = () => {
  var _data$attributes;
  // we get the data using a custom hook
  // we will update this implementation after learning about app-runtime
  const {
    loading,
    error,
    data
  } = useGetAttributes();
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", null, "Attributes"), /*#__PURE__*/React.createElement("p", null, "loading: ", JSON.stringify(loading)), /*#__PURE__*/React.createElement("p", null, "error message: ", error === null || error === void 0 ? void 0 : error.message),
  // if there is any data available
  (data === null || data === void 0 ? void 0 : (_data$attributes = data.attributes) === null || _data$attributes === void 0 ? void 0 : _data$attributes.attributes) && /*#__PURE__*/React.createElement("pre", null, JSON.stringify(data.attributes.attributes, null, 4)));
};