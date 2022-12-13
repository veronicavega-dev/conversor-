let arr =[]
let re =0

function calcular() {
let vero = document.getElementById("vero").value
let pablo = document.getElementById("pablo").value
let numero = document.getElementById("numero").value

    let arry =[]
    // decimal a decimal
    if (vero === "decimal" && pablo === "decimal") {
        console.log("imal a imal");
        document.getElementById("resultado").innerHTML =' No podemos pasar de decimal a decimal'
        document.getElementById("resu").style.color="red"
        setTimeout(function (){
            console.log("listo");
            limpiar()
        },3000);
        //hacer el mensaje
    }
    // decimal a binario
    if (vero === "decimal" && pablo === "binario") {
        console.log("decimal a binario");
        let solucion =0
        let arry =[]
        let division = numero;
        while(division>0){ //hasta que el residuo no sea 0 no para
            solucion = division %2
            division=Math.trunc(division/2)  //Trunc remueve ccualquier decimal
            arry.push(solucion)
        }
        let invertido = arry.reverse() //revertimos el array
        let concatenado = invertido.join('') //juntamos elementos de la matriz
        document.getElementById("resultado").innerHTML = concatenado
        document.getElementById("resu").style.color="red"
    }
    //decimal a octal 
    if (vero=== "decimal" && pablo === "octal") {
        // let numero = document.getElementById("numero").value
        console.log("decimal a octal ");
        let division = numero;
        while(division>0){ //hasta que no sea 0 no para
            re = division %8     //se divide y residuo
            division=Math.trunc(division/8) //trunc elimina el residuo
            arry.push(re) //lo agregamos al array
            console.log(arry);
        }
        let invertido = arry.reverse()  //revertimos
        console.log(invertido);
        let concatenado = invertido.join('') //unimos la matriz
        console.log(concatenado);
        document.getElementById("resultado").innerHTML = concatenado
        document.getElementById("resu").style.color="red"

    }

    //decimal a hexadecimal
    if (vero === "decimal" && pablo === "hexadecimal") {
        console.log("decimal a hexadecimal");
        let numero = document.getElementById("numero").value
        let resul =0
        let division = numero;
        while(division>0){ // hasta que la division no sea 0 eeen tonces ontinuara
            resul = division %16
            division=Math.trunc(division/16) //el trunc elimina los decimales que le sacamos con el %
            arry.push(resul)
        }
        let invertido = arry.reverse() //invertimos los valores el array
        for (let i = 0; i < invertido.length; i++) { //hacemos un for , este for con el .length sabe las vueltas que va a dar y lo sustituimos
            if (invertido[i] == 10) { let i = invertido.indexOf(10) ;invertido[i] = "A" ; console.log(invertido[i]); }
            if (invertido[i] == 11) { let i = invertido.indexOf(11) ;invertido[i] = "B" ;console.log(invertido[i]); }
            if (invertido[i] == 12) { let i = invertido.indexOf(12) ;invertido[i] = "C" ;console.log(invertido[i]);}
            if (invertido[i] == 13) { let i = invertido.indexOf(13) ;invertido[i] = "D" ; console.log(invertido[i]);}
            if (invertido[i] == 14) { let i = invertido.indexOf(14) ;invertido[i] = "E" ;console.log(invertido[i]);}
            if (invertido[i] == 15) { let i = invertido.indexOf(15) ;invertido[i] = "F" ;console.log(invertido[i]); }
        }
        let fin =invertido.join('') //lo invertimos y lito
        document.getElementById("resultado").innerHTML = fin
        document.getElementById("resu").style.color="red"

        }
        //lo arme por funiones para usar menos recursos asi que estas funciones lo rdirccionan 
        //prdon las variabls pero tuvimos unos pedillos jaja
    if (vero ==="binario") {
        binario() 
    }
    if (vero==="hexadecimal") {
        hexadecimal()
    }
    if (vero ==="octal") {
        octal()
    }
}

