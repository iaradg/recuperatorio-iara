<template>
      <section class="src-componentes-vista">
        <div class="jumbotron">
            <h2>Ejercicio </h2>
            <hr>
            <hr>
            <br>
            <div class= "row justify-content-center" >
            <div class="col-7">
                <vue-form :state="formstate" @submit.prevent="send()"> 
                    <validate tag="div">
                        <h1>Ingrese un texto para codificarlo</h1>
                        <br>
                        <input type="text" id="textoIngresado" v-model="formData.textoIngresado" required name="textoIngresado" autocomplete="off" class="form-control"  placeholder="Ingrese aqui el texto"/>

                        <field-messages name="textoIngresado" show="$dirty">
                            <div slot="required" class="alert alert-danger mt-1">Este campo es obligatorio</div>
                        </field-messages>
                    </validate>
                    <!-- <button class="btn btn-success my-3" :disabled="formstate.$invalid" type="submit">Enviar</button> -->
                </vue-form>
            </div>
              <!-- Representar también por debajo del input, utilizando una propiedad computada, la
               cantidad de caracteres que se van ingresando. Las actualización de todos los mensajes
              tienen que ser en el mismo momento del ingreso de información. -->

              <!-- Definir un componente que contenga esta función y que sea llamado desde el
                componente principal.    -->
        </div>
        
 <div class="row justify-content-center" > 
   <h1>{{formData.textoIngresado  | codificarTexto  }}</h1>
   <br>
  </div>
    <div class="row justify-content-center"> 
    <h1>{{formData.textoIngresado | pasarAMayuscula }}</h1>
    <br>
    </div> 
    <div class="row justify-content-center"> 
    <h1>{{formData.textoIngresado | pasarAMinuscula }}</h1>
    <br>
    </div>
     <div class="row justify-content-center"> 
    <h1>{{formData.textoIngresado | intercaladoArrancaMay }}</h1>
    <br>
    </div>
     <div class="row justify-content-center"> 
    <h1>{{formData.textoIngresado | intercaladoArrancaMin }}</h1>
   </div>
 
    
        </div>
    </section>
</template>

<script>
export default  {
    name: 'src-componentes-ejercicio',
    props: [],
    mounted () {

    },
    data () {
      return {
        formstate : {},
        formData : this.getDataInicial(),
        
      }
    },
    methods: {
        getDataInicial() {
            return {
                textoIngresado:'',
            }
        },
     
        send() { 
            this.formData= this.getDataInicial() 
            //this.formState._reset()
        },
    },
    computed: {
        /* calcularCaracteres(){
          this.textoIngresado
          let caracteres= this.textoIngresado.filter(caracter => caracter).length 
          let caracteres=this.textoIngresado.
          return{
          }
        }, */
       /*  calcularAlumnosCurso() {
           /*  let cant = 0
            this.alumnos.forEach( alumno => {
                if(alumno.curso) cant++
            }) */

          /*   let cant= this.alumnos.filter(alumno => alumno.curso).length  //filter devuelve un array nuevo desde un callback, es lo mismo que el metodo anterior  

            let total= this.alumnos.length
            return {
                ninguno:cant==0,
                todos:cant== total,
                uno: cant==1,
                cantidad: cant,
                total: total
            } */
        }, 
    }


</script>

<style>
.jumbotron{
    background-color: rgb(79, 46, 5);
    color: darkolivegreen;
  }

  hr{
    background-color: rgb(136, 123, 108);
  }
</style>