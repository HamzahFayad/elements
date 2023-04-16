import {useParams, useNavigate} from 'react-router-dom';
import { useEffect, useState } from 'react';
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
      <p className='back-btn' onClick={goBack}>go back</p>
      <h1>{elementId}</h1>
      <div className='element-content'>
        <p>Symbol: {data?.symbol && data?.symbol}</p>
        <p>Group: {data?.groupBlock && data?.groupBlock}</p>        
        <p>Atomic Mass: {data?.atomicMass && data?.atomicMass}</p>
        <p>Standard State: {data?.standardState && data?.standardState}</p>
        <p>Boiling Point: {data?.boilingPoint && Math.round(data?.boilingPoint -273.15 )} ° Celsius</p>
        <p>Melting Point: {data?.meltingPoint && Math.round(data?.meltingPoint -273.15 )} ° Celsius</p>

        <p>discovered in {data?.yearDiscovered && data?.yearDiscovered}</p>
      </div>
    </div>
  )
}

export default Element;