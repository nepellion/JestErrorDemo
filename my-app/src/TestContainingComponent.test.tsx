import React from 'react';
import TestContainingComponent from './TestContainingComponent';
import mockTestMemoComponent from './TestMemoComponent';
import mockTestNonMemoComponent from './TestNonMemoComponent';
import { render } from '@testing-library/react';

jest.mock('./TestMemoComponent');
jest.mock('./TestNonMemoComponent');

it('Test', () => {
  (mockTestNonMemoComponent as any).mockImplementationOnce((x: any) => <span>{x.text}</span>);
  (mockTestMemoComponent as any).mockImplementationOnce((x: any) => <p>{x.text}</p>);

  const container = render(<TestContainingComponent text="test"/>).container;

  expect(container.childElementCount).toBe(2);
  expect(container.firstElementChild!.tagName).toBe('SPAN');
  expect(container.lastElementChild!.tagName).toBe('P');
})