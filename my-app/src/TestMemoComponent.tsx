import React from "react";

const TestMemoComponent = (props: { text: string }) =>
  <i>{props.text}</i>;

export default React.memo(TestMemoComponent);