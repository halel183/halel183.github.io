import './App.css'
import { createHashRouter, RouterProvider } from "react-router"
import Home from './components/Home';
import About from './components/About';
import Projects from './components/Projects';

function App() {
  const router = createHashRouter([
    { path: "/", element: <Home /> },
    { path: "/About", element: <About /> },
    { path: "/Projects", element: <Projects /> }
  ]);

  return (<RouterProvider router={router} />);
}

export default App
