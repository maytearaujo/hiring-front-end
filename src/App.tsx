import GlobalStyles from "./styles/global"
import { Outlet } from "react-router-dom"

import Root from "./components/routes/root"
import Footer from "./components/Footer/Footer"

function App() {

  return (
    <>
    <GlobalStyles />
    <Root />
    <Outlet />
    <Footer />
    </>
  )
}

export default App
