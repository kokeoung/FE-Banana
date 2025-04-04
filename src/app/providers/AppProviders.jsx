import {createBrowserRouter, RouterProvider} from "react-router-dom"
import FormSubmitBlocker from "./FormSubmitBlocker"
import HomePage from "../../pages/HomePage";
import DefaultLayout from "../layouts/DefaultLayout";
import MyPage from "../../pages/MyPage";



const router=createBrowserRouter([
  {
    path:"/",
    element :<DefaultLayout />,
    children:[
      {
        index:true,
        element:<HomePage />
      },
      {
        path:"my",
        element:<MyPage />
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