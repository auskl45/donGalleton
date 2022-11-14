import Swal from 'sweetalert2'

export const Merma=()=> {
    const registrar = () => {
        Swal.fire({
            title: '¿Desea registrar la merma?',
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
               'Merma registrada correctamente.',
              'success'
              )
            }
          })
       };
    return (
 <div className="container mt-3">

<div className="card-header" align="center"><h1 >Registrar Merma</h1></div> 
      
<div className=" m-5">

 <div className="row  mt-5" align="center" >  
        <div className="col-3">
        <input type="number" class="form-control" id="inputMerma" placeholder="Cantidad"/>
        
        </div>
        <div className="col-3">
        <div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1"/>
  <label class="form-check-label" for="flexRadioDefault1">
KG  </label>
</div>
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" checked/>
  <label class="form-check-label" for="flexRadioDefault2">
LTS  </label>
</div> 
<div class="form-check">
  <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault3"/>
  <label class="form-check-label" for="flexRadioDefault3">
UD  </label>
</div>    
   
        </div>
        <div className="col-6"> 
        <div className="col">
                                
                                <select className="form-select" aria-label="PESO" id="lstPeso">
                                    <option selected>Selecciona el producto</option>
                                    <option value="LTS">Leche</option>
                                    <option value="GR">Galleta</option>
                                    <option value="GR">Harina</option>
                                </select>
                            </div>

        </div>
    </div>
    <div className="row  mt-5" align="center" > 
    <div className="col-12">  
    <button type="button" onClick={registrar} class="btn btn-danger">Registrar </button>
    </div>
    </div>
    </div>
    
</div>
    

      

    )}