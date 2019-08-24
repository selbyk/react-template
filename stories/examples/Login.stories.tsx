import React from 'react';

import { storiesOf } from '@storybook/react';

import Login from '../../modules/auth/Login';

storiesOf('Examples/Login', module).add('blank', () => <Login />);
