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
      <p>{data?.atomicMass}</p>
      <p>{data?.symbol}</p>
    </div>
  )
}

export default Element;