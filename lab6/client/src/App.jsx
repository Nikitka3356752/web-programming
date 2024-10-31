import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Error from "./pages/Error";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Library from "./pages/Library";
import AdminLogin from "./pages/admin/AdminLogin";
import Blog from "./components/Blog"; // Import Blog component
import FutureHere from "./components/FutureHere"; // Import FutureHere component
import WhatIsGpt from "./components/WhatIsGpt"; // Import WhatIsGpt component
import Cta from "./components/Cta"; // Import Cta component
import WomanVr from "./components/WomanVR"; // Import WomanVr component
import Brands from "./components/Brands"; // Import Brands component
import Hero from "./components/Hero"; // Import Hero component

if (!process.env.REACT_APP_API_URL) {
  console.log("Похоже не используется .env");
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: "library",
    element: <Library />,
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "admin",
    element: <AdminLogin />,
  },
  {
    path: "admin/home",
    element: <Home isEditable={true} />,
  },
  {
    path: "blog",
    element: <Blog />,
  },
  {
    path: "future-here",
    element: <FutureHere />,
  },
  {
    path: "what-is-gpt",
    element: <WhatIsGpt />,
  },
  {
    path: "cta",
    element: <Cta />,
  },
  {
    path: "woman-vr",
    element: <WomanVr />,
  },
  {
    path: "brands",
    element: <Brands />,
  },
  {
    path: "hero",
    element: <Hero />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
