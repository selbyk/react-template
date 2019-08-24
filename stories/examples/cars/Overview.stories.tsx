import React from 'react';

import { storiesOf } from '@storybook/react';

import Overview from '../../../modules/cars/Overview';

storiesOf('Examples/Cars/Overview', module)
  .add('no cars', () => <Overview />)
  .add('with cars', () => (
    <Overview
      cars={[
        {
          make: 'Volvo',
          model: 'C30',
          engine: 'T5',
          year: 2018,
          mileage: 123,
          equipment: ['Leather', 'Seat heating', 'City Safety'],
        },
        {
          make: 'Volvo',
          model: 'XC60',
          engine: 'D5',
          year: 2018,
          mileage: 456,
          equipment: ['Leather', 'Seat heating', 'City Safety'],
        },
        {
          make: 'Volvo',
          model: 'XC90',
          engine: 'T6',
          year: 2018,
          mileage: 789,
          equipment: ['Leather', 'Seat heating', 'City Safety'],
        },
      ]}
    />
  ));
