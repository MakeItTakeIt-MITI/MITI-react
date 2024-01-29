import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./pages/Home.tsx";
import { UserLogin } from "./pages/UserLogin.tsx";
import { UserSignup } from "./pages/UserSignup.tsx";
import { GameHostContainer } from "./pages/GameHostContainer.tsx";
import { NotFound } from "./pages/NotFound.tsx";
import { GameInfoPage } from "./pages/GameInfoPage.tsx";
import { MatchingPage } from "./pages/MatchingPage.tsx";
import { MatchSubmittedPage } from "./pages/MatchSubmittedPage.tsx";
import { SMSAuthenticationPage } from "./pages/SMSAuthenticationPage.tsx";
import { UserMyPage } from "./pages/UserMyPage.tsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { KakaoAuthHandler } from "./components/auth/KakaoAuthHandler.tsx";
import { UserGamesListPage } from "./pages/UserGamesListPage.tsx";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/login",
        element: <UserLogin />,
      },
      {
        path: "/signup",
        element: <UserSignup />,
      },
      {
        path: "/sms-authentication",
        element: <SMSAuthenticationPage />,
      },
      {
        path: "/user/kakao",
        element: <KakaoAuthHandler />,
      },
      {
        path: "/profile",
        element: <UserMyPage />,
      },
      {
        path: "/operate",
        element: <GameHostContainer />,
      },
      {
        path: "/game",
        element: <GameInfoPage />,
      },
      {
        path: "/game/user/list",
        element: <UserGamesListPage />,
      },
      {
        path: "/match",
        element: <MatchingPage />,
      },
      { path: "/submitted", element: <MatchSubmittedPage /> },
      {
        path: "/404",
        element: <NotFound />,
      },
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
