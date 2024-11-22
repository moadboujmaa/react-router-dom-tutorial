import Navbar from "./components/Navbar"
import { Routes, Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from "react-router-dom"
import Home from "./pages/Home"
import Products from "./pages/Products"
import Contact from "./pages/Contact"
import About from "./pages/About"
import RootLayout from "./layout/RootLayout"

const  App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
      </Route>
    )
  );

  return (
    <RouterProvider router={router} />
  )
}

export default App
