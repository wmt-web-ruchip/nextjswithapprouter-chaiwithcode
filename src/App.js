import { Routes, Route, Navigate } from "react-router-dom";
import React, { Suspense } from "react";
import { PublicRoutes, PrivateRoutes } from "./routes";
import NonAuth from "./components/NonAuthLayout";
import AuthLayout from "./components/AuthLayout";
import "../src/assets/IPBashTIcons/css/fontello.css";
function App() {
  const isLoggedIn = localStorage.getItem("isLoggedIn");
  console.log("isLoggedIn", isLoggedIn);

  return (
    <Routes>
      {PublicRoutes.map(({ path, exact, component: Component }) => (
        <Route
          key={path}
          path={path}
          exact={exact}
          element={
            <Suspense fallback="loading">
              <NonAuth>
                <Component />
              </NonAuth>
            </Suspense>
          }
        />
      ))}
      <Route path="/" exact element={<AuthLayout />}>
        {PrivateRoutes.map(({ path, exact, component: Component }) => {
          return !isLoggedIn ? (
            <Route
              key={path}
              path={path}
              exact={exact}
              element={<Component />}
            />
          ) : (
            <Route
              key={path}
              path={path}
              exact={exact}
              element={<Navigate to="/login" />}
            />
          );
        })}
      </Route>
    </Routes>
  );
}

export default App;
