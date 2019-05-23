import React from 'react'
import {render} from 'react-testing-library'
import {waitForDomChange} from 'dom-testing-library'


jest.mock('../../context/providers/StateProvider');
jest.mock('./Episode', () => () => 'episode render');

const HomePage = require('./Home').default;
test('calling render with the same component on the same container does not remount', async () => {

    const {getByText} = render(
        <HomePage/>
    );

    await waitForDomChange();

    getByText('episode render')

});
