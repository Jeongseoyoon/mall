import { Suspense, lazy } from "react"
import { Navigate } from "react-router-dom"

const Loading = <div className="bg-red-700">Loading....</div>

const BoardCreate = lazy(() => import("../pages/board/CreateBoard"))

// const BoardIndex = lazy(() => import("../pages/board/IndexBoard"))

const BoardList = lazy(() => import("../pages/board/ListBoard"))

const BoardRead = lazy(() => import("../pages/board/DetailBoard"))



const boardRouter = () => {
    return [
        {
            path: 'list',
            element:<Suspense fallback={Loading}><BoardList/></Suspense>,
        },
        {
            path:'read/:tno',
            element:<Suspense fallback={Loading}><BoardRead/></Suspense>,
        },
        {
            path:'.create',
            element:<Suspense fallback={Loading}><BoardCreate/></Suspense>,
        },
        // {
        //     path:'modify/:tno',
        //     element:<Suspense fallback={Loading}><TodoModify/></Suspense>,
        // },
    ]
}

export default boardRouter