function binario() {
    let pablo = document.getElementById("pablo").value
    let vero =document.getElementById("vero").value
    let numero=document.getElementById("numero").value
    //binario a decimal ___________________________________________________________________________________________________________
    if (vero === "binario" && pablo === "decimal") {
        console.log("binario a decimal");
        let conta = 0
        let valor = 0
        let arr = []
        let resul= 0
        for (let i = numero.length - 1; i >= 0; i--) { //length see sabe las vueltas que dara y con el i-- va rstandole y asi
            resul = parseInt(numero[i]) * Math.pow(2, conta) //pow expoenciamos y la c se convierte en un contador
            conta++;  //contador
            valor+=resul  //asignamos el resultado a valor
            console.log(valor +"tttt");
            arr.push(valor) //lo agregamos al array
        }
        let ultimo = arr[arr.length - 1] //sacamos el ultimo valor del array jeje
        document.getElementById("resultado").innerHTML = ultimo
        document.getElementById("resu").style.color="red"


    }
    //binario a binario _________________________________________________________________________________________________________
    if (vero === "binario" && pablo === "binario") {
        console.log("binario a binario");
        document.getElementById("resultado").innerHTML =`no puedes convertir de binario a binario`
        document.getElementById("resu").style.color="red"
        setTimeout(function (){
            console.log("listo");
            limpiar()
        },2000);

    }
    //binario a octal__________________________________________________________________________________________________________
    if (document.getElementById("vero").value === "binario" && document.getElementById("pablo").value === "octal") {
        console.log("Binario a octal lllllllll");
        // el numero de binario debe dividirse en 3 
        // si hacen falta deben agregarse los 0 necesarios
        let c = 0; cantidad = 3
        let arrays = [] 
        c = numero.split(""); // inicializamos la variable y le asignamos un resultado
        let residuo = parseInt(c.length % 3) //recorremos la matriz y la dividimos
        //agregamos los 0 faltantes 
        if (residuo == 2) { c.unshift("0") }
        if (residuo == 1) {c.unshift("0", "0")}
        //comparamos y los sustituimos
        for (i = 0; i < c.length; i += cantidad) {
            let part = c.slice(i, i +  cantidad)
            part = part.join("")
            if (part == "000") {
                arrays.unshift("0")
            } else if (part == "001") {
                arrays.unshift("1")
            } else if (part == "010") {
                arrays.unshift("2")
            } else if (part == "011") {
                arrays.unshift("3")
            } else if (part == "100") {
                arrays.unshift("4")
            } else if (part == "101") {
                arrays.unshift("5")
            } else if (part == "110") {
                arrays.unshift("6")
            } else {
                arrays.unshift("7")
            }
        }
    
        arrays.reverse(); //revertimos el array
        let concat = arrays.join("")  //unimos
        concat = Number(concat) //quitamos 0 del inicio
        document.getElementById("resultado").innerHTML = concat
        document.getElementById("resu").style.color="red"
        


    }
    //binario a hexadecimal_____________________________________________________________________________________________________
    if (document.getElementById("vero").value === "binario" && document.getElementById("pablo").value === "hexadecimal") {
        console.log("Binario a hexa");
        let contador = 0; let partes = 4 ;let arr = []
        contador = numero.split(""); // el split lo divide
        let residuo = parseInt(contador.length % 4) // lo parseo para que sea numero y lo divido entre cuatro //dependiendo el resultado se le agregan 0 para completar
        if(residuo==3){ // el array . se le agrega con el unsift
            contador.unshift("0")
        }
        if (residuo == 2) {
            contador.unshift("0","0")
        } if (residuo == 1) {
            contador.unshift("0", "0","0")
        }
        console.log(contador);
        for (i = 0; i < contador.length; i += partes) { //luego se compara con este for y se agrega a un nuevo array
            let part = contador.slice(i, i + partes)
            part = part.join("")
            console.log(part);
            if (part == "0000") {
                arr.unshift("0")
            } else if (part == "0001") {
                arr.unshift("1")
            } else if (part == "0010") {
                arr.unshift("2")
            } else if (part == "0011") {
                arr.unshift("3")
            } else if (part == "0100") {
                arr.unshift("4")
            } else if (part == "0101") {
                arr.unshift("5")
            } else if (part == "0110") {
                arr.unshift("6")
            } else if (part == "0111") {
                arr.unshift("7")
            } else if (part == "1000") {
                arr.unshift("8")
            }else if (part == "1001") {
                arr.unshift("9")
            }else if (part == "1010") {
                arr.unshift("A")
            }else if (part == "1011") {
                arr.unshift("B")
            }
            else if (part == "1100") {
                arr.unshift("C")
            }else if (part == "1101") {
                arr.unshift("D")
            }else if (part == "1110") {
                arr.unshift("E")
            }
            else if (part == "1111") {
                arr.unshift("F")
            }
        }
        arr.reverse(); //se revierte el nuevo array 
        let concat = arr.join("") //se divide y se muestra
        document.getElementById("resultado").innerHTML = concat
        document.getElementById("resu").style.color="red"
    }
}

