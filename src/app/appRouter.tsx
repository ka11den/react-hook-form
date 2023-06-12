import { MainPage } from "@/pages/main";
import { SigninPage } from "@/pages/signin";
import { SignupPage } from "@/pages/signup";
import { createBrowserRouter } from "react-router-dom";
import { baseLayout } from "./layouts/baseLayout";

export const appRouter = createBrowserRouter([
  {
    element: baseLayout,
    errorElement: <div>error</div>,
    children: [
      {
        path: '/',
        element: <MainPage />,
      },
      {
        path: '/signin',
        element: <SigninPage />,
      },
      {
        path: '/signup',
        element: <SignupPage />,
      },
    ],
  },
])