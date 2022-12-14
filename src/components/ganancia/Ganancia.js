import Swal from 'sweetalert2'
import DatePickerComponent from '../DatePickerComponent';
export const Ganancia=()=> {
    const generarReporte = () => {
        Swal.fire(
            'Exito!',
            'Reporte Generado!',
            'success'
          )
          }
   
    return (
<div className="container ">
<div className="card-header" align="center"><h1 >GANANCIA</h1></div>
    <div className="row  mt-5" align="center" >  
        <div className="col-6">
        <h3>Detalle de venta</h3>
        <table class="table table-sm table-white">
                        <thead>
                          <tr>
                            <th scope="col">#</th>
                            <th scope="col">Cantidad</th>
                            <th scope="col">Detalle</th>
                            <th scope="col">$</th>
                            
                          </tr>
                        </thead>
                        <tbody id="">
                        <tr> <td id="">1</td>
                         <td ><input id="" type="text"  class="form-control-plaintext"  value="5"  /></td> 
                                    <td ><input id="" type="text"  class="form-control-plaintext"  value="Galleta oreo"/></td>
                                        <td ><input id="" type="text"  class="form-control-plaintext"  value="$ 150"/></td> 
                                        
                                       </tr>
                                       <tr> <td id="">2</td>
                         <td ><input id="" type="text"  class="form-control-plaintext"  value="5"  /></td> 
                                    <td ><input id="" type="text"  class="form-control-plaintext"  value="Galleta Chispas"/></td>
                                        <td ><input id="" type="text"  class="form-control-plaintext"  value="$ 150"/></td> 
                                        
                                       </tr>
                        </tbody>
                      </table>  
                      <div className="row  mt-5" align="center" > 
                      <div className="col-6" align="center" > 
                        <h4>Total vendido</h4>
                        </div>
                        <div className="col-6" align="center" > 
                      <input id="" type="text"  class="form-control"  value="$ 300" readonly/>
                      </div>
                      </div>

        </div>
        <div className="col-6">
        <h3>Seleccion de fecha</h3>
        <DatePickerComponent></DatePickerComponent>
       <br></br>
        <button  class='btn btn-success mt-5' name="btnGenerarReporte" id='' onClick={generarReporte} >Generar Reporte </button>
        </div>
    </div>
</div>
    )}