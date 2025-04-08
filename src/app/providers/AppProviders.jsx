import {createBrowserRouter, RouterProvider} from "react-router-dom"
import FormSubmitBlocker from "./FormSubmitBlocker"
import HomePage from "../../pages/HomePage";
import DefaultLayout from "../layouts/DefaultLayout";
import MyPage from "../../pages/MyPage";
import SimpleLayout from "../layouts/SimpleLayout";
import WritePage from "../../pages/WritePage";
import SearchPage from "../../pages/Search";
import ReadPage from "../../pages/ReadPage";
import AuthPage from "../../pages/AuthPage";
import TestPage from "../../pages/TestPage";



const router=createBrowserRouter([
  {
    path:"/",
    element:<DefaultLayout />,
    children:[
      {
        index:true,
        element:<HomePage />
      },
      {
        path:"my",
        element:<MyPage />
      },
      {
        path:"read",
        element:<ReadPage />
      },
      {
        path:"search",
        element:<SearchPage />
      }
    ]
  },
  {
    path:"/",
    element:<SimpleLayout />,
    children:[
      {
        path:"write",
        element:<WritePage />
      },
      {
        path:"auth",
        element:<AuthPage />
      },
      {
        path:"test",
        element:<TestPage />
      }
    ]
  }
])

const AppProvider=({children})=>(
  <FormSubmitBlocker>
    {children}
    <RouterProvider  router={router} />
  </FormSubmitBlocker>
)

export default AppProvider;