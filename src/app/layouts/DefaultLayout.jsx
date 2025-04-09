import { Outlet } from "react-router-dom"
import Header from "../../widgets/Header";


const DefaultLayout=()=>{
  
  return (<>
    <div className="app-container">
      <Header />
      <main  className="main-content">
        <Outlet />
      </main>
    </div>
  </>)
}
export default DefaultLayout;