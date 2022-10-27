import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./assets/scss/style.css";
import { ContactsCrudContextProvider } from "./context/ContactsCrudContext";
import React, { Suspense } from "react";
import ThePrivateRoute from "./routes/ThePrivateRoute";
import ThePublicRoute from "./routes/ThePublicRoute";

const TheLayout = React.lazy(() => import("./components/layout/TheLayout"));
const AuthLayout = React.lazy(() =>
  import("./components/views/AuthPages/AuthLayout")
);

function App() {
  return (
    <div className="App_Wrapper">
      <BrowserRouter>
        <Suspense fallback={true}>
          <ContactsCrudContextProvider>
            <Routes>
              <Route
                path="/login"
                element={
                  <ThePublicRoute>
                    <AuthLayout />
                  </ThePublicRoute>
                }
              ></Route>
              <Route
                path="*"
                element={
                  <ThePrivateRoute>
                    <TheLayout />
                  </ThePrivateRoute>
                }
              ></Route>
            </Routes>
          </ContactsCrudContextProvider>
        </Suspense>
      </BrowserRouter>
    </div>
  );
}

export default App;
