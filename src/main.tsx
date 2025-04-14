// eslint-disable-next-line import/extensions
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Games } from "./pages/games/Games.tsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import GameDetail from "./pages/games/GameDetail.tsx";
import Courts from "./pages/courts/Courts.tsx";
import Faq from "./pages/Faq.tsx";
import React from "react";
import NotFound from "./pages/NotFound.tsx";
import Landing from "./pages/Landing.tsx";
import PrivateInquiry from "./pages/PrivateInquiry.tsx";
import InquiriesList from "./pages/Inquiries.tsx";
import Policies from "./pages/Policies.tsx";
import PoliciesDetails from "./pages/PoliciesDetails.tsx";
import InquiryDetail from "./pages/InquiryDetail.tsx";
import CourtGamesList from "./pages/courts/CourtGamesList.tsx";
import { List } from "./pages/games/List.tsx";
import HostingGuide from "./pages/hosting-guide/HostingGuide.tsx";
import { Auth } from "./pages/auth/Auth.tsx";
import { Withdraw } from "./pages/auth/Withdraw.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/host-guide",
    children: [{ path: "", element: <HostingGuide /> }],
  },
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Landing /> },
      { path: "/auth", element: <Auth /> },
      { path: "/withdraw", element: <Withdraw /> },

      {
        path: "games",

        children: [
          { path: "", element: <Games /> },
          { path: "list", element: <List /> },
          { path: ":id", element: <GameDetail /> },
        ],
      },
      {
        path: "courts",

        children: [
          { path: "", element: <Courts /> },
          { path: ":id", element: <CourtGamesList /> },
        ],
      },
      { path: `faq/category/:categoryId`, element: <Faq /> },
      {
        path: "inquiries",
        children: [
          { path: "", element: <InquiriesList /> },
          { path: "new", element: <PrivateInquiry /> },
          { path: ":id", element: <InquiryDetail /> },
        ],
      },

      {
        path: "policies",
        children: [
          { path: "", element: <Policies /> },
          { path: ":id", element: <PoliciesDetails /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router}></RouterProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
