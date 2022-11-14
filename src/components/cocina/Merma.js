import Swal from 'sweetalert2'

export const Merma=()=> {
    const registrar = () => {
        Swal.fire({
            title: '¿Desea registrar la merma?',
            text: "3 kg de Oreo",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Si, registrar'
          }).then((result) => {
            if (result.isConfirmed) {
              Swal.fire(
                'Merma registrada!',
                '3 kg de Oreo.',
                'success'
              )
            }
          })
       };
    return (
 <div className="container mt-3">

<div className="card-header" align="center"><h1 >Registrar Merma</h1></div>       
 <div className="row  mt-5" align="center" >  
        <div className="col-6">
        <input type="number" class="form-control" id="inputMerma" placeholder="Cantidad"/>
        </div>
        <div className="col-6"> 
                <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Producto
                </button>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="#/">Leche</a>
                    <a className="dropdown-item" href="#/">Galleta</a>
                    <a className="dropdown-item" href="#/">Harina</a>
                </div>
    </div>

        </div>
    </div>
    <div className="row  mt-5" align="center" > 
    <div className="col-12">  
    <button type="button" onClick={registrar} class="btn btn-danger">Registrar </button>
    </div>

    </div>
    
</div>
    

      

    )}