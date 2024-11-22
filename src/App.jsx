import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider,
} from "react-router-dom";

const App = () => {
  const router = createBrowserRouter(
    createRoutesFromElements(<Route path="/" element={<Root />}></Route>)
  );

  return <RouterProvider router={router} />;
};

export default App;
