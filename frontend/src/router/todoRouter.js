import { Suspense, lazy } from "react"
import { Navigate } from "react-router-dom"

const Loading = <div className="bg-red-700">Loading....</div>

const TodoList = lazy(() => import("../pages/todo/ListPages"))

const TodoRead = lazy(() => import("../pages/todo/ReadPages"))

const TodoAdd = lazy(() => import("../pages/todo/AddPages"))

const TodoModify = lazy(() => import("../pages/todo/ModifyPages"))



const todoRouter = () => {
    return [
        {
            path: 'list',
            element:<Suspense fallback={Loading}><TodoList/></Suspense>,
        },
        {
            path: '',
            element:<Navigate replace={true} to={'list'}/>
        },
        {
            path:'read/:tno',
            element:<Suspense fallback={Loading}><TodoRead/></Suspense>,
        },
        {
            path:'add',
            element:<Suspense fallback={Loading}><TodoAdd/></Suspense>,
        },
        {
            path:'modify/:tno',
            element:<Suspense fallback={Loading}><TodoModify/></Suspense>,
        },
    ]
}

export default todoRouter