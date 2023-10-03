import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import CoursesPage from "./pages/CoursesPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' element={<LoginPage />} exact />
        <Route path='/courses' element={<CoursesPage />} />
      </Routes>
    </Router>
  );
}

export default App;
