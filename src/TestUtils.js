import React from 'react';
import { mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
const TestHook = ({ callback,param }) => {
  callback(param);
  return null;
};

export const testHook = (callback,param) => {
  act(() => {
    mount(<TestHook callback={callback} param={param} />);
  });

};
