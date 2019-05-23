const context = {
    episodes: {
        episodes:
            {
                data: {
                    _embedded: {
                        episodes: [{id: 1, name: 'name', season: 'season', number: 1}, {
                            id: 2,
                            name: 'name2',
                            season: 'season2',
                            number: 2
                        }]
                    }
                }
            },
        // listEpisodes: jest.fn()
    }
};
export const useStateHooks = () => {
    return context
};
