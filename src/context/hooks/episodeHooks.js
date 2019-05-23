import {useReducer} from 'react';

import episodeReducer from "../reducers/episodeReducer";
import {episodeActions} from "../actions/episodeAction";

export default function useEpisode() {
    const [episodes, episodesDispatch] = useReducer(episodeReducer, []);
    const {listEpisodes} = episodeActions(episodesDispatch);
    return {
        episodes,
        listEpisodes,
    };
}
