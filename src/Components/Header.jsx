import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/cvrlogo.png";
function Header({ academicyear, setAcademicyear, branch }) {
  /*  const handleDropdown = (e) => {
    // console.log(e.target.value);
    setAcademicyear(e.target.value);
  }; */

  return (
    <header className="flex flex-row flex-wrap justify-center items-center bg-gray-600 p-2 text-sky-100 shadow-sm shadow-gray-800">
      <Link to="/">
        {" "}
        <img src={logo} alt="logo" className=" w-24 h-auto"></img>
      </Link>

      <section className="flex flex-col justify-center items-center">
        <h1 className="text-xl font-bold">CVR COLLEGE OF ENGINEERING</h1>
        (An Autonomous Institution,NAAC 'A Grade')
      </section>
    </header>
  );
}

export default Header;