function octal() {
    let pablo = document.getElementById("pablo").value
    let vero =document.getElementById("vero").value
    let numero=document.getElementById("numero").value
    //octal a decimal
    if (vero === "octal" && pablo === "decimal"){
        let numero= document.getElementById("numero").value
        c = 0
        d = 0
        arr = []
        for (let i = numero.length - 1; i >= 0; i--) {
                p = parseInt(numero[i]) * Math.pow(8, c)
                c++;
                d = d + p
                arr.push(d)
            }
        let ultimo = arr[arr.length - 1]
        console.log(ultimo + " numero");
        document.getElementById("resultado").innerHTML = ultimo
        document.getElementById("resu").style.color="red"
    }

    //octal a binario ok
    if (vero === "octal" && pablo === "binario"){
        console.log("octal a binario----------");
        let arry=[]
        arry = numero.split("")  //separamos el numero
        console.log(arry);
        for (let i = 0; i < arry.length; i++) { //hacmos la comparacion y lo sustituimos
            if (arry[i] == "0") {;  let i = arry.indexOf("0");  arry[i] = '000'
            } else if (arry[i] == "1") {; let i = arry.indexOf("1"); arry[i] = '001'
            } else if (arry[i] == "2") {; let i = arry.indexOf("2"); arry[i] = '010'
            } else if (arry[i] == "3") {; let i = arry.indexOf("3"); arry[i] = '011'
            } else if (arry[i] == "4") {;  let i = arry.indexOf("4"); arry[i] = '100'
            } else if (arry[i] == "5") {; let i = arry.indexOf("5"); arry[i] = '101'
            } else if (arry[i] == "6") {; let i = arry.indexOf("6"); arry[i] = '110'
            } else if (arry[i] == "7") {; let i = arry.indexOf("7"); arry[i] = '111' }
        }
        let final = arry.join('').split('')
        console.log(final);
        for (let i = 0; i < final.length; i++) {if (final.indexOf('0') == 0) final.shift() ; else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2)}
        console.log(final);
        let fin = final.join('') //juntamos nuevamente porque lo habiamos separado
        document.getElementById("resu").style.color="red"
        console.log(fin);
        document.getElementById("resultado").innerHTML = fin

    }
    //octal a octal  //ok
    if (vero === "octal" && pablo === "octal"){
        console.log("octal a octal --------------------------- ");
        document.getElementById("resultado").innerHTML =' No podemos pasar de Octal a Octal'
        setTimeout(function (){
            console.log("listo");
            limpiar()
        },3000);
    }
    //octal a hexadecimal
    if (vero === "octal" && pablo === "hexadecimal"){
        //para pasar de octal a hexadecimal primero hay que pasarlo a binario 
        //de binario a hexadecimal sustituyendo 
        let arry=[]
        arry = numero.split("") //split para dividirlo
        console.log(arry);
        for (let i = 0; i < arry.length; i++) { //sustituimos a binario
            if (arry[i] == "0") {
                let i = arry.indexOf("0")
                arry[i] = 'y000'
            } else if (arr[i] == "1") {
                let i = arry.indexOf("1")
                arry[i] = '001'
            } else if (arry[i] == "2") {
                let i = arry.indexOf("2")
                arry[i] = '010'
            } else if (arry[i] == "3") {
                let i = arry.indexOf("3")
                arry[i] = '011'
            } else if (arry[i] == "4") {
                let i = arry.indexOf("4")
                arry[i] = '100'
            } else if (arry[i] == "5") {
                let i = arry.indexOf("5")
                arry[i] = '101'
            } else if (arry[i] == "6") {
                let i = arry.indexOf("6")
                arry[i] = '110'
            } else if (arry[i] == "7") {
                let i = arry.indexOf("7")
                arry[i] = '111'
            }
        }
        let terminado = arry.join('').split('') 
        console.log(terminado+ "fin");
        for (let i = 0; i < terminado.length; i++) {
            if (terminado.indexOf('0') == 0) terminado.shift() // si se encuentra
            else if (terminado.indexOf('0') == 0 && terminado.indexOf('0') == 1) terminado.splice(0, 2) //eliminar desde el 0 hasta el 1
        }
        console.log(terminado);
        let nuevo = terminado.join('')
        console.log(nuevo);
        //binario a hexadecimal--------------------------------------------------------------------------bin = 0
        let partes = 4
        let ultimoRsultado = []
        let numero2 = nuevo
        let bin = numero2.split("");
        let resultado = parseInt(bin.length % 4) //recorremos el binario y lo dividimos en 4 
        // a este resultado se le agregan los ceros hasta llegar a los que necesitamos que son (4)
        if(resultado==3){ bin.unshift("0") }
        else if (resultado == 2) { bin.unshift("0","0") } 
        else { bin.unshift("0", "0","0") }
        console.log(bin);

        for (i = 0; i < bin.length; i += partes) { //recorremos el binario , lo dividimos en las partes y lo reemplazamos
            let part = bin.slice(i, i + partes) // dveolvemos un nuevo array iniciamos en 0 y le sumamos las partes
            part = part.join("") //unimos  y sustituimos
            console.log(part);
            if (part == "0000") {
                ultimoRsultado.unshift("0")
            } else if (part == "0001") {
                ultimoRsultado.unshift("1")
            } else if (part == "0010") {
                ultimoRsultado.unshift("2")
            } else if (part == "0011") {
                ultimoRsultado.unshift("3")
            } else if (part == "0100") {
                ultimoRsultado.unshift("4")
            } else if (part == "0101") {
                ultimoRsultado.unshift("5")
            } else if (part == "0110") {
                ultimoRsultado.unshift("6")
            } else if (part == "0111") {
                ultimoRsultado.unshift("7")
            } else if (part == "1000") {
                ultimoRsultado.unshift("8")
            }else if (part == "1001") {
                ultimoRsultado.unshift("9")
            }else if (part == "1010") {
                ultimoRsultado.unshift("A")
            }else if (part == "1011") {
                arr2.unshift("B")
            }
            else if (part == "1100") {
                ultimoRsultado.unshift("C")
            }else if (part == "1101") {
                ultimoRsultado.unshift("D")
            }else if (part == "1110") {
                ultimoRsultado.unshift("E")
            }
            else if (part == "1111") {
                ultimoRsultado.unshift("F")
            }
        }
        ultimoRsultado.reverse(); //revertimos el valor
        let concat = ultimoRsultado.join("") //unimos el valor
        document.getElementById("resultado").innerHTML = concat
        document.getElementById("resu").style.color="red"
    }
}

