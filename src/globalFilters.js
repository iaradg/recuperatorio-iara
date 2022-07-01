import Vue from 'vue'
/* 1) Codificado: se hará cambiando las vocales de la siguiente forma: a por u, e por o,
la i queda igual, o por e y u por a. Considerar pasar el texto ingresado a minúscula
antes de realizar el cambio. */
Vue.filter('codificarTexto', function(value){
    let texto = value.split("")
    for (let i = 0; i < texto.length; i++) {
        switch (texto[i].toLowerCase()) {
        case"a":
              texto[i]= "u"
              break;
        case"e":
              texto[i]= "o"
              break;
        case"o":
              texto[i]= "e"
              break;
        case"u":
              texto[i]= "a"
              break;
          
      }
    }
    
    return texto.join("")
})
/* 2) Todo en mayúscula. */
Vue.filter('pasarAMayuscula', function(value) {
    return value.toUpperCase()
})
/* 3) Todo en minúscula. */
Vue.filter('pasarAMinuscula', function(value) {
    return value.toLowerCase()
})

/* 4) Minúsculas y mayúsculas intercaladas, empezando por mayúscula.*/
Vue.filter('intercaladoArrancaMay', function(value) {
    let texto = value.split('')
  
    for (let i=0 ; i < texto.length; i++) {
        console.log('entraMay')
        if(i%2==0 || i==0){
            texto[i]=texto[i].toUpperCase()
        }else{
            texto[i]=texto[i].toLowerCase()

        }
    }
    return texto.join('')
})

/*5) Minúsculas y mayúsculas intercaladas, empezando por minúscula. */
Vue.filter('intercaladoArrancaMin', function(value) {
    let texto = value.split('')
    console.log('entraMin')
    for (let i=0 ; i < texto.length; i++) {
        console.log('entraMinfor')
        if(i%2==0 || i==0){
            texto[i]=texto[i].toLowerCase()
        }else{
            texto[i]=texto[i].toUpperCase()
        }
        console.log(texto)
    }
   return texto.join('')
    })



