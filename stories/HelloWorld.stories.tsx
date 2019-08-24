import React from 'react';

import { storiesOf } from '@storybook/react';

import { specs, describe, it } from 'storybook-addon-specifications';
import { mount } from 'enzyme';
import expect from 'expect';

import HelloWorld from '../components/HelloWorld';

storiesOf('HelloWorld', module)
  .add('simple component & test', () => {
    const story = <HelloWorld />;

    specs(() => describe('Hello World', () => {
      it('Should have "Hello World" in output', () => {
        const output = mount(story);
        expect(output.text()).toContain('Hello, World!');
      });
    }));

    return story;
  })
  .add('with "name" input', () => {
    const story = <HelloWorld name="Selby" />;

    specs(() => describe('Hello World', () => {
      it('Should have "Hello World" in output', () => {
        const output = mount(story);
        expect(output.text()).toContain('Hello, Selby!');
      });
    }));

    return story;
  });
