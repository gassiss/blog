import React from "react";
import { createPortal } from "react-dom";

export default ({ title }) =>
  createPortal(<title>William Assis{title ? ` | ${title}` : ""}</title>, document.head); // eslint-disable-line
