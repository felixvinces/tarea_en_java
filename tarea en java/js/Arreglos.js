class Arreglos{
    Mayor(){
      //'23;40;4;100' 
       let datos= document.getElementById("Mayor").value
       let numeros = datos.split(";") //["23","40","4","100"]
       let may=parseInt(numeros[0]) // 23
       //let dat = Json.parse(numeros[0]) // 23
       for(let i=1;i < numeros.length;i++){
          if (may < parseInt(numeros[i])){
            may = parseInt(numeros[i])//100
          } 
       }
       let resp = document.getElementById("resp")
       resp.textContent=`El mayor del arreglo[${numeros}] es= ${may}`
    }
    
    Menor() {
      let datos=document.getElementById("Menor").value
      let numeros=datos.split(";")
      let men=parseFloat(numeros[0])
      for(let i=1;i<numeros.length;i++){
        if(men>parseFloat(numeros[i])){
          men=parseFloat(numeros[i])
        }
      }
      let resp=document.getElementById("resp")
      resp.textContent=`El menor del arreglo[${numeros}] es= ${men}`
}

    Promedio()  {
      let datos=document.getElementById("datos").value
      let numeros=datos.split(";")
      let acu=0
      let pro=0
      let cont=0
      for(let i=0;i<numeros.length;i++){
        acu=acu+parseFloat(numeros[i])
        cont=cont+1
      }
      pro=acu/cont
      let resp=document.getElementById("resp")
      resp.textContent=`El promedio del arreglo[${numeros}] es = ${pro}`
    }
    
    BuscarArreglo() {
      let datos = document.getElementById("datos").value
      let arreglo = datos.split(";")
      let buscado = document.getElementById("buscado").value
      let c = 0, enc = false
      while (c < arreglo.length && enc == false) {
        if (arreglo[c] == buscado){
          enc = true
        }
        else {
          c = c + 1
        }
      }
      let resp = document.getElementById("resp")
      if (enc == true) {
        //console.log(buscado, "se encuentra en la pos: ",c)
        resp.textContent = `el dato: ${buscado} se encuentra en la posicion:${c} del arreglo$${JSON.stringify(arreglo)}`
      } else {
        //console.log(buscado," no se encuentra")
        resp.textContent = `el dato: ${buscado} no se encuentra en el arreglo${JSON.stringify(arreglo)}`
      }
    }

    Nombres_Invertidos()  {
      let datos=document.getElementById("datos").value
      let numeros=datos.split(";")
      let lim =numeros.length-1
      let revez=[]
      for(let i=lim;i >=0;i--){
        revez.push(numeros[i])
      }
      let resp=document.getElementById("resp")
      resp.textContent=`El arreglos[${numeros}] su revez es [${revez}]`
  
    }

    Adivina_El_Numero()  {
const numeros = [];
for(let i = 0; i < 100; i++) {
  numeros.push(Math.floor(Math.random() * 100));
}
  const num = document.getElementById("num").value;  
  let encontrado = false;
  let posicion = -1;
  for(let i = 0; i < numeros.length; i++) {
    if(numeros[i] == num) {
      encontrado = true;
      posicion = i;
      break;
    }
  }
  let respuesta = document.getElementById("resp");
  let respuesta2 = document.getElementById("secuencia");
  if(encontrado) {
    respuesta.innerHTML = `El número (${num}) encontro en la posición ${posicion}`
    respuesta2.innerHTML =`Esta es la secuencia del arreglo numeros de adivina el numero es [${numeros}]`
  } else {
    respuesta.innerHTML = "Número no encontrado";
  }
}

    Insertar(){
      let datos=document.getElementById("datos").value
      let numeros=datos.split(";")
      let num=document.getElementById("num").value
      num=parseInt(num)
      let num2=document.getElementById("num2").value
      num2=parseInt(num2)
      if (!isNaN(num2) && !isNaN(num)) {
        numeros.splice(num, 0, num2);
        document.getElementById("resp").textContent = `El numero ${num2} se arrego al arreglo [${numeros}]`
      } else {
        document.getElementById("resp").textContent = "Error: Ingresa números válidos para el dato y la posición.";
      }
    }

    Eliminar(){
      let datos=document.getElementById("datos").value
      let numeros=datos.split(";")
      let num=document.getElementById("num").value
      num=parseInt(num)
      if (!isNaN(num) && num >= 0 && num < numeros.length) {
        numeros.splice(num, 1);
        document.getElementById("resp").textContent =`Despues de eliminar el dato [${numeros}]`
      } else {
        document.getElementById("resp").textContent = "Error: Ingresa una posición válida dentro del arreglo.";
      }
    }

    Base2_10(){
      
    let datos=document.getElementById("datos").value
    let numeros=datos.split(";")
    let binario=[]
    let decimal=0
    let c=0
    let resp=document.getElementById("resp")
    for(let i=numeros.length-1;i>=0;i--){
      binario.push(numeros[i])
    }
    console.log(binario)
    while(c<binario.length){
      decimal+= parseInt(binario[c])*Math.pow(2,c)
     
      c=c+1
    }
    resp.textContent=`El numero en base 2 [${numeros}] en base 10 es ${decimal}`
    }
     Base10_2() {
      let num=document.getElementById("datos").value
      let binario=[]
      let binariofinal=[]
      let decimal=parseInt(num)
      let resp=document.getElementById("resp")
      while(decimal>0){
        let residuo=decimal%2
        binario.push(residuo)
        decimal=Math.floor(decimal/2)
      }
      console.log(binario)
      for(let i=binario.length-1;i>=0;i--){
        binariofinal.push(binario[i])
        console.log(binariofinal)
      }
      resp.textContent=`El numero en base 10 (${num}) en base 2 es [${binariofinal}] `
    }
   
    Suma_Divisores(){
      let num=document.getElementById("datos").value
    let numeros=num.split(";")
    let resultado=0
    let acu=0
    for(let i=0;i<numeros.length;i++){
      num=parseInt(numeros[i])
      acu=0
      for(let c=1;c<num;c++){
        if(num%c==0){
          acu=acu+c
          console.log("acumulador",acu)
        }
      }
      resultado=resultado+acu
      console.log("resultado",resultado)

    }
    let resp=document.getElementById("resp")
    resp.textContent=`La suma de los divisores del arreglo[${numeros}]  es  ${resultado}`
    }

    Perfectos(){
      let num=document.getElementById("datos").value
      let numeros=num.split(";")
      let resultado=[]
      for(let i=0;i<numeros.length;i++){
        num=parseInt(numeros[i])
        let acu=0
        for(let c=1;c<num;c++){
          if(num%c==0){
            acu=acu+c
          }
        }
        if(acu==num){
          resultado.push(num)
        }
      }
      let resp = document.getElementById("resp")
      resp.textContent=`Los numeros perfecto del arreglo[${numeros}] son= [${resultado}]`
    }
   
  Primos(){
    let num=document.getElementById("datos").value
    let numeros=num.split(";")
    let resultado=[]
    for(let i=0;i<numeros.length;i++){
      num=parseInt(numeros[i])
      let acu=0
      for(let c=1;c<num;c++){
        if(num%c==0){
          acu=acu+c
        }
      }
      if(acu==1){
        resultado.push(num)
      }
    }
    let resp = document.getElementById("resp")
    resp.textContent=`Los numeros primos del arreglo[${numeros}] son [${resultado}]`
  }
  
  Repeticion_De_Numeros(){
    let num=document.getElementById("dato").value
    let numeros=num.split(";")
    let resp=document.getElementById("resp")
    let c=0
    let a=0
    let masrep=0
    let rep=[]
    let contador=[]
    let repetidos=[]

    while(c<numeros.length){
      let con=0
      for(let i=0;i<numeros.length;i++){
        if(parseFloat(numeros[c])==parseFloat(numeros[i])){
          con=con+1
        }
      }
      contador.push(con)
      c=c+1
    }
    for(let d=0;d<contador.length;d++){
      if(parseFloat(contador[d])>masrep){
        masrep=contador[d]
        rep=numeros[d]
        a=a+1
      }else{
        if(parseFloat(contador[d])==parseFloat(masrep) && parseFloat(numeros[d])!=parseFloat(rep)){
          if(repetidos.length==0){
            repetidos.push(rep,numeros[d])
            console.log("entre aqui diferente de rep ",repetidos)
          }else{
            repetidos.push(numeros[d])
            console.log("entre aqui",repetidos)
          }

        }
      }

    }
    let SinRepetidos = [...new Set(repetidos)];
    if( a>1 ||repetidos.length==0){
      resp.textContent=`EL numero que mas se repite es ${rep} con ${masrep} repeticiones`

    }else{
      resp.textContent=`Los numeros que mas se repite son [${SinRepetidos}] con ${masrep} repeticiones`
    }
  }

Sueldos_Empleados(){
  let promedioSueldos=0
  let nombre= document.getElementById("nombre").value
  let empleados=nombre.split(";")
  let valorHora=document.getElementById("valorHoras").value
  let valorxhora=valorHora.split(";")
  let numeroHoras=document.getElementById("horas").value
  let horas=numeroHoras.split(";")
  let totalSueldos=0
  let con=0
  if (empleados.length === 0) {
    document.getElementById("resp").textContent = "Agrega al menos un empleado.";
  } else {
   for (let i = 0; i < empleados.length; i++) {
     totalSueldos+=parseFloat(horas[i])*parseFloat(valorxhora[i])
     con=con+1
    }         
    promedioSueldos=totalSueldos/con;
    document.getElementById("resp").textContent = "Promedio de sueldos: " + promedioSueldos.toFixed(2);                    
  }
}

  Vuelto_En_Billetes(){
    let cantidad =document.getElementById("vuelto").value
    cantidad = parseFloat(cantidad);
    let vueltofinal=parseInt(cantidad)
    let cantidaddecimal=Math.round((cantidad%1)*100)
    const billetesMonedas = [50, 20, 10, 5, 1, 0.5, 0.25, 0.1, 0.05, 0.01];
    let respuesta = "";
    let respuestaFormatoEspecial = "";
    for (let i = 0; i < billetesMonedas.length; i++) {
      const billeteMoneda = billetesMonedas[i];
      let contador = 0;
      while (vueltofinal >= billeteMoneda) {
        contador++;
        vueltofinal-= billeteMoneda;
      }
      if (contador > 0) {
        if (billeteMoneda >= 1) {
          respuestaFormatoEspecial += `${contador} billete${contador > 1 ? "s" : ""} de ${billeteMoneda}, `;
        }
      }
    
    respuestaFormatoEspecial = respuestaFormatoEspecial.slice(0, -2);
    document.getElementById("resp").textContent = `Cambio: ${respuestaFormatoEspecial} y ${cantidaddecimal} centavos`;
  }
    
  }
}
  const arr = new Arreglos()
 
 
  /*arr.buscarArreglo()
  /Ejempl   de uso
   const numero = 97;
  const romano = arr.decimalRomano(numero);
  console.log(`${numero} en números romanos es: ${romano}`)

     Estudiantes(){
      const notas = [
        {nombre:"ana",n1:10,n2:20},{nombre:"dan",n1:20,n2:10},{nombre:"jose",n1:30,n2:50},
        {nombre:"miguel",n1:40,n2:40},
      ]
      let est,prom
      for(let i=0;i<notas.length;i++){
        est = notas[i]
        prom = (est.n1+est.n2)/2
        console.log(est.nombre,prom)
      }
    }

    DecimalRomano(numeroDecimal) {
      const numeros = [100, 90, 50, 40, 10, 9, 5, 4, 1];
      const digitoRomanos = ['C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
      let numRomano = "";
      let indice = 0;
      while (numeroDecimal > 0) {
        while (numeroDecimal >= numeros[indice]) {
          numeroDecimal = numeroDecimal -numeros[indice];
         numRomano = numRomano+digitoRomanos[indice];
        }
       indice=indice+1;
      }
      return numRomano;
  }

 Arreglos(){
  console.log("Operaciones Arreglos")
    let c=4 
    const numeros=[]
    numeros[0]=10
    numeros[1]=20
    numeros.push(30) // posicion 2
    numeros[3]=40
    numeros[c]=50
    c=c+1
    numeros[c]=60
    c=c+1              // 0..0.1  0.75....1  
    let x = parseInt(Math.random()*10) // 0.1, 0.2     1
    numeros[c]=x
    numeros[0]=15
    let num = numeros
    let num2 = numeros[0]
    // console.table({numeros,num})
    // console.log("longitud:",numeros.length)
    // console.log(`numeros[${c}]=${numeros[c]}`)
    // console.log("numero random=",parseInt(Math.random()*100))
    // console.log(`num=${num}`)
    // console.log(`num2=${num2}`)
    // let valores = "100;50;120;50;40"
    // let datos = valores.split(";") // ["100","50","120","50","40"]
    //console.log(`valores=${valores} - datos=[${datos}]`)
    //console.table({valores,datos})
    //console.log(datos[0])
    //console.log("Listado de valores")
    // x=0
    // for(let i=0;i < datos.length;i++){
    //   console.log(datos[i])
    //   x = x + parseInt(datos[i])  
    // }
    // console.table({x})
    // let numeros2 = []
    // let n=5
    // console.log("valores random")
    // for(let i=0;i < n;i++){
    //   numeros2[i] = parseInt(Math.random()*10)  
    // }
    // console.table({numeros2})
    // for(let i=0;i < numeros2.length;i++){
    //   if (numeros2[i]%2!=0) { 
    //     console.log(`numeros[${i}]${numeros2[i]}`)
    //   }  
    // }
    let nombres = ["daniel","ana","jose","miguel","dan"]
    nombres[nombres.length]="erick"
    nombres.push("Dalia")
    console.log("listado de nombres")
    nombres.push(nombres[parseInt(Math.random()*5)])
    console.table({nombres})
    for(let i=0;i < nombres.length;i++){
      if (nombres[i]!=="ana"){
         console.log(`nombres[${i}]${nombres[i]}`)
      }
    }
    console.log("nombres del ultimo al primero")
    let lim = nombres.length-1
    for(let i=lim;i >=0;i--){
      console.log(`nombres[${i}]${nombres[i]}`)
    }
  }*/






    
  