import {useParams} from 'react-router-dom';

function Element() {

     const {elementId} = useParams();
  return (
    <div>
        <h1 className="text-indigo-600 m-12">{elementId}</h1>
    </div>
  )
}

export default Element;