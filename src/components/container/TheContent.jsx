import React from "react";
import { Route, Routes } from "react-router-dom";
import { route } from "../../routes/route";

export default function TheContent() {
  return (
    <React.Fragment>
      <Routes>
        {route.map((route, index) => {
          return (
            route.element && (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                name={route.name}
                element={<route.element />}
              />
            )
          );
        })}
      </Routes>
    </React.Fragment>
  );
}
