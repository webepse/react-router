import { Outlet } from "react-router-dom";

const Cars = () => {
    return ( 
        <>
            <h4>Component Cars.js</h4>
            <h1>Liste des voitures</h1>
            <Outlet />
        </>

     );
}
 
export default Cars;