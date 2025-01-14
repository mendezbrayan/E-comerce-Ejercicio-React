import { ShoppingCartProvider } from "../../Context";
import { useRoutes, BrowserRouter } from "react-router-dom";
import Home from "../Home";
import MyAccount from "../MyAccount";
import MyOrder from "../MyOrder";
import MyOrders from "../MyOrders";
import NoFount from "../NoFound";
import SignIn from "../SignIn";
import Navbar from "../../Components/Navbar/index";
import CheckoutSideMenu from "../../Components/CheckoutSideMenu";
import "../App/App.css";

const AppRoutes = () => {
  let routes = useRoutes([
    { path: "/", element: <Home /> },
    { path: "/clothes", element: <Home /> },
    { path: "/electronics", element: <Home /> },
    { path: "/furniture", element: <Home /> },
    { path: "/toys", element: <Home /> },
    { path: "/miscellaneous", element: <Home /> },
    { path: "/my-account", element: <MyAccount /> },
    { path: "/my-order", element: <MyOrder /> },
    { path: "/my-orders", element: <MyOrders /> },
    { path: "/my-orders/last", element: <MyOrder /> },
    { path: "/my-orders/:id", element: <MyOrder /> },
    { path: "/sign-in", element: <SignIn /> },
    { path: "/*", element: <NoFount /> },
  ]);
  return routes;
};

function App() {

  return (
    <>
      <ShoppingCartProvider>
        <BrowserRouter>
          <AppRoutes />
          <Navbar />
          <CheckoutSideMenu/>
        </BrowserRouter>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
