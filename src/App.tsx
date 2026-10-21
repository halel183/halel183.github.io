import './App.css'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Home from './components/Home';
import Resume from './components/Resume';
import Projects from './components/Projects';

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/resume", element: <Resume /> },
    { path: "/projects", element: <Projects /> }
  ], {
  });

  return (<RouterProvider router={router} />);
}

export default App