function hexadecimal() { //falta revisar hexadecimal a octal
    let pablo = document.getElementById("pablo").value
    let vero =document.getElementById("vero").value
    let numero=document.getElementById("numero").value
    //hexa a decimal
    if (vero === "hexadecimal" && pablo=== "decimal"){
        console.log("hexa a decimal");
        let nums=[]
        nums = numero.toUpperCase().split("") // oloamos n maysulas y lo sparamos

        for (let i = 0; i < nums.length; i++) { //for para rorrr l array y reemplazar 
            if (nums[i] == "A") { ;let i = nums.indexOf("A") ; nums[i] = 10
            } else if (nums[i] == "B") { ; let i = nums.indexOf("B") ; nums[i] = 11 
            } else if (nums[i] == "C") { ; let i = nums.indexOf("C") ;  nums[i] = 12
            } else if (nums[i] == "D") { ;  let i = nums.indexOf("D") ;  nums[i] = 13
            } else if (nums[i] == "E") { ;  let i = arr.indexOf("E") ;  nums[i] = 14
            } else if (nums[i] == "F") { ;   let i = nums.indexOf("F") ;   nums[i] = 15
            }
        }
        console.log(nums +" rsultao  1er for")
        let contador = 0
        let final= 0
        let pasar =0
        let resultado = []
        for (let i = nums.length - 1; i >= 0; i--) {
            pasar = parseInt(nums[i]) * Math.pow(16, contador) //ddevolvemos el resultado de la exponenciacion a 16
            contador++;
            final=pasar
            resultado.push(final) //agrgamos al array
        }
        console.log(resultado +"rsultado de exponeciacion");
        let ultimo = resultado[resultado.length - 1] //saamos el ultimo valor del array
        console.log(ultimo);
        document.getElementById("resultado").innerHTML = ultimo
        document.getElementById("resu").style.color="red"
    }
    //hexa a binario
    if (vero === "hexadecimal" && pablo === "binario"){
        console.log("hexa a binario");
        let arry=[]
        arry = numero.toUpperCase().split("")// agregamos el numero al array y lo dividimos
        console.log(arry);
        for (let i = 0; i < arry.length; i++) { //lo sustituimos
            if (arry[i] == "0") {
                let i = arry.indexOf("0")
                arry[i] = '0000'
            } else if (arry[i] == "1") {
                let i = arry.indexOf("1")
                arry[i] = '0001'
            } else if (arry[i] == "2") {
                let i = arry.indexOf("2")
                arry[i] = '0010'
            } else if (arry[i] == "3") {
                let i = arry.indexOf("3")
                arry[i] = '0011'
            } else if (arry[i] == "4") {
                let i = arry.indexOf("4")
                arry[i] = '0100'
            } else if (arry[i] == "5") {
                let i = arry.indexOf("5")
                arry[i] = '0101'
            } else if (arry[i] == "6") {
                let i = arry.indexOf("6")
                arry[i] = '0110'
            } else if (arry[i] == "7") {
                let i = arry.indexOf("7")
                arry[i] = '0111'
            } else if (arry[i] == "8") {
                let i = arry.indexOf("8")
                arry[i] = '1000'
            } else if (arry[i] == "9") {
                let i = arry.indexOf("9")
                arry[i] = '1001'
            } else if (arry[i] == "A") {
                let i = arry.indexOf("A")
                arry[i] = '1010'
            } else if (arry[i] == "B") {
                let i = arry.indexOf("B")
                arry[i] = '1011'
            } else if (arry[i] == "C") {
                let i = arry.indexOf("C")
                arry[i] = '1100'
            } else if (arry[i] == "D") {
                let i = arry.indexOf("D")
                arry[i] = '1101'
            } else if (arry[i] == "E") {
                let i = arry.indexOf("E")
                arry[i] = '1110'
            } else if (arry[i] == "F") {
                let i = arry.indexOf("F")
                arry[i] = '1111'
            }
        }
        let final = arry.join('').split('') //
        console.log(final);
        for (let i = 0; i < final.length; i++) {
            if (final.indexOf('0') == 0) final.shift();
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2);
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1 && final.indexOf('0') == 2) final.splice(0, 3);
        }

        console.log(final); 
        console.log(final.join('')); //Juntamos  y imprimimos
        document.getElementById("resu").style.color="red"
        document.getElementById("resultado").innerHTML = final.join('')
    }

    //hexadecimal a octal 
    if (vero === "hexadecimal" && pablo === "octal"){
        arr = numero.toUpperCase().split("") //hexadecimal a binario
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "0") {
                let i = arr.indexOf("0")
                arr[i] = '0000'
            } else if (arr[i] == "1") {
                let i = arr.indexOf("1")
                arr[i] = '0001'
            } else if (arr[i] == "2") {
                let i = arr.indexOf("2")
                arr[i] = '0010'
            } else if (arr[i] == "3") {
                let i = arr.indexOf("3")
                arr[i] = '0011'
            } else if (arr[i] == "4") {
                let i = arr.indexOf("4")
                arr[i] = '0100'
            } else if (arr[i] == "5") {
                let i = arr.indexOf("5")
                arr[i] = '0101'
            } else if (arr[i] == "6") {
                let i = arr.indexOf("6")
                arr[i] = '0110'
            } else if (arr[i] == "7") {
                let i = arr.indexOf("7")
                arr[i] = '0111'
            } else if (arr[i] == "8") {
                let i = arr.indexOf("8")
                arr[i] = '1000'
            } else if (arr[i] == "9") {
                let i = arr.indexOf("9")
                arr[i] = '1001'
            } else if (arr[i] == "A") {
                let i = arr.indexOf("A")
                arr[i] = '1010'
            } else if (arr[i] == "B") {
                let i = arr.indexOf("B")
                arr[i] = '1011'
            } else if (arr[i] == "C") {
                let i = arr.indexOf("C")
                arr[i] = '1100'
            } else if (arr[i] == "D") {
                let i = arr.indexOf("D")
                arr[i] = '1101'
            } else if (arr[i] == "E") {
                let i = arr.indexOf("E")
                arr[i] = '1110'
            } else if (arr[i] == "F") {
                let i = arr.indexOf("F")
                arr[i] = '1111'
            }
        }
        let final = arr.join('').split('')
        console.log(final);
        for (let i = 0; i < final.length; i++) {
            if (final.indexOf('0') == 0) final.shift()
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2)
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1 && final.indexOf('0') == 2) final.splice(0, 3)
        }
        console.log(final);
        let nuevo = final.join('')
        console.log(nuevo);
        //binario a octal--------------------------------------------------------------------------------------------
        let contador = 0
        let partes = 3
        let arr2 = []
        let numero2 = nuevo
        contador = numero2.split("");
        let residuo = parseInt(contador.length % 3)
        if (residuo == 2) {
            contador.unshift("0")
        } if (residuo == 1) {
            contador.unshift("0", "0")
        }
        for (i = 0; i < contador.length; i += partes) {
            let part = contador.slice(i, i + partes)
            part = part.join("")
            if (part == "000") {
                arr2.unshift("0")
            } else if (part == "001") {
                arr2.unshift("1")
            } else if (part == "010") {
                arr2.unshift("2")
            } else if (part == "011") {
                arr2.unshift("3")
            } else if (part == "100") {
                arr2.unshift("4")
            } else if (part == "101") {
                arr2.unshift("5")
            } else if (part == "110") {
                arr2.unshift("6")
            } else if (part == "111") {
                arr2.unshift("7")
            } 
        }
        arr2.reverse();
        let concat = arr2.join("")
        document.getElementById("resultado").innerHTML = concat

        document.getElementById("resultado").innerHTML = concat
        document.getElementById("resu").style.color="red"

    }
    //hexadecimal a hexadecimal
    if (vero  === "hexadecimal" && pablo === "hexadecimal"){
        console.log("hexa a hexadecimal");
        document.getElementById("resultado").innerHTML =' No podemos pasar de Hexadecimal a Hexadecimal'
        document.getElementById("resu").style.color="red"
        setTimeout(function (){
            console.log("listo");
            limpiar()
        },2000);
    }
}




