import Home from "../views/Home";
import Add from "../views/Add";
import Update from '../views/Update';

export const routes = [
    {
        path: '/', component: Home, name: 'HomePage'
    },
    {
        path: '/add-new', component: Add, name: 'AddNewPage'
    },
    {
        path: '/:id/update', component: Update, name: 'UpdatePage'
    }
]
