import { Suspense } from "react";
import { Flex, Loader } from "@mantine/core";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { routes } from "./routes";
import NotFound from "./pages/NotFound";

const ProtectedRoute = ({ route }) => {
  const isLogged = false;

  if (isLogged && route.path === "/") {
    return <Navigate to="/home" replace />;
  }

  if (!isLogged && route.private) {
    return <Navigate to="/" replace />;
  }

  return (
    <Suspense
      fallback={
        <Flex mih="100vh" align="center" justify="center">
          <Loader color="violet" size="lg" type="dots" />
        </Flex>
      }
    >
      {route.layout ? (
        <route.layout>
          <route.component />
        </route.layout>
      ) : (
        <route.component />
      )}
    </Suspense>
  );
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {routes.map((route) => (
          <Route
            key={route.path}
            path={route.path}
            element={<ProtectedRoute route={route} />}
          />
        ))}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
