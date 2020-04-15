import React from "react";

const TestNonMemoComponent = (props: { text: string }) =>
  <i>{props.text}</i>;

export default TestNonMemoComponent;