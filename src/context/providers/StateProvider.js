import React, {useContext} from "react";
import useEpisode from "../hooks/episodeHooks";

export const StateContext = React.createContext();

export const StateProvider = ({children}) => {
    const stateHooks = {
        episodes: useEpisode()
    };
    return (
        <StateContext.Provider value={stateHooks}>{children}</StateContext.Provider>
    );
};

export const useStateHooks = () => {
    return useContext(StateContext);
};
