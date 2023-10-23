import React, { Fragment, lazy } from "react";
import SplashLayout from "./layouts";
import { Route } from "react-router-dom";
// import LoadingScreen from './components/LoadingScreen';

export const RenderRoutes = (props) => {
  const { routes } = props;

  return routes.map((route) => {
    return <Route path={route.path} exact={route.exact} />;
  });
};

const routes = [
  {
    exact: true,
    layout: SplashLayout,
    path: "/home",
    component: lazy(() => import("./containers/HomePage/index")),
  },
];

export default routes;