function validar() {
    let vero = document.getElementById("vero").value
    let numero = document.getElementById("numero").value
    let veroFn = numero.toUpperCase().split("")
    
    if (vero === "decimal") {
        validar2()
        for (let i = 0; i < veroFn.length; i++) {
            if (veroFn[i] !== '0' && veroFn[i] !== '1' && veroFn[i] !== '2' && veroFn[i] !== '3' && veroFn[i] !== '4' && veroFn[i] !== '5' && veroFn[i] !== '6' && veroFn[i] !== '7' && veroFn[i] !== '8' && veroFn[i] !== '9') {
                document.getElementById("resultado").innerHTML = "NO VALIDO EL NUMERO"
            } else if (veroFn[i] == ',' || veroFn[i] == '-' || veroFn[i] == '.') {
                document.getElementById("resultado").innerHTML = " NO VÁLIDO"
            setTimeout(function (){
                console.log("listo");
                limpiar()
            },4000);
                }
        }

    } else if (vero === "binario") {
        validar2()
        for (let i = 0; i < veroFn.length; i++) {
            if (veroFn[i] !== '0' && veroFn[i] !== '1') {document.getElementById("resultado").innerHTML = "NÚMERO NO VÁLIDO" ;document.getElementById("resu").style.color="red"
        }else if (veroFn[i] == ',' || veroFn[i] == '-' || veroFn[i] == '.') 
        {document.getElementById("resultado").innerHTML = "NÚMERO NO VÁLIDO"
        setTimeout(function (){
            console.log("listo");
            limpiar()
        },4000);
        }
        }

    } else if (vero === "octal") {
        validar2()
        for (let i = 0; i < veroFn.length; i++) {
            if (veroFn[i] !== '0' && veroFn[i] !== '1' && veroFn[i] !== '2' && veroFn[i] !== '3' && veroFn[i] !== '4' && veroFn[i] !== '5' && veroFn[i] !== '6' && veroFn[i] !== '7') 
            {document.getElementById("resultado").innerHTML = "NÚMERO NO VÁLIDO"
            setTimeout(function (){
                console.log("listo");
                limpiar()
            },4000);
        } else if (veroFn[i] == ',' || veroFn[i] == '-' || veroFn[i] == '.'){
            document.getElementById("resultado").innerHTML = "NÚMERO  NO VÁLIDO"
            setTimeout(function (){
                console.log("listo");
                limpiar()
            },4000);
        }
    }

    } else if (vero === "hexadecimal") {

        for (let i = 0; i < veroFn.length; i++) {

            if (veroFn[i] !== '0' && veroFn[i] !== '1' && veroFn[i] !== '2' && veroFn[i] !== '3' && veroFn[i] !== '4' && veroFn[i] !== '5' && veroFn[i] !== '6' && veroFn[i] !== '7' && veroFn[i] !== '8' && veroFn[i] !== '9' && veroFn[i] !== 'A' && veroFn[i] !== 'B' && veroFn[i] !== 'C'
                && veroFn[i] !== 'D' && veroFn[i] !== 'E' && veroFn[i] !== 'F'){
            document.getElementById("resultado").innerHTML = "NÚMERO  NO VÁLIDO";
            document.getElementById("resu").style.color="red"
        }else if (veroFn[i] == ',' || veroFn[i] == '-' || veroFn[i] == '.') {
        document.getElementById("resultado").innerHTML = "NÚMERO  NO VÁLIDO" ;
        setTimeout(function (){
            console.log("listo");
            limpiar()
        },4000);
        }
        }
    } 

}

function validar2() {
    if (document.getElementById("numero").value =="") {
        console.log("numero");
        document.getElementById("resultado").innerHTML = "Ingresar un numero"
    }
    
}
function limpiar (){
    document.getElementById ("numero").value="";
    document.getElementById ("vero").value="sel";
    document.getElementById ("pablo").value="sel";
    document.getElementById("resu").style.color="";
    document.getElementById("resultado").innerHTML="";


    


}
