const fetchApi = async (url, dispatch, object, action) => {

    try {
        dispatch(startFetching(object));
        const data = await fetch(url);
        data.json().then(
            r => {
                dispatch(successFetching(object, r, action))
            }
        ).catch(e => {
            dispatch(errorFetching(object, e))
        });

    } catch (e) {

    }
};

export const startFetching = (object) => (
    {
        type: `${object}_START_FETCHING`,
        payload: {meta: {fetching: true}}
    }
);

export const successFetching = (object, data, action) => (
    ({
        type: `${object}_${action}_SUCCESS_FETCHING`,
        payload: {meta: {fetching: false}, data: data}
    })
);
export const errorFetching = (object, e) => (
    ({
        type: object + '_ERROR_FETCHING',
        payload: {meta: {fetching: false, error: e}}
    })
);

export const createAsyncAction = (url, dispatch, object, action) => {
    fetchApi(url, dispatch, object, action);
};
