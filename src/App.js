import { BrowserRouter, Routes, Route } from "react-router-dom";

import { SharedLayout } from "./components";
import { Home, DivePlan, NotFound, LogInPage } from "./pages";

const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<SharedLayout />}>
            <Route index element={<Home />} />
            <Route path="DivePlan" element={<DivePlan />} />
            <Route path="LogIn" element={<LogInPage />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
