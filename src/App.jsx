import "./index.css";
import { useState } from "react";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Home from "./Components/Home";
import DisplayStudentsDetails from "./Components/DisplayStudentsDetails";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
  const [academicyear, setAcademicyear] = useState("");
  const [branch, setBranch] = useState("");
  const [selectTeach, setSelectTeach] = useState("");
  const [period, setPeriod] = useState("");
  return (
    <div className="App">
      <Router>
        <Header
          academicyear={academicyear}
          setAcademicyear={setAcademicyear}
          setBranch={setBranch}
          branch={branch}
        />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Home
                academicyear={academicyear}
                setAcademicyear={setAcademicyear}
                setSelectTeach={setSelectTeach}
                setBranch={setBranch}
                setPeriod={setPeriod}
              />
            }
          ></Route>
          <Route
            exact
            path="/:academicyear/:sec"
            element={
              <DisplayStudentsDetails
                academicyear={academicyear}
                setAcademicyear={setAcademicyear}
                branch={branch}
                setBranch={setBranch}
                selectTeach={selectTeach}
                period={period}
              />
            }
          ></Route>
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
