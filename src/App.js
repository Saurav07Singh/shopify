
import Header from './routes/header/Header';
import Home from './routes/home/Home';
import { createBrowserRouter, Route, createRoutesFromElements, RouterProvider } from 'react-router-dom';

 const router= createBrowserRouter(createRoutesFromElements(
    <Route path="/" element={<Header />}>
      <Route index element={<Home />} />
      <Route path="shop" element={<h1>I am shop element</h1>}/>
    </Route>
 ))

function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
