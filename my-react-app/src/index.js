import React from "react";
import ReactDOM from "react-dom";

import PropTypes from "prop-types";
import reactToWebComponent from "react-to-webcomponent";

import App from "./App";
import { ItemList } from "./ItemList";

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("react-root")
);

ItemList.propTypes = {
  items: PropTypes.array,
  itemTemplate: PropTypes.func,
};

customElements.define(
  "item-list",
  reactToWebComponent(ItemList, React, ReactDOM, { shadow: false })
);
