export const Venta=()=> {
    return (
    <div class="container">
        <div className="card-header" align="center"><h1 >VENTA</h1></div>
        <button type="button"  class="btn btn-primary">Ver galletas</button>
        <div id="divContenido" class="col-12">
            <div class="row mb-3">
                <div class="col-7">
                    <div class="row mb-3">
                        <div class="col">
                            <div id="divVentas" ></div>
                        </div>
                    </div>
                </div>
                <div class="col-5" id="tablePedidos">
                    <table class="table table-hover" >
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
            <div class="row mb-3">
                <div class="col-7">
                    <div class="row mb-3">
                        <h1 > Tipo Venta </h1>
                        <div class="row">
                            <div class="col-md-4">
                                <label for="txtCantidad" class="form-label">Cantidad</label>
                                <input type="number" id="txtCantidad" class="form-control"/>
                            </div>
                            <div class="col">
                                <label for="txtPrecioUso" class="form-label">Peso:</label>
                                <select class="form-select" aria-label="PESO" id="lstPeso">
                                    <option selected>Selecciona el peso</option>
                                    <option value="KG">Kilogramos</option>
                                    <option value="GR">Gramos</option>
                                </select>
                            </div>
                            <div class="col">
                                <label for="txtPrecioUso" class="form-label">Paquete:</label>
                                <select class="form-select" aria-label="PESO" id="lstPeso">
                                    <option selected>Selecciona el paquete</option>
                                    <option value="KG">1 KG</option>
                                    <option value="medio">1/2 KG</option>
                                </select>
                            </div>

                        </div>
                        <div class="row mb-3">
                            <div class="col">
                                <label for="txtPrecio">Precio</label>
                                <input type="text" id="txtPrecio" class="form-control"/>
                            </div>
                            <div class="col">
                                <br/>
                                <button type="button" class="btn btn-light">
                                    UNIDAD</button>
                            </div>
                            <div class="col"><br/>
                                <button type="button" class="btn btn-light">
                                    PRECIO</button>
                            </div>
                        </div>
                        <div class="row mb-3">
                            <div class="col"></div>
                            <div class="col" ><button type="button" class="btn btn-success"
                                   > AGREGAR +</button></div>
                            <div class="col"></div>
                        </div>
                    </div>
                </div>
                <div class="col-2">
                    <div class="row mb-3">
                        <label for="txtSubtotal" >Subtotal</label>
                    </div>
                    <div class="row mb-3">
                        <label for="txtDescuento" >Descuento</label>
                        
                    </div>
                    <div class="row mb-3">
                        <label for="txtTotal"  >Total</label>
                    
                    </div>
                    <div class="row">
                        <button type="button" class="btn btn-danger" > CANCELAR</button>
                    </div>
                </div>
                <div class="col-3" >
                    <div class="row mb-3">
                       <input type="text" id="txtSubtotal" class="form-control"/>
                    </div>
                    <div class="row mb-3">
                        <input type="number" id="txtDescuento" class="form-control"/>
                    </div>
                    <div class="row mb-3">
                        <input type="text" id="txtTotal" class="form-control"/>
                    </div>
                    <div class="row" >
                        <button type="button" class="btn btn-success" > VENDER</button>
                    </div>
                </div>
            </div>
        </div>

    </div>
    )}