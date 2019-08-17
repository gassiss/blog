import React from "react";
import { Helmet } from "react-helmet"

export default ({ title }) => <Helmet title={`William Assis${title ? ` | ${title}` : ""}`} />
