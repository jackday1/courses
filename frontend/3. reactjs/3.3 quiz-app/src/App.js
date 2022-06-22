import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home/Home";
import Question from "./pages/Question/Question";
import Result from "./pages/Result/Result";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/questions/:index" element={<Question />} />
      <Route path="/result" element={<Result />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default App;
