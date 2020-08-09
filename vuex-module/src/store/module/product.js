const product = {
    state: {
        productList: [
            { productID: 1, productName: 'PC' },
            { productID: 2, productName: 'Notebook' },
            { productID: 3, productName: 'iMac' },
            { productID: 4, productName: 'MacBook' },
        ],
        orders: [],
    },
    mutations: {
    },
    actions: {
    },
    getters: {
        getOrders: (state) => state.orders,
        getProducts: (state) => state.productList,
    }
}

export default product;
