import React, { useEffect, useState, useRef } from "react";
import axios from "axios";
import { useLocation } from "react-router-dom";
import { useParams } from "react-router-dom";
import html2pdf from "html2pdf.js";
import { export_table_to_csv } from "./Html2CSV";
import { useNavigate } from "react-router-dom";
import "../App.css";
function DisplayStudentsDetails({ branch, selectTeach, period }) {
  const { pathname } = useLocation();
  const academicyear = useParams().academicyear;
  const section = useParams().sec;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  //const [studentdata, setStudentdata] = useState();
  const contentRef = useRef(null);
  const navigate = useNavigate();

  const [sectiondata, setSectiondata] = useState([]);
  const classno = ["I", "II", "III", "IV", "V", "VI"];
  const getStudentsData = (sec, url, academicyear) => {
    axios
      .get(url)
      .then((res) => {
        // console.log(res.data.data)
        setLoading(false);
        // setSectiondata(res.data.data);

        if (academicyear === "2019-2023") {
          const val = JSON.parse(localStorage.getItem(`19${section}`));
          if (!val) {
            localStorage.setItem(`19${sec}`, JSON.stringify(res.data.data));
            setSectiondata(res.data.data);
            classno.map((e) => {
              localStorage.setItem(
                `${academicyear}${branch}${section}${e}`,
                ""
              );
            });
          } else {
            setSectiondata(val);
            localStorage.setItem(
              `${academicyear}${branch}${section}${period}`,
              selectTeach
            );
          }
        } else if (academicyear === "2020-2024") {
          const val = JSON.parse(localStorage.getItem(`20${section}`));
          if (!val) {
            localStorage.setItem(`20${sec}`, JSON.stringify(res.data.data));
            setSectiondata(res.data.data);
            classno.map((e) => {
              localStorage.setItem(
                `${academicyear}${branch}${section}${e}`,
                ""
              );
            });
          } else {
            setSectiondata(val);
            localStorage.setItem(
              `${academicyear}${branch}${section}${period}`,
              selectTeach
            );
          }
        } else if (academicyear === "2021-2025") {
          const val = JSON.parse(localStorage.getItem(`21${section}`));
          if (!val) {
            localStorage.setItem(`21${sec}`, JSON.stringify(res.data.data));
            setSectiondata(res.data.data);
            classno.map((e) => {
              localStorage.setItem(
                `${academicyear}${branch}${section}${e}`,
                ""
              );
            });
          } else {
            setSectiondata(val);
            localStorage.setItem(
              `${academicyear}${branch}${section}${period}`,
              selectTeach
            );
          }
        }
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        setError(true);
        setInterval(() => {
          setError(false);
        }, 2000);
      });
  };

  useEffect(() => {
    var url = "";
    if (academicyear === "2019-2023") {
      setLoading(true);
      if (branch === "CSE") {
        if (section === "CSE-A") {
          url = import.meta.env.VITE_REACT_APP_CSEA;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-B") {
          url = import.meta.env.VITE_REACT_APP_CSEB;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-C") {
          url = import.meta.env.VITE_REACT_APP_CSEC;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-D") {
          url = import.meta.env.VITE_REACT_APP_CSED;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-E") {
          url = import.meta.env.VITE_REACT_APP_CSEE;
          getStudentsData(section, url, academicyear);
        }
      } else if (branch === "ECE") {
        if (section === "ECE-A") {
          url = import.meta.env.VITE_REACT_APP_ECEA;
          getStudentsData(section, url, academicyear);
        } else if (section === "ECE-B") {
          url = import.meta.env.VITE_REACT_APP_ECEB;
          getStudentsData(section, url, academicyear);
        } else if (section === "ECE-C") {
          url = import.meta.env.VITE_REACT_APP_ECEC;
          getStudentsData(section, url, academicyear);
        }
      } else if (branch === "MECH") {
        if (section === "MECH-A") {
          url = import.meta.env.VITE_REACT_APP_MECHA;
          getStudentsData(section, url, academicyear);
        } else if (section === "MECH-B") {
          url = import.meta.env.VITE_REACT_APP_MECHB;
          getStudentsData(section, url, academicyear);
        }
      }
    } else if (academicyear === "2020-2024") {
      setLoading(true);
      if (branch === "CSE") {
        if (section === "CSE-A") {
          url = import.meta.env.VITE_REACT_APP_20CSEA;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-B") {
          url = import.meta.env.VITE_REACT_APP_20CSEB;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-C") {
          url = import.meta.env.VITE_REACT_APP_20CSEC;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-D") {
          url = import.meta.env.VITE_REACT_APP_20CSED;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-E") {
          url = import.meta.env.VITE_REACT_APP_20CSEE;
          getStudentsData(section, url, academicyear);
        }
      } else if (branch === "ECE") {
        if (section === "ECE-A") {
          url = import.meta.env.VITE_REACT_APP_20ECEA;
          getStudentsData(section, url, academicyear);
        } else if (section === "ECE-B") {
          url = import.meta.env.VITE_REACT_APP_20ECEB;
          getStudentsData(section, url, academicyear);
        } else if (section === "ECE-C") {
          url = import.meta.env.VITE_REACT_APP_20ECEC;
          getStudentsData(section, url, academicyear);
        }
      } else if (branch === "MECH") {
        if (section === "MECH-A") {
          url = import.meta.env.VITE_REACT_APP_20MECHA;
          getStudentsData(section, url, academicyear);
        } else if (section === "MECH-B") {
          url = import.meta.env.VITE_REACT_APP_20MECHB;
          getStudentsData(section, url, academicyear);
        }
      }
    } else if (academicyear === "2021-2025") {
      setLoading(true);
      if (branch === "CSE") {
        if (section === "CSE-A") {
          url = import.meta.env.VITE_REACT_APP_21CSEA;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-B") {
          url = import.meta.env.VITE_REACT_APP_21CSEB;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-C") {
          url = import.meta.env.VITE_REACT_APP_21CSEC;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-D") {
          url = import.meta.env.VITE_REACT_APP_21CSED;
          getStudentsData(section, url, academicyear);
        } else if (section === "CSE-E") {
          url = import.meta.env.VITE_REACT_APP_21CSEE;
          getStudentsData(section, url, academicyear);
        }
      } else if (branch === "ECE") {
        if (section === "ECE-A") {
          url = import.meta.env.VITE_REACT_APP_21ECEA;
          getStudentsData(section, url, academicyear);
        } else if (section === "ECE-B") {
          url = import.meta.env.VITE_REACT_APP_21ECEB;
          getStudentsData(section, url, academicyear);
        } else if (section === "ECE-C") {
          url = import.meta.env.VITE_REACT_APP_21ECEC;
          getStudentsData(section, url, academicyear);
        }
      } else if (branch === "MECH") {
        if (section === "MECH-A") {
          url = import.meta.env.VITE_REACT_APP_21MECHA;
          getStudentsData(section, url, academicyear);
        } else if (section === "MECH-B") {
          url = import.meta.env.VITE_REACT_APP_21MECHB;
          getStudentsData(section, url, academicyear);
        }
      }
    }
  }, [pathname]);

  const handlebutton = (rollno, hour) => {
    console.log(rollno, hour);

    sectiondata.forEach((data, index) => {
      if (data.RollNumber === rollno) {
        if (hour === 1) {
          data.I = "Absent";
        } else if (hour === 2) {
          data.II = "Absent";
        } else if (hour === 3) {
          data.III = "Absent";
        } else if (hour === 4) {
          data.IV = "Absent";
        } else if (hour === 5) {
          data.V = "Absent";
        } else {
          data.VI = "Absent";
        }
      }
    });
    if (academicyear === "2019-2023") {
      localStorage.setItem(`19${section}`, JSON.stringify(sectiondata));
      const value = JSON.parse(localStorage.getItem(`19${section}`));
      // console.log(value);
      setSectiondata(value);
    } else if (academicyear === "2020-2024") {
      localStorage.setItem(`20${section}`, JSON.stringify(sectiondata));
      const value = JSON.parse(localStorage.getItem(`20${section}`));
      // console.log(value);
      setSectiondata(value);
    } else if (academicyear === "2021-2025") {
      localStorage.setItem(`21${section}`, JSON.stringify(sectiondata));
      const value = JSON.parse(localStorage.getItem(`21${section}`));
      // console.log(value);
      setSectiondata(value);
    }
  };

  const downloadPdf = () => {
    const content = contentRef.current;
    html2pdf()
      .set({ html2canvas: { scale: 4 } })
      .from(content)
      .save(`${section}.pdf`);
  };

  const getDate = () => {
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    let currentDate = `${day}-${month}-${year}`;
    return currentDate;
  };
  const clearSelection = () => {
    setLoading(true);
    localStorage.clear();
    //window.location.reload();
    navigate("/");
  };

  return (
    <main className="flex flex-col items-center min-h-screen p-2 text-slate-900 ">
      <div ref={contentRef} className="w-full flex flex-col">
        {section && (
          <section className="w-full h-auto flex flex-col justify-center items-center">
            <h2>{section} Students Details</h2>
            <p>Academic Year : {academicyear}</p>
            <p>Date : {getDate()}</p>
            <h3 className="p-2 rounded-lg bg-slate-400 dark:bg-slate-900 text-lg text-slate-900 dark:text-slate-200 flex felx-row justify-evenly items-center my-2 w-80 h-auto self-center">
              {selectTeach}
              <span className="badge badge-lg badge-success">Active</span>
            </h3>
          </section>
        )}
        {error && (
          <div className="alert alert-danger" role="alert">
            Error while fetching Data...
          </div>
        )}
        {loading && (
          <>
            <center>
              <span className=" loading loading-spinner loading-lg"></span>
            </center>
          </>
        )}
        {sectiondata && !loading && (
          <div className="overflow-x-auto">
            <table className="table table-xs text-slate-900 " id="myTable">
              <thead>
                <tr className="text-md font-bold text-slate-900 bg-slate-50">
                  <th scope="col">RollNumber</th>
                  <th scope="col">I</th>
                  <th scope="col">II</th>
                  <th scope="col">III</th>
                  <th scope="col">IV</th>
                  <th scope="col">V</th>
                  <th scope="col">VI</th>
                  <th scope="col">Total</th>
                </tr>
              </thead>
              <tbody>
                {sectiondata.map((data, index) => {
                  let total = 6;
                  if (data.I === "Absent") total -= 1;
                  if (data.II === "Absent") total -= 1;
                  if (data.III === "Absent") total -= 1;
                  if (data.IV === "Absent") total -= 1;
                  if (data.V === "Absent") total -= 1;
                  if (data.VI === "Absent") total -= 1;

                  return (
                    index !== 0 && (
                      <tr key={index} className="bg-slate-50 text-md">
                        <td>{data.RollNumber}</td>

                        <td>
                          {data.I === "Absent" ? (
                            <button className=" bg-red-500 p-1 px-2 rounded-md">
                              A
                            </button>
                          ) : (
                            <input
                              type={"checkbox"}
                              className="checkbox checkbox-success bg-slate-200 border-2 border-slate-400"
                              checked={true}
                              disabled={period != "I" ? true : false}
                              onChange={() => handlebutton(data.RollNumber, 1)}
                            />
                          )}
                        </td>
                        <td>
                          {data.II === "Absent" ? (
                            <button className="bg-red-500 p-1 px-2 rounded-md">
                              A
                            </button>
                          ) : (
                            <input
                              type={"checkbox"}
                              className="checkbox checkbox-success bg-slate-200 border-2 border-slate-400"
                              checked={true}
                              disabled={period != "II" ? true : false}
                              onChange={() => handlebutton(data.RollNumber, 2)}
                            />
                          )}
                        </td>
                        <td>
                          {data.III === "Absent" ? (
                            <button className="bg-red-500 p-1 px-2 rounded-md">
                              A
                            </button>
                          ) : (
                            <input
                              type={"checkbox"}
                              className="checkbox checkbox-success bg-slate-200 border-2 border-slate-400"
                              checked={true}
                              disabled={period != "III" ? true : false}
                              onChange={() => handlebutton(data.RollNumber, 3)}
                            />
                          )}
                        </td>
                        <td>
                          {data.IV === "Absent" ? (
                            <button className="bg-red-500 p-1 px-2 rounded-md">
                              A
                            </button>
                          ) : (
                            <input
                              type={"checkbox"}
                              className="checkbox checkbox-success bg-slate-200 border-2 border-slate-400"
                              checked={true}
                              disabled={period != "IV" ? true : false}
                              onChange={() => handlebutton(data.RollNumber, 4)}
                            />
                          )}
                        </td>
                        <td>
                          {data.V === "Absent" ? (
                            <button className="bg-red-500 p-1 px-2 rounded-md">
                              A
                            </button>
                          ) : (
                            <input
                              type={"checkbox"}
                              className="checkbox checkbox-success bg-slate-200 border-2 border-slate-400"
                              checked={true}
                              disabled={period != "V" ? true : false}
                              onChange={() => handlebutton(data.RollNumber, 5)}
                            />
                          )}
                        </td>
                        <td>
                          {data.VI === "Absent" ? (
                            <button className="bg-red-500 p-1 px-2 rounded-md">
                              A
                            </button>
                          ) : (
                            <input
                              type={"checkbox"}
                              className="checkbox checkbox-success bg-slate-200 border-2 border-slate-400"
                              checked={true}
                              disabled={period != "VI" ? true : false}
                              onChange={() => handlebutton(data.RollNumber, 6)}
                            />
                          )}
                        </td>
                        <td>{total}/6</td>
                      </tr>
                    )
                  );
                })}

                <tr className="bg-slate-50 text-md">
                  <td>Teacher name:</td>
                  {classno.map((e) => {
                    return (
                      <td key={`${academicyear}${branch}${section}${e}`}>
                        {localStorage.getItem(
                          `${academicyear}${branch}${section}${e}`
                        )}
                      </td>
                    );
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        )}
      </div>
      <div className="flex flex-row flex-wrap justify-center items-center gap-2">
        {!loading && (
          <button
            onClick={downloadPdf}
            className="btn btn-primary m-2 shadow-md shadow-slate-700"
          >
            Download PDF
          </button>
        )}
        {!loading && (
          <button
            onClick={() =>
              export_table_to_csv(document.querySelector("myTable"), section)
            }
            className="btn btn-primary m-2 shadow-md shadow-slate-700"
          >
            Export to csv
          </button>
        )}
        {!loading && (
          <button
            onClick={() => clearSelection()}
            className="btn btn-error m-2 shadow-md shadow-slate-700"
          >
            Clear
          </button>
        )}
      </div>
    </main>
  );
}

export default DisplayStudentsDetails;
