import UserProfileForm from "./components/UserProfileForm";
import UserPage from "./components/UserPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => (
  <Router>
    <Routes>
      <Route path="/" element={<UserPage />} />
      <Route path="/UserProfileForm" element={<UserProfileForm />} />
    </Routes>
  </Router>
);

export default App;
