import React from "react";
import { Layout } from "./style";

const LayoutProvider = props => {
  return <Layout>{props.children}</Layout>;
};

export default LayoutProvider;
