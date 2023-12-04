class Numeros{
    Vuelto(){
        let pago = document.getElementById("pago").value
        pago = parseInt(pago)
        let num = document.getElementById("num").value
        num = parseInt(num)
        let precio = document.getElementById("precio").value
        precio = parseInt(precio)
        let iva = document.getElementById("iva").value
        iva = parseInt(iva)
        let resp = document.getElementById("resp")
        let precioFinal = 0
        let precioTotal = 0
       precioTotal = num * precio
        iva = iva / 100
        precioFinal = precioTotal + precioTotal * iva
        let vuelto = pago - precioFinal 
        resp.textContent = `Se pago ${pago} y el precio total de la compra es: ${precioFinal.toFixed(2)} y el vuelto es ${vuelto}`
    }
    Multiplo(){
        let num = document.getElementById("num").value
        num = parseInt(num)
        let multi = document.getElementById("multi").value
        multi = parseInt(multi)
        let resp = document.getElementById("resp")
        if (num % multi == 0){
            resp.textContent=`${multi} Es multiplo de ${num}`
        }else{
            resp.textContent=`${multi} No es multiplo de ${num}`
        }
    }

    Divisores(){
    let c = 1
    let num = document.getElementById("num").value
    let resp = document.getElementById("resp")
    let divisores = " "
    num = parseInt (num)
    while (c < num) {
    if (num % c == 0){
        divisores = divisores + " " + c.toString ()+ "," 
    
    }
   c = c + 1
}
resp.textContent = `Los divisores de ${num} son: ${divisores}.`;
}
    
    
    SumaDivisores(){
        let c=1
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let divisores = " "
        let r = 0
        num = parseInt (num)
        while (c < num) {
        if (num % c == 0){
            r = r + c
            divisores = divisores + " " + c.toString () + ","
        }
       c = c + 1
        }
        resp.textContent = `El resultado de la suma de divisores${divisores} es: ${r}.`;
    }
    
    CantidadDivisores(){
        let c=1
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let divisores = " "
        let r = 0
        num = parseInt (num)
        while (c < num) {
        if (num % c == 0){
            r = r + 1
            divisores = divisores + " " + c.toString () + ","
        }
       c = c + 1
        }
        resp.textContent = `La cantidad de divisores que hay es de : ${r}.`;
    }
    
    Perfecto(){
        let c = 1
        let num = document.getElementById("num").value
        let resp = document.getElementById("resp")
        let divisores = " "
        let r = 0
        num = parseInt (num)
        while (c < num) {
        if (num % c == 0){
            r = r + c
            divisores = divisores + " " + c.toString ()
        }
       c = c + 1
        }
        if (num == r){
        resp.textContent = "El numero es Perferto"
    }else{
        resp.textContent = "El numero no es Perferto"
    }
    }
    
    Amigos(){
        let c=1
        let r= 0, r2 = 0
        let num = document.getElementById("num").value
        let num2 = document.getElementById("num2").value
        let resp = document.getElementById("resp")
        
        num = parseInt (num)
        num2 = parseInt (num2)
        while (c < num) {
        if (num % c == 0){
            r = r + c
        }
       c = c + 1
        }
       let c2 = 1
        while (c2 < num2) {
            if (num2 % c2 == 0){
                r2 = r2 + c2
            }
           c2 = c2 + 1
        }
        if ( r == r2 ){
        resp.textContent = `El numero ${num} y ${num2} son Amigos`
    }else{
        resp.textContent = `El numero ${num} y ${num2} no son Amigos`
    }
    }
    
    Primo(){
        let num = document.getElementById("num").value
        num = parseFloat(num)
        let suma = 0
        let resp = []
  
        for (let i = 1; i <= num; i++) {
           if (num % i === 0) {
              resp.push(i);
           }
        }
     
        for (let i = 0; i < resp.length; i++) {
           suma += resp[i];
        }
        
        if (suma - 1 == num){
           document.getElementById("resp").textContent = `El número ${num} es primo`
        } else {
           document.getElementById("resp").textContent = `El número ${num} no es primo`
        }
     }
  

    PrimosGemelos(){
        let num = document.getElementById("num").value
        num = parseFloat(num)
        let num2 = document.getElementById("num2").value
        num2 = parseFloat(num2)
        let suma = 0
        let suma2 = 0
        let resp = []
        let resp2 = []
  
        for (let i = 1; i <= num; i++) {
           if (num % i === 0) {
              resp.push(i);
           }
        }
     
        for (let i = 0; i < resp.length; i++) {
           suma += resp[i];
        }
  
        for (let i = 1; i <= num2; i++) {
           if (num2 % i === 0) {
              resp2.push(i);
           }
        }
     
        for (let i = 0; i < resp2.length; i++) {
           suma2 += resp2[i];
        }
        
        suma -= 1
        suma2 -= 1
  
        if ((suma == num  && suma2 == num2) && (Math.abs(num - num2) === 2)){
           document.getElementById("resp").textContent = `Los números ${num} y ${num2} son primos gemelos`
        } else {
           document.getElementById("resp").textContent = `Los números ${num} y ${num2} NO son primos gemelos`
        }
     }
  
    NumeroInvertido(){
    /* Opcional:
       let num = document.getElementById("num").value
        num = parseFloat(num)
        let numeroInvertido = parseInt(num.toString().split('').reverse().join(''));
        document.getElementById("resp").textContent = `El numero invertido es: ${numeroInvertido}`
     }*/
     let num = document.getElementById("num").value
     let r = 0
     let resp = document.getElementById("resp")
     let inv = " "
     while (num > 0) {
        r = num % 10
       num = parseInt(num / 10)
      inv = inv + r.toString()
    }
resp.textContent = inv
}

    CantidadDigitos(){
   let num = document.getElementById("num").value
      num = parseInt(num)

      let cantidadDigitos = num.toString().length;

      document.getElementById("resp").textContent = `La cantidad de dígitos es: ${cantidadDigitos}`
   }
    
    Factorial(){
        let num = document.getElementById("num").value
        num = parseInt (num)
        let resp = document.getElementById("resp")
        let factorial = " "
        let c = 1
        while ( num >= 1 ) {
        c = c * num
        factorial = factorial + " " + c.toString()
        num = num - 1
        }
        resp.textContent = factorial 
    }
    
    Exponente(){
        let num = document.getElementById("num").value
        num = parseInt (num)
        let exp = document.getElementById("exp").value
        exp = parseInt (exp)
        let resp = document.getElementById("resp")
        //let exponente = " "
        let r = 1
        let c = 1
        for (let i = 1; i <= exp; i++) {
            c *= num;
        //exponente = exponente + c.toString () + "*"  
        }
        resp.textContent = c //exponente
    } 
    
    TablaMultiplicar(){
    let num = document.getElementById("num").value
    num = parseInt (num)
    let resp = document.getElementById("resp")
    let c = 1
    let  re 
    let multi = " "
    while (c<=12) {
       re= num * c 
       multi += num + " x " + c + " = " + re + "<br>"
       c = c + 1 
   }
   resp.innerHTML = multi
} 
    
    Fibonacia(){       
    let num = document.getElementById("num").value        
    num = parseInt(num)
    let resp = document.getElementById("resp")
    let c = 0
    let a = 0 
    let b = 1
    let cont = 2
    let fibo = "0, 1"
    while (cont < num) {
        c = a + b
        a = b
        b = c
        cont = cont + 1
        fibo = fibo + ", " + c.toString()
    }
    resp.textContent = fibo
} 
}
const numero = new Numeros();