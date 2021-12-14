import { useParams } from "react-router-dom";

const Car = (props) => {
    let { model } = useParams();
    return (   
        <>
            <h4>Component Car.js</h4>     
            <h1>Voiture: {model}</h1>
        </>
     );
}
 
export default Car;