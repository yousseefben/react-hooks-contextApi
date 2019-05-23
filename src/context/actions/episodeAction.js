import {createAsyncAction} from "../utils/createActions";

const API_URL =
    'https://api.tvmaze.com/singlesearch/shows?q=rick-&-morty&embed=episodes';

export function episodeActions(dispatch) {

    function listEpisodes() {
        return createAsyncAction(API_URL, dispatch, 'EPISODES', 'LIST');
    }

    return {listEpisodes};
}
