import {act, renderHook} from 'react-hooks-testing-library'
import useEpisode from './episodeHooks';
import nock from "nock";

beforeAll(() => {
    nock('https://api.tvmaze.com/singlesearch')
        .defaultReplyHeaders({'access-control-allow-origin': '*'})
        .get('/shows?q=rick-&-morty&embed=episodes')
        .reply(200, [{
            id: 1,
            title: 'title 1',
        }, {
            id: 1,
            title: 'title 1',
        }])
});

test('listepisode should return episodes', async () => {
    const {result, waitForNextUpdate} = renderHook(() => useEpisode());

    act(() => result.current.listEpisodes());

    await waitForNextUpdate();

    expect(result.current.episodes.data.length).toBe(2);
    expect(result.current.episodes.meta.fetching).toBe(false);
    expect(result.current.episodes.data[0].id).toBe(1);

});

