const authentication = {
    state: {
        authUser: {
            name: 'John',
            surname: 'Doe',
            id: 1,
            role: 'ADMIN'
        },
    },
    mutations: {

    },
    actions: {

    },
    getters: {
        getAuthUser: (state) => state.authUser,
    }
}

export default authentication;
