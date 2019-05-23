import {errorFetching, startFetching, successFetching} from "./createActions";

describe("Actions creator", () => {
    it("start fetching should create TEST_START_FETCHING action", () => {
        expect(startFetching('TEST')).toEqual({
            type: "TEST_START_FETCHING",
            payload: {meta: {fetching: true}}
        });
    });
    it("fetching succes should create TEST_LIST_SUCCESS_FETCHING action", () => {
        expect(successFetching('TEST', {id: 1}, 'LIST')).toEqual({
            type: `TEST_LIST_SUCCESS_FETCHING`,
            payload: {meta: {fetching: false}, data: {id: 1}}
        });
    });
    it("fetching error should create TEST_ERROR_FETCHING action", () => {
        expect(errorFetching('TEST', 'ERROR')).toEqual({
            type: `TEST_ERROR_FETCHING`,
            payload: {meta: {fetching: false, error: 'ERROR'}}
        });
    });
});
