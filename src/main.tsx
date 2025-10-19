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
import React from "react";
import NotFound from "./pages/other/NotFound.tsx";
import Landing from "./pages/landing/Landing.tsx";
import NewInquiry from "./pages/inquiries/NewInquiry.tsx";
import Policies from "./pages/policies/Policies.tsx";
import PoliciesDetails from "./pages/policies/PoliciesDetails.tsx";
import HostingGuide from "./pages/hosting-guide/HostingGuide.tsx";
import { Auth } from "./pages/auth/Auth.tsx";
import { Withdraw } from "./pages/auth/Withdraw.tsx";
import { KakaoAuthHandler } from "./pages/auth/KakaoAuthHandler.tsx";
import InquiriesList from "./pages/inquiries/Inquiries.tsx";
import Faq from "./pages/faq/Faq.tsx";
import InquiryDetail from "./pages/inquiries/InquiryDetail.tsx";
import Community from "./pages/community/Community.tsx";
import CommunityPost from "./pages/community/CommunityPost.tsx";
import CourtDetails from "./pages/courts/CourtDetails.tsx";

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
      { path: "/kakao/login", element: <KakaoAuthHandler /> },
      {
        path: "/withdraw",
        element: <Withdraw />,
      },

      {
        path: "games",
        children: [
          { path: "", element: <Games /> },
          { path: ":id", element: <GameDetail /> },
        ],
      },
      {
        path: "courts",
        children: [
          { path: "", element: <Courts /> },
          { path: ":id", element: <CourtDetails /> },
        ],
      },
      { path: `faq`, element: <Faq /> },
      {
        path: "inquiries",
        children: [
          { path: "", element: <InquiriesList /> },
          { path: "new", element: <NewInquiry /> },
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
      {
        path: "community",
        children: [
          { path: "", element: <Community /> },
          { path: ":id", element: <CommunityPost /> },
        ],
      },

      { path: "*", element: <NotFound /> },
    ],
  },
]);

async function initApp() {
  // only start MSW in dev to avoid loading mocks in production
  if (import.meta.env.DEV) {
    try {
      const { worker } = await import("./mocks/browser.ts");
      await worker.start();
    } catch (e) {
      // don't crash app if msw setup fails in some environment
      // keep this quiet in production logs
      // eslint-disable-next-line no-console
      console.warn("MSW worker failed to start:", e);
    }
  }

  ReactDOM.createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <RouterProvider router={router}></RouterProvider>
      </QueryClientProvider>
    </React.StrictMode>
  );
}

initApp();
