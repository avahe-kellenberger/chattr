import { configure } from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';

import { JSDOM } from 'jsdom';
import { any, string } from 'prop-types';

const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;

configure({ adapter: new ReactSixteenAdapter() });

export interface Global {
  document: Document;
  window: Window;
  navigator: { userAgent: string };
  requestAnimationFrame: Function;
  cancelAnimationFrame: Function;
}

declare var global: Global;

function copyProps(src: Record<string, any>, target: Record<string, any>) {
  Object.defineProperties(target, {
    ...Object.getOwnPropertyDescriptors(src),
    ...Object.getOwnPropertyDescriptors(target),
  });
}

global.window = window;
global.document = window.document;
global.navigator = {
  userAgent: 'node.js',
};
global.requestAnimationFrame = function(callback: any) {
  return setTimeout(callback, 0);
};
global.cancelAnimationFrame = function(id: NodeJS.Timeout) {
  clearTimeout(id);
};
copyProps(window, global);
