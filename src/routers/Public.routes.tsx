import React from "react";
import { Routes, Route } from "react-router-dom";

export const PublicRoute = (): JSX.Element => {
  return (
    <Routes>
      <Route path="/" element={<>Route</>} />
      <Route path="*" element={<>Not found</>} />
    </Routes>
  );
};
