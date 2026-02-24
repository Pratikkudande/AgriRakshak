import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import AboutPage from "./pages/AboutPage";
import ChatPage from "./pages/ChatPage";
import ContactPage from "./pages/ContactPage";
import CropsPage from "./pages/CropsPage";
import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import PredictPage from "./pages/PredictPage";
import VideosPage from "./pages/VideosPage";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "predict", element: <PredictPage /> },
      { path: "crops", element: <CropsPage /> },
      { path: "videos", element: <VideosPage /> },
      { path: "chat", element: <ChatPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <ContactPage /> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default routes;
