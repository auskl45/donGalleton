export const Cocina=(props)=> {
    
    let usenavigate=props.navigateProps()
const goMerma = () => {
   usenavigate('/cocina/merma')
  };
    return (
        <div className="container">
        <div className="card-header" align="center"><h1 >COCINA</h1></div>

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
                <h5>Receta</h5>
                   <div className="row mt-4" > 
                   <div className="col-6" >
                      <img src="./content/book.png" width="50" height="50" className="img-fluid" />
                    </div>
                    <div className="col-6" >
                    <button type="button" className="btn btn-success"> Cocinar</button>
                    </div>
                    </div>
                    <h3 className="mt-5">Galletas requeridas</h3>
                    <div className="row mt-4" > 
                   <div className="col-6" >
                      <img src="./content/book.png" width="50" height="50" className="img-fluid" />
                    </div>
                    <div className="col-6 " >
                    <input id="" type="text"  class="form-control"  placeholder="Cantidad" readonly/>
                    
                    <button type="button" className="btn btn-danger mt-4 " onClick={goMerma}> Registrar Merma</button>
                    </div>
                    
                    </div>

                </div>

            </div>

        </div>

    </div>

    )}