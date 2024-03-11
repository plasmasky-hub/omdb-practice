import React from "react";
import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "../layouts/PublicLayout";
import { Home } from "../pages/Home";

export const PublicRoute: React.FC = () => {
  return (
    <Routes>
      <Route
        path="home"
        element={
          <PublicLayout>
            <Home />
          </PublicLayout>
        }
      />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
};
