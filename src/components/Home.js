
import './home.css'

export const Home=(props)=> {
let usenavigate=props.navigateProps()
const goVenta = () => {
   usenavigate('/venta')
  };
  const goCocina= () => {
    usenavigate('/cocina')
   };
   const goGanancia= () => {
    usenavigate('/ganancia')
   };
   const goInventario= () => {
    usenavigate('/inventario')
   };


  return (
    

<div className="container  ">

<div className="card-header" align="center"><h2>TIENDA DON GALLETON</h2></div>
    <div className="row  mt-5" align="center" >  
        <div className="col-6">
           <img src="./content/cookie.png" onClick={goVenta} alt="venta" width="150" height="150"/>
            <h2>VENTA</h2>
        </div>
        <div className="col-6"> 
        <img src="./content/cocina.png" onClick={goCocina}alt="cocina" width="150" height="150"/>
            <h2>COCINA</h2> 
        </div>
    </div>

    <div className="row  mt-5" align="center">  
        <div className="col-6">
           <img src="./content/inventario.png" onClick={goInventario}alt="inventario" width="150" height="150"/>
            <h2>INVENTARIO</h2>
  
        </div>
        <div className="col-6"> 
        <img src="./content/ganancia.png" onClick={goGanancia} alt="ganancia" width="150" height="150"/>
            <h2>GANANCIA</h2> 
        </div>
    </div>
</div>

  );
}
