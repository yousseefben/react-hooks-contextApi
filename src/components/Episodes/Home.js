import React from 'react';
import {useStateHooks} from "../../context/providers/StateProvider";

const EpisodesList = React.lazy(() => import('./Episode'));
export default function HomePage() {

    const state = useStateHooks().episodes;

    React.useEffect(() => {
        !state.episodes && state.listEpisodes();
    }, []);
    const props = {
        // episodes: state.episodes
        episodes: state.episodes.data && state.episodes.data._embedded.episodes
    };

    return (
        <React.Fragment>
            <React.Suspense fallback={<div>Loading...</div>}>
                <div className='episode-layout'>
                    <EpisodesList {...props} />
                </div>
            </React.Suspense>
        </React.Fragment>
    );
}
