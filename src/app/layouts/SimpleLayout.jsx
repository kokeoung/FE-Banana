import { Outlet } from "react-router-dom"

export default function SimpleLayout(){
  
  return (<>
    <div className="app-container">
      <main  className="main-content">
        <Outlet />
      </main>
    </div>
  </>)
}
