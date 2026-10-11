import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./Page/Dashboard";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import { createContext, useState } from "react";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";

const MyContext = createContext();

function App() {
  const [isSidebarOpen, setisSidebarOpen] = useState(true);
  const [isLogin, setisLogin] = useState(false);

  const router = createBrowserRouter([
    {
      path: "/",
      exact: true,
      element: (
        <>
          <section className="main">
            <Header />
            <div className="contentMain flex">
              <div
                className={`sidebarWrapper overflow-hidden ${isSidebarOpen === true ? "w-[18%]" : "w-[0px] opacity-0"} transition-all`}
              >
                <Sidebar />
              </div>

              <div
                className={`contentRight py-4 px-5 ${isSidebarOpen === false ? "w-[100%]" : "w-[82%]"} transition-all`}
              >
                <Dashboard />
              </div>
            </div>
          </section>
        </>
      ),
    },
    {
      path: "/login",
      exact: true,
      element: (
        <>
          <Login />
        </>
      ),
    },
    {
      path: "/sign-up",
      exact: true,
      element: (
        <>
          <SignUp />
        </>
      ),
    },
  ]);

  const values = {
    isSidebarOpen,
    setisSidebarOpen,
    isLogin,
    setisLogin,
  };
  return (
    <>
      <MyContext.Provider value={values}>
        <RouterProvider router={router} />
      </MyContext.Provider>
    </>
  );
}

export default App;
export { MyContext };
