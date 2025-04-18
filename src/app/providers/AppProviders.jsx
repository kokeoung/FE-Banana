import {createBrowserRouter, RouterProvider} from "react-router-dom"
import FormSubmitBlocker from "./FormSubmitBlocker"
import HomePage from "../../pages/HomePage";
import DefaultLayout from "../layouts/DefaultLayout";
import MyPage from "../../pages/MyPage";
import SimpleLayout from "../layouts/SimpleLayout";
import WritePage from "../../pages/WritePage";
import SearchPage from "../../pages/SearchPage";
import ReadPage from "../../pages/ReadPage";
import AuthPage from "../../pages/AuthPage";
import TestPage from "../../pages/TestPage";
import About from "../../features/ui/MyFrom/About";
import Series from "../../features/ui/MyFrom/Series";
import Posts from "../../features/ui/MyFrom/Posts";
import { PageProvider } from "./PageContext";

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
        path:"my/:userId",
        element:<MyPage />,
        children:[
          {
            path:"posts",
            element:<Posts />
          },
          {
            path:"series",
            element:<Series />
          },
          {
            path:"about",
            element:<About />
          }
        ]
      },
      {
        path:"posts/:id",
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
    <PageProvider>
      {children}
      <RouterProvider  router={router} />
    </PageProvider>
  </FormSubmitBlocker>
)

export default AppProvider;