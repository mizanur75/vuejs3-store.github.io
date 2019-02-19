import ItemDetails from './components/ItemDetails'
import Test from './components/Test'
import Inventory from './components/Inventory'
export const routes = [
    {
        path: '/',
        component: Inventory
    },

    {
        path: '/item/:id',
        component: ItemDetails
    }
]