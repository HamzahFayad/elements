import {useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
import {elements} from "./table.js";

function Element() {
	const navigate = useNavigate();
  const goBack = () => {
    document.querySelector(".Element").classList.add("hide-element");
    setTimeout(() => { navigate(`/`); document.querySelector(".data-table").classList.remove("resize"); },300);
	}
    const { elementId } = useParams();

  const [data, setData] = useState([]);

  const fetchUserData = async () => {
    await fetch(`https://neelpatel05.pythonanywhere.com/element/atomicname?atomicname=${elementId}`)
      .then(response => {
        return response.json()
      })
      .then(data => {
        setData(data);
      })
    }

  useEffect(() => {
    document.querySelector(".data-table").classList.add("resize");
    fetchUserData();
    }, [data]);
    
  return (
    <div className={`Element ` + data.groupBlock?.replace(/\s/g, "-")}>
      <div className='back-btn' onClick={goBack}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="#1c1c1c" d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z"/></svg>
      </div>
      <h1>{elementId}</h1>
      <div className='element-content'>
        <p>Symbol: <strong>{data?.symbol && data?.symbol}</strong></p>
        <p>Group: <strong>{data?.groupBlock && data?.groupBlock}</strong></p>        
        <p>Atomic Mass: <strong>{data?.atomicMass && data?.atomicMass}</strong></p>
        <p>Standard State: <strong>{data?.standardState && data?.standardState}</strong></p>
        <p>Boiling Point: <strong>{data?.boilingPoint && Math.round(data?.boilingPoint -273.15 )} ° Celsius</strong></p>
        <p>Melting Point: <strong>{data?.meltingPoint && Math.round(data?.meltingPoint -273.15 )} ° Celsius</strong></p>
        <p>discovered in <strong>{data?.yearDiscovered && data?.yearDiscovered}</strong></p>
      </div>
      <div className='more-content'>
        {
          elements.filter((f) => f.name === elementId).map((t) => {
            return (
              <div key={t.name}>
                <img className='real-image' src={t.image?.url} alt="x" />
                <img className='chemical-image' src={t.bohr_model_image && t.bohr_model_image} alt="x" />
                <p>{t.summary && t.summary}</p><br/>
                {t.named_by && <p>named by <strong>{t.named_by && t.named_by}</strong></p>}
                {t.discovered_by && <p>discovered by <strong>{t.discovered_by && t.discovered_by}</strong></p>}
              </div>
            )
          })
}
      </div>
    </div>
  )
}

export default Element;