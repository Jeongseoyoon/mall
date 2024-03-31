import { Suspense, lazy } from "react";
import todoRouter from "./todoRouter";
import CreateBoard from "../pages/board/CreateBoard";
import boardRouter from "./boardRouter";
import DetailBoard from "../pages/board/DetailBoard";
const { createBrowserRouter } = require("react-router-dom");

const Loading = <div className="bg-red-700">Loading....</div>

const Main = lazy(() => import("../pages/MainPage"))
const About = lazy(() => import("../pages/AboutPage"))
const Login = lazy(() => import("../pages/Login"))
const Join = lazy(() => import("../pages/Join"))
const Update = lazy(() => import("../pages/board/UpdateBoard"))

const TodoIndex = lazy(() => import("../pages/todo/IndexPages"))
const BoardIndex = lazy(() => import("../pages/board/IndexBoard"))

const root = createBrowserRouter([
    {
        path: "",
        element: <Suspense fallback={Loading}><Main/></Suspense>
    },
    {
        path: "about",
        element: <Suspense fallback={Loading}><About/></Suspense>
    },
    {
        path: "todo",
        element: <Suspense fallback={Loading}><TodoIndex/></Suspense>,
        children: todoRouter()
    },
    {
        path: "login",
        element: <Suspense fallback={Loading}><Login/></Suspense>,
    },
    {
        path: "join",
        element: <Suspense fallback={Loading}><Join/></Suspense>,
    },
    {
        path: "update",
        element: <Suspense fallback={Loading}><Update/></Suspense>,
    },
    {
        path: "board",
        element: <Suspense fallback={Loading}><BoardIndex/></Suspense>,
        // children: boardRouter()
    },
    {
        path: "create",
        element: <Suspense fallback={Loading}><CreateBoard/></Suspense>,
        // children: boardRouter()
    },
    {
        path: "detail",
        element: <Suspense fallback={Loading}><DetailBoard/></Suspense>,
        // children: boardRouter()
    },
    
])

export default root;