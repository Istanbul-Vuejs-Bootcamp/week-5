import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        todoList: [],
    },
    mutations: {
        addTodoItem(state, payload) {
            payload.index = state.todoList.length;
            state.todoList.push(payload);
        },
        updateTodoItem(state, payload) {
            state.todoList.splice(payload.index, 1, payload);
        }
    },
    getters: {
        getTodoList: (state) => state.todoList
    },
    actions: {
    }
})

export  default store;
