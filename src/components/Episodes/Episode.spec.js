import React from 'react'
import {cleanup, render} from 'react-testing-library'
import EpisodesList from "./Episode";

afterEach(cleanup);

test('calling render with the same component on the same container does not remount', async () => {
    const props = {
        episodes:
            [
                {id: 1, name: 'name', season: 'season', number: 1},
                {
                    id: 2,
                    name: 'name2',
                    season: 'season2',
                    number: 2
                }]
    };

    const {getByText} = render(
        <EpisodesList {...props}/>
    );

    getByText('name2');
    getByText('name')

});
