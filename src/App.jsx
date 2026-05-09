import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact"; // Siz yozgan Outlet'li komponent
import ProfileForm from "./pages/ProfileForm"; // Pastdagi forma komponenti
import CourseList from "./pages/CourseList";
import CourseItem from "./pages/CourseItem";
import LoginPage from "./pages/LoginPage";
import LoginVerify from "./components/auth/LoginVerify";

export default function App() {
  return (
    <Routes>
      
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/verifylogin" element={<LoginVerify />} />
      {/* Contact sahifasi Layout vazifasini bajaradi */}
      <Route path="/contact" element={<Contact />}>
        {/* /contact ga kirganda avtomatik ProfileForm chiqadi */}
        <Route index element={<ProfileForm />} /> 
        {/* /contact/course ga kirganda kurslar chiqadi */}
        <Route path="course" element={<CourseList />} />

      </Route>

      <Route path="/course" element={<Navigate to="/contact/course" replace />} />
      <Route path="/course/:course_id" element={<CourseItem />} />
    </Routes>
  );
}