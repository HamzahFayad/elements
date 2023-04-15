import "./App.css";
import { useEffect, useState } from "react";
import PeriodicTable from "./components/PeriodicTable";
import Filter from "./components/Filter";

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
              console.log(json);
              setTable(json);
            }
            catch (error) {
              console.log("error", error);
            }
        };
        fetchData();
    }, []);
  
  return (
    <div className="App">
      <div className="filter">
        <Filter />
      </div>
      <div id="gallery">
        <h1>Table</h1>
        {
      table.map((item) => {
        return (
          <div className={`element tile `+ item.groupBlock.replace(/\s/g, "-")} key={item.atomicNumber}>
            <PeriodicTable periodTable={item} />
          </div>
        )
      })
        }
      </div>
    </div>
  );
}

export default App;
