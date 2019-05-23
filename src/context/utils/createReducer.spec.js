import {createReducer} from './createReducer'

describe('create reducer', () => {
    it('should handle initial state', () => {
        expect(
            createReducer([], 'ADD', 'TEST')
        ).toEqual([])
    });

    it('should handle TEST_START_FETCHING', () => {
        expect(
            createReducer([], {
                type: 'TEST_START_FETCHING',
                payload: {meta: {fetching: true}},
            }, 'TEST')
        ).toEqual({meta: {fetching: true}})
    });
    it('should handle TEST_LIST_SUCCESS_FETCHING', () => {
        expect(
            createReducer([], {
                type: 'TEST_LIST_SUCCESS_FETCHING',
                payload: {meta: {fetching: false}, data: {test: 'test'}},
            }, 'TEST')
        ).toEqual({
            meta: {fetching: false}, data: {test: 'test'},
        })
    });
    it('should handle TEST_ADD_SUCCESS', () => {
        const state = {meta: {fetching: false}, data: [{test: 'test'}]};
        expect(
            createReducer(state.data, {
                type: 'TEST_ADD_SUCCESS',
                payload: {meta: {fetching: false}, data: {test: 'added test'}},
            }, 'TEST')
        ).toEqual({
            meta: {fetching: false}, data: [{test: 'test'}, {test: 'added test'}]
        })
    });
    it('should handle TEST_UPDATE_SUCCESS', () => {
        const state = {meta: {fetching: false}, data: [{id: 1, test: 'test 1'}, {id: 2, test: 'test 2'}]};
        expect(
            createReducer(state.data, {
                type: 'TEST_UPDATE_SUCCESS',
                payload: {meta: {fetching: false}, data: {id: '1', test: 'test updated'}},
                id: 1
            }, 'TEST')
        ).toEqual({
            meta: {fetching: false}, data: [{"id": "1", "test": "test updated"}, {"id": 2, "test": "test 2"}]
        })
    });
    it('should handle TEST_DELETE_SUCCESS', () => {
        const state = {meta: {fetching: false}, data: [{id: 1, test: 'test 1'}, {id: 2, test: 'test 2'}]};
        expect(
            createReducer(state.data, {
                type: 'TEST_DELETE_SUCCESS',
                payload: {meta: {fetching: false}, data: {id: '1', test: 'test updated'}},
                id: 1
            }, 'TEST')
        ).toEqual({
            meta: {fetching: false}, data: [{"id": 2, "test": "test 2"}]
        })
    });
});
