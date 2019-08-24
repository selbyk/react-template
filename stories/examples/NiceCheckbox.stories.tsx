import React from 'react';

import { storiesOf } from '@storybook/react';

import NiceCheckbox from '../../components/NiceCheckbox';

storiesOf('Examples/NiceCheckbox', module).add('blank', () => (
  <NiceCheckbox
    rootID="NiceCarCheckbox"
    id="CarAvailability"
    name="is_available"
    value="yes"
    label="Is this car available?"
  />
));
