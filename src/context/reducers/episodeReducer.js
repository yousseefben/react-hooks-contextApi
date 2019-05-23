import {createReducer} from "../utils/createReducer";

const episodeReducer = (state = [], action) => {
    const reducer = createReducer(state, action, 'EPISODES');
    if (state === reducer) {
        console.log('State doesnt change into create reducer!')
        //enhance reducer with other case
    }

    return reducer
};

export default episodeReducer;
