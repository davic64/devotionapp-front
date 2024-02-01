import { Suspense } from "react";
import { Flex, Loader } from "@mantine/core";
import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export const ProtectedRoute = ({ route }) => {
  const isLogged = useAuth();

  if (isLogged?.token && route.path === "/") {
    return <Navigate to="/home" replace />;
  }

  if (!isLogged?.token && route.private) {
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
