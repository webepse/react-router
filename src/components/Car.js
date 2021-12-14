import { useParams } from "react-router-dom";

const Car = (props) => {
    let { model } = useParams();
    return (        
        <h1>Voiture: {model}</h1>
     );
}
 
export default Car;