import React, { useState, useRef } from "react";
import { useNavigate, redirect, Link } from "react-router-dom";
import { FaInfoCircle } from "react-icons/fa";
import axios from "axios";
function Home({ setAcademicyear, academicyear, setSelectTeach, setBranch }) {
  const navigate = useNavigate();
  const [submit, setSubmit] = useState(true);
  const [sections, setSections] = useState([]);
  const [selectedsec, setSelectedsec] = useState();
  const [teach, setTeach] = useState([]);
  const fromd = useRef("2019");
  const tod = useRef("2023");

  const getteachdata = async (name) => {
    const url = `${import.meta.env.VITE_REACT_APP_PROF}?year=${
      fromd.current.value
    }&sec=${name}`;
    console.log(url);
    const data = await axios.get(url);
    const d = data.data.data[0];
    setTeach([...d.slice(1, d.length)]);
    console.log([...d.slice(1, d.length)]);
  };

  const handlebranchDropdown = (e) => {
    console.log(e.target.value);
    handleSection(e.target.value);
    setBranch(e.target.value);
  };
  const handleSubmit = () => {
    //setAcademicyear(`${fromd.current.value}-${tod.current.value}`);
    navigate(`/${academicyear}/${selectedsec}`);
  };
  const handleSection = (branch) => {
    if (branch === "ECE") {
      setSections(["ECE-A", "ECE-B", "ECE-C"]);
    } else if (branch === "CSE") {
      setSections(["CSE-A", "CSE-B", "CSE-C", "CSE-D", "CSE-E"]);
    } else if (branch === "EEE") {
      setSections(["EEE-A", "EEE-B", "EEE-C"]);
    } else if (branch === "MECH") {
      setSections(["MECH-A", "MECH-B"]);
    }
  };
  const handlesectionDropdown = async (e) => {
    setSelectedsec(e.target.value);
    console.log(e.target.value);
    await getteachdata(e.target.value);
  };

  const handleselecteach = async (e) => {
    e.preventDefault();
    setSelectTeach(e.target.value);
    setAcademicyear(`${fromd.current.value}-${tod.current.value}`);
    setSubmit(false);
  };
  //console.log(sections)
  return (
    <main className="flex flex-col items-center w-full min-h-screen">
      <h3 className=" text-xl text-slate-900 font-sora font-bold m-2">
        Welcome to CVR College studence attendance management portal
      </h3>

      <section className="flex flex-col flex-shrink-0 cursor-pointer bg-gray-600 p-4  w-80 h-auto text-md text-slate-100 font-sora my-4 lg:w-1/2  rounded-lg shadow-md shadow-slate-800 ">
        <section className=" my-2">
          <label class="label" htmlFor="academic-year" aria-required>
            <span class="label-text text-lg text-slate-300">
              Please select academic year
            </span>
            <span class="label-text-alt text-red-500">Required</span>
          </label>
          {/* <select
            name="academic year"
            id="academic-year"
            onChange={(e) => handleDropdown(e)}
            style={{ cursor: "pointer" }}
            className="form-select"
          >
            <option value="">--Select Academic-year--</option>
            <option value="2019-2023">2019-2023</option>
            <option value="2020-2024">2020-2024</option>
            <option value="2021-2025">2021-2025</option>
            <option value="2022-2026" disabled>
              2022-2026
            </option>
          </select> */}

          <section className="flex flex-row justify-center items-center gap-4">
            <section>
              <label htmlFor="from" className="label">
                <span className="label-text text-slate-300">From</span>
              </label>
              <input
                id="from"
                type="number"
                min="2019"
                max="2022"
                className="input input-boarded w-28 px-2 text-slate-900 dark:text-slate-100"
                placeholder="eg.2020"
                /* onChange={(e) => setFromd(e.target.value)} */
                ref={fromd}
              />
            </section>

            <section>
              <label htmlFor="To" className="label">
                <span className="label-text text-slate-300">To</span>
              </label>
              <input
                id="from"
                type="number"
                min="2023"
                max="2026"
                className="input input-boarded w-28 px-2 text-slate-900 dark:text-slate-100"
                placeholder="eg.2024"
                /* onChange={(e) => setTod(e.target.value)} */
                ref={tod}
              />
            </section>
          </section>
        </section>

        <section className=" my-2">
          <label class="label" htmlFor="branch" aria-required>
            <span class="label-text text-lg text-slate-300">
              Please select Branch
            </span>
            <span class="label-text-alt text-red-500">Required</span>
          </label>
          <section>
            <select
              name="branch"
              id="branch"
              onChange={(e) => handlebranchDropdown(e)}
              style={{ cursor: "pointer" }}
              className="select select-bordered select-md w-full rounded-lg text-slate-900 dark:text-slate-100"
            >
              <option disabled selected>
                Select branch
              </option>
              <option value="CSE">CSE</option>
              <option value="ECE">ECE</option>
              <option value="MECH">MECH</option>
            </select>
            <br></br>
          </section>
        </section>

        {sections && (
          <section className="my-2">
            <label class="label" htmlFor="section" aria-required>
              <span class="label-text text-lg text-slate-300">
                Please select section
              </span>
              <span class="label-text-alt text-red-500">Required</span>
            </label>
            <select
              name="section"
              id="section"
              onChange={(e) => handlesectionDropdown(e)}
              style={{ cursor: "pointer" }}
              className="select select-bordered select-md w-full rounded-lg text-slate-900 dark:text-slate-100"
            >
              <option disabled selected>
                Select Section
              </option>
              {sections.map((sec, i) => {
                return (
                  <option value={sec} key={i}>
                    {sec}
                  </option>
                );
              })}
            </select>
          </section>
        )}
        {teach && (
          <section className="my-2">
            <label class="label" htmlFor="section" aria-required>
              <span class="label-text text-lg text-slate-300">
                Please select Teacher Name
              </span>
              <span class="label-text-alt text-red-500">Required</span>
            </label>
            <select
              name="section"
              id="section"
              onChange={(e) => handleselecteach(e)}
              style={{ cursor: "pointer" }}
              className="select select-bordered select-md w-full rounded-lg text-slate-900 dark:text-slate-100"
            >
              <option disabled selected>
                Select Teacher Name{" "}
                <span className="loading loading-spinner loading-xs bg-slate-50"></span>
              </option>
              {teach.map((n, i) => {
                return (
                  <option value={n} key={i}>
                    {n}
                  </option>
                );
              })}
            </select>
          </section>
        )}

        {/* <Link to={`/${academicyear}/${selectedsec}`}> */}
        <button
          className="p-2 bg-slate-300 shadow-xl shadow-slate-900 hover:bg-slate-400 rounded-lg text-md text-slate-900 w-fit h-auto self-center active:shadow-md active:shadow-slate-700 disabled:bg-zinc-400 disabled:shadow-none"
          style={{ marginTop: "30px" }}
          onClick={() => handleSubmit()}
          disabled={submit}
        >
          Submit
        </button>
        {/* </Link> */}
        <section className="flex flex-row flex-nowrap items-center bg-slate-800  rounded-lg text-sm text-sky-400 px-2 py-3 gap-2 mt-2 w-fit self-center">
          <FaInfoCircle className="text-sm text-sky-400" />{" "}
          <p>Please fill all queries to enable submit button</p>
        </section>
      </section>
    </main>
  );
}

export default Home;
