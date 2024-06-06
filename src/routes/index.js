import { lazy } from "react";

const PublicRoutes = [
  {
    path: "/login",
    component: lazy(() => import("../pages/auth/Login")),
    exact: true,
  },
  {
    path: "/register",
    component: lazy(() => import("../pages/auth/Register")),
    exact: true,
  },
  {
    path: "/onboard",
    component: lazy(() => import("../pages/auth/Onboard")),
    exact: true,
  },
  {
    path: "*",
    component: lazy(() => import("../pages/Page404")),
    exact: true,
  },
];

const PrivateRoutes = [
  {
    path: "/",
    component: lazy(() => import("../pages/dashboard")),
    exact: true,
  },
  {
    path: "/videowall",
    component: lazy(() => import("../pages/videowall")),
    exact: true,
  },
  {
    path: "/macro",
    component: lazy(() => import("../pages/Macro")),
    exact: true,
  },
  {
    path: "/firmware",
    component: lazy(() => import("../pages/Firmware")),
    exact: true,
  },
  {
    path: "/management",
    component: lazy(() => import("../pages/management")),
    exact: true,
  },
  {
    path: "/user-logs",
    component: lazy(() => import("../pages/userLogs")),
    exact: true,
  },
  {
    path: "/about",
    component: lazy(() => import("../pages/about")),
    exact: true,
  },
];

export { PublicRoutes, PrivateRoutes };
