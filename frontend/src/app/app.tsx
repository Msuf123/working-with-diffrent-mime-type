// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { Route, RouterProvider, createBrowserRouter, createRoutesFromChildren, createRoutesFromElements } from 'react-router-dom';
import styles from './app.module.css';
import { Root } from './Routes/Root/Root';
import HomePage from './Routes/HomePage/HomePage';
export function App() {
  const router=createBrowserRouter(createRoutesFromChildren(
    <Route path='/' element={<Root></Root>}>
      <Route index element={<HomePage></HomePage>}></Route>
    </Route>
  ))
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
