/** @format */
import { Routes, Route } from "react-router-dom";

import { Home } from "./routes";
import AppLayout from "./layout/AppLayout";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<AppLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default App;
