import React from "react";
import TestMemoComponent from './TestMemoComponent';
import TestNonMemoComponent from './TestNonMemoComponent';

const TestContainingComponent = (props: { text: string }) =><>
  <TestMemoComponent text={props.text}/>
  <TestNonMemoComponent text={props.text}/>
</>

export default TestContainingComponent;