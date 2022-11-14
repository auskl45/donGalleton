import Swal from 'sweetalert2'
const vender = () => {
    Swal.fire({
        title: '¿Desea registrar la venta?',
        //text: "3 kg de Oreo",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Si, registrar'
      }).then((result) => {
        if (result.isConfirmed) {
          Swal.fire(
            'Exito !',
           'Venta registrada correctamente.',
          'success'
          )
        }
      })
   };
export const Venta=()=> {
    return (
    <div className="container">
        <div className="card-header" align="center"><h1 >VENTA</h1></div>

        <div id="divContenido" className="col-12">
            <div className="row mb-2 mt-5">
                <div className="col-7 mb-4" align="center">
                
            <div className="row" >
            <img src="./content/cookie.png" width="50" height="50" className="img-fluid " />
            <p className="mr-4"> Galleta Nuez </p>
            <img src="./content/galletaNuez.png" width="50" height="50" className="img-fluid" />
            <p className="mr-4"> Galleta Chispas </p>
            <img src="./content/galletaMantequilla.png" width="50" height="50" className="img-fluid" />
            <p> Galleta Mantequilla </p>

            </div>
            <div className="row mt-4" >
            <img src="./content/galletaAlmendras.png" width="50" height="50" className="img-fluid " />
            <p className="mr-4"> Galleta Almendras </p>
            <img src="./content/galletaConfeti.png" width="50" height="50" className="img-fluid" />
            <p className="mr-4"> Galleta Confeti </p>
            <img src="./content/galletaChocolateNegro.png" width="50" height="50" className="img-fluid" />
            <p> Galleta Chocolate Negro</p>

            </div>
                </div>

                <div className="col-5" id="tablePedidos">
                    <table className="table table-hover" >
                        <thead >
                            <tr>
                                <th>Cantidad</th>
                                <th>Concepto/ Detalle</th>
                                <th>$</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody id="tbodyPedidos"></tbody>
                    </table>
                </div>

            </div>
            <div className="row  ">
                <div className="col-7 ">
                <h3 className="d-flex justify-content-center  "> Tipo Venta </h3>
                <div className="row" >
                       
                        <div className="col-4">
                        <label for="txtCantidad" className="form-label">Cantidad</label>
                        <input type="number" id="txtCantidad" className="form-control"/>
                        <label for="txtPrecio">Precio</label>
                                <input type="text" id="txtPrecio" className="form-control"/>

                        </div>
                        <div className="col-4">
                        <label for="txtPrecioUso" className="form-label">Peso:</label>
                                <select className="form-select" aria-label="PESO" id="lstPeso">
                                    <option selected>Selecciona el peso</option>
                                    <option value="KG">Kilogramos</option>
                                    <option value="GR">Gramos</option>
                                </select>
                                <button type="button" className="btn btn-light mt-5">
                                    UNIDAD</button>
                        
                        </div>
                        <div className="col-4">
                        <label for="txtPrecioUso" className="form-label">Paquete:</label>
                                <select className="form-select" aria-label="PESO" id="lstPeso">
                                    <option selected>Selecciona el paquete</option>
                                    <option value="KG">1 KG</option>
                                    <option value="medio">1/2 KG</option>
                                </select>
                                <button type="button" className="btn btn-light mt-5">
                                    PRECIO</button>
                        </div>


                </div>
                <div className="row   d-flex justify-content-center mt-4" >
                <button type="button" className="btn btn-success" onClick={vender}> AGREGAR</button>
                </div>
                </div>

                <div className="col-2">
                    <div className="row mb-3">
                        <label for="txtSubtotal" >Subtotal</label>
                    </div>
                    <div className="row mb-3">
                        <label for="txtDescuento" >Descuento</label>
                        
                    </div>
                    <div className="row mb-3">
                        <label for="txtTotal"  >Total</label>
                    
                    </div>
                    
               
                </div>
                <div className="col-3" >
                    <div className="row mb-3">
                       <input type="text" id="txtSubtotal" className="form-control"/>
                    </div>
                    <div className="row mb-3">
                        <input type="number" id="txtDescuento" className="form-control"/>
                    </div>
                    <div className="row mb-3">
                        <input type="text" id="txtTotal" className="form-control"/>
                    </div>
                    <div className="row" >
                        <button type="button" className="btn btn-success mr-2" onClick={vender} > VENDER</button>
                        <button type="button" className="btn btn-danger" > CANCELAR</button>
                    </div>
                    
                    
                </div>
                
            </div>
            
        </div>
        

    </div>
    )}