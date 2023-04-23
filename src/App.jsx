import "./App.css";
import { useEffect, useState } from "react";
import PeriodicTable from "./components/PeriodicTable";
import Element from "./components/Element";
import Filter from "./components/Filter";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import Home from "./components/Home";

function App() {
  const [table, setTable] = useState([]);
  const [filter, setFilter] = useState("");

  const handleFilterFunc = (filter) => {
    setFilter(filter);
    console.log(filter);
  }

  const show = () => {
    setFilter("");
  }

  const f = table.filter(f => f.groupBlock === filter);
  
  //filter(group => group.groupBlock === "halogen")

  var tableData = (
    table.map((item) => {
        return (
          <Link id={item.name} className={`element tile ` + item.groupBlock.replace(/\s/g, "-")} to={`element/${item.name}`} key={item.atomicNumber}>
            <div>
              <PeriodicTable id={item.atomicNumber} periodTable={item} onClick={() => { showDetails(item.name)} } />
            </div>
          </Link>
        )
    })
  )

    useEffect(() => {
        const API_URL = "https://neelpatel05.pythonanywhere.com";
        const fetchData = async () => {
            try {
              const response = await fetch(API_URL);
              const json = await response.json();
              //console.log(json);
              setTable(json);
            }
            catch (error) {
              console.log("error", error);
            }
        };
        fetchData();
    }, []);
  
  const showDetails = (e) => {
    //console.log(e);
    console.log(e);
    document.getElementById(e).scrollIntoView();
  }

  return (
    <div className="App">
      <div className="filter">
        <li onClick={show}>Show All</li>
        <Filter handleFilter={handleFilterFunc} />
      </div>
      <BrowserRouter>
        <section className="data-table">
          <div className="Head Grid-width-wide">
            <h1>Periodic Table of the Elements</h1>
          </div>
        <div id="gallery">
      { filter !== "" &&     
      f.map((item) => {
        return (
          <Link id={item.name} className={`element tile ` + item.groupBlock.replace(/\s/g, "-")} to={`element/${item.name}`} key={item.atomicNumber}>
            <div>
              <PeriodicTable id={item.atomicNumber} periodTable={item} onClick={() => { showDetails(item.name)} } />
            </div>
          </Link>
        )
      })
      }
      { filter === "" &&     
          tableData
      }
        </div>
      </section>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="element/:elementId" element={<Element />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
