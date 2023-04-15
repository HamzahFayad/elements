import "./App.css";
import { useEffect, useState } from "react";
import PeriodicTable from "./components/PeriodicTable";
import Element from "./components/Element";
import Filter from "./components/Filter";
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';

function App() {
  const [table, setTable] = useState([]);
  //const gallery = document.getElementById("gallery");

/*window.onmousemove = e => {
  const mouseX = e.clientX,
        mouseY = e.clientY;
  
  const xDecimal = mouseX / window.innerWidth,
        yDecimal = mouseY / window.innerHeight;
  
  const maxX = gallery.offsetWidth - window.innerWidth,
        maxY = gallery.offsetHeight - window.innerHeight;
  
  const panX = maxX * xDecimal * -1,
        panY = maxY * yDecimal * -1;
  
  gallery.animate({
    transform: `translate(${panX}px, ${panY}px)`
  }, {
    duration: 5000,
    fill: "forwards",
    easing: "ease"
  })
}*/
  
  //filter(group => group.groupBlock === "halogen")

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
    console.log(e);
  }
  
  return (
    <div className="App">
      <div className="filter">
        <Filter />
      </div>
      <BrowserRouter>
      <div id="gallery">
        <h1>Periodic Table</h1>
      {       
      table.map((item) => {
        return (
          <Link to={`element/${item.name}`} key={item.atomicNumber}>
            <div className={`element tile ` + item.groupBlock.replace(/\s/g, "-")}>
              <PeriodicTable periodTable={item} onClick={() => { showDetails(item) } } />
            </div>
          </Link>
        )
      })
      }
      </div>
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="element/:elementId" element={<Element />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
