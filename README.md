
<img title="a title" alt="Alt text" src="https://miro.medium.com/v2/resize:fit:1400/format:webp/1*gfXAnvwpqFwUOT23TUHMIQ.jpeg">

# React-router-DOM:

<!-- ## 📋 Table of Contents:

- [Installation](##🏚️-Old-way-to-implement-Routes:)
- 
- [Wrapping the App](#wrapping-the-app) -->

## 🏚️ Old way to implement Routes:

- install package

```shell
npm i react-router-dom
```

- wrap the `<App />` component with `<BrowserRouter />`

```javascript
createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
)
```

- Simple Route Example:

```javascript
<Routes>
  <Route  path="/" element={<Home />}/>
</Routes>
```

This means that visiting the path / will load the Home component on the screen

- Including multiple routes

```javascript
<Routes>
  <Route path="/" element={<Home />} />
  <Route path="/products" element={<Products />} />
  <Route path="/contact" element={<Contact />} />
  <Route path="/about" element={<About />} />
</Routes>
```

Based on the chosen path, the browser will load the corresponding component

- Create a navigation menu
  
```javascript
<ul>
  <Link to="/"><li>Home</li></Link>
  <Link to="/products"><li>Products</li></Link>
  <Link to="/about"><li>About</li></Link>
  <Link to="/contact"><li>Contact</li></Link>
</ul>
```

Create a navigation menu using `<Link>` elements to let users navigate between routes

## 🆕 New way to implement Routes:

- Create new component `<RootLayout />`

```javascript
const RootLayout = () => {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Outlet />
      </div>
    </div>
  )
}
```
The RootLayout component represents a layout component that provides a common structure for all the routes defined within it

- `<App />` component should be like this:

```javascript
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
```

In this case, `<RootLayout />` is used to wrap the nested routes (`<Home />`, `<Products />`, `<About />`, and `<Contact />`) and ensures that elements like the `<Navbar />` and a container `<div>` are present on every page.

> **createBrowserRouter:**  This function creates a router that works with the browser's history API, allowing your application to navigate based on the browser's URL

> **createRoutesFromElements:** This function helps to define routes by converting JSX elements into route objects. It's a more declarative approach to defining routes in React.

> **`<RouterProvider />`** This component is used to provide the router configuration to the application. It acts as the entry point for the routing system, allowing React Router to manage the routing behavior and render the appropriate components based on the current URL.
