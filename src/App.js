import "./App.css";
import { lazy } from "react";
import {
  RouterProvider,
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  Navigate,
} from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage, {
  singleProductLoader,
} from "./pages/ProductDetailPage";
import AboutPage from "./pages/AboutPage";
// import RootLayout from "./UI/RootLayout";

const RootLayout = lazy(() => import("./UI/RootLayout"));
const HomePage = lazy(() => import("./pages/HomePage"));
const ProductsPage = lazy(() => import("./pages/ProductsPage"));
// const ProductDetailPage = lazy(() => import("./pages/ProductDetailPage"));
// const AboutPage = lazy(() => import("./pages/AboutPage"));

const AuthenticationPage = lazy(() => import("./pages/AuthenticationPage"));
const ErrorPage = lazy(() => import("./UI/ErrorPage"));

const trendingProductsLoader = () =>
  import("./pages/HomePage").then((module) => module.trendingProductsLoader());
const getProductsLoader = () =>
  import("./pages/ProductsPage").then((module) => module.getProductsLoader());
// const singleProductLoader = (meta) =>
//   import("./pages/ProductDetailPage").then((module) =>
// //     module.singleProductLoader(meta)
//   );
const categoriesLoader = () =>
  import("./components/CategoriesHeaderContainer").then((module) =>
    module.categoriesLoader()
  );
const routerDefinitions = createRoutesFromElements(
  <Route
    path="/"
    loader={categoriesLoader}
    element={<RootLayout />}
    errorElement={<ErrorPage />}
  >
    <Route index loader={trendingProductsLoader} element={<HomePage />}></Route>
    <Route
      path="products"
      loader={getProductsLoader}
      element={<ProductsPage />}
    ></Route>
    <Route
      path="products/:productId"
      loader={singleProductLoader}
      element={<ProductDetailPage />}
    ></Route>
    <Route path="about" element={<AboutPage />}></Route>
    <Route path="contact" element={<ContactPage />}></Route>
    <Route path="auth" element={<AuthenticationPage />}></Route>
    <Route path="*" element={<Navigate to="/" replace />}></Route>
  </Route>
);

const router = createBrowserRouter(routerDefinitions);
function App() {
  return <RouterProvider router={router} />;
}

export default App;
