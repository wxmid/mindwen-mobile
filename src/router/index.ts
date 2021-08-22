import Test from '../Test'
import Home from '../Home'
import { router } from '../types'
const routers: Array<router> = [
    {
        path:'/test',
        component: Test,
    },
    {
        path:'/home',
        component: Home,
    },
]
export default routers