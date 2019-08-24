import React from 'react';

import { storiesOf } from '@storybook/react';

import Detail from '../../../modules/cars/Detail';

storiesOf('Examples/Cars/Detail', module).add('with car', () => (
  <Detail
    car={{
      make: 'Volvo',
      model: 'XC60',
      engine: 'T5',
      year: 2018,
      mileage: 123,
      equipment: ['Leather', 'Seat heating', 'City Safety'],
    }}
  />
));
