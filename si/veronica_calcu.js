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
        let numero = document.getElementById("numero").value
        document.getElementById("resultado").innerHTML =' No podemos pasar de decimal a decimal'
        document.getElementById("resu").style.color="red"
        setTimeout(function (){
            console.log("listo");
            limpiar()
        },2000);
        //hacer el mensaje
    }
    // decimal a binario
    if (vero === "decimal" && pablo === "binario") {
        console.log("decimal a binario");
        let resultado =0
        let arry =[]
        let division = numero;
        while(division>0){ //hasta que el residuo no sea 0 no para
            resultado = division %2
            division=Math.trunc(division/2)  //Trunc remueve ccualquier decimal
            arry.push(resultado)
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
        let y = 0
        let arr = []
        for (let i = numero.length - 1; i >= 0; i--) { //length see sabe las vueltas que dara y con el i-- va rstandole y asi
            z = parseInt(numero[i]) * Math.pow(2, conta) //pow expoenciamos y la c se convierte en un contador
            conta++;
            y+=z 
            console.log(y +"tttt");
            arr.push(y)
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
    //binario a octal____________________________________________________________________________________________________________
    if (document.getElementById("vero").value === "binario" && document.getElementById("pablo").value === "octal") {
        console.log("Binario a octal lllllllll");
        let c = 0
        let partes1 = 3
        let octales = []
        c = numero.split("");
        let residuo = parseInt(c.length % 3)
        if (residuo == 2) {
            c.unshift("0")
        } if (residuo == 1) {
            c.unshift("0", "0")
        }
        for (i = 0; i < c.length; i += partes1) {
            let part = c.slice(i, i + partes1)
            part = part.join("")
            if (part == "000") {
                octales.unshift("0")
            } else if (part == "001") {
                octales.unshift("1")
            } else if (part == "010") {
                octales.unshift("2")
            } else if (part == "011") {
                octales.unshift("3")
            } else if (part == "100") {
                octales.unshift("4")
            } else if (part == "101") {
                octales.unshift("5")
            } else if (part == "110") {
                octales.unshift("6")
            } else if (part == "111") {
                octales.unshift("7")
            } else {
                console.log("entro aca");
                vero == "sel"
                numero =="";
                pablo == "sel"
            document.getElementById("resultado").innerHTML = `No puedes pasarte de 8`
            document.getElementById("resu").style.color="red"
            }
        }
    
        octales.reverse();
        let concat = octales.join("")
        concat = Number(concat)
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
    //octal a decimal
    if (document.getElementById("vero").value === "octal" && document.getElementById("pablo").value === "decimal"){
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

    //octal a binario
    if (document.getElementById("vero").value === "octal" && document.getElementById("pablo").value === "binario"){
        console.log("octal a binario");
        //quitarle los 0 a la izquierda
        
        let numero =  document.getElementById("numero").value
        let respuesta =numero.split('')
        let array =[];
        for (let i = 0; i < numero; i++) {
            if (respuesta[i] == "0") {
                array.push("000")
            }
            if (respuesta[i] == "1")  {
                array.push("001")
            }
            if (respuesta[i] == "2")  {
                array.push("010")
            }
            if (respuesta[i] == "3")  {
                array.push("011")
            }
            if (respuesta[i] == "4")  {
                array.push("100")
            }
            if (respuesta[i] == "5")  {
                array.push("101")
            }
            if (respuesta[i] == "6")  {
                array.push("110")
            }
            if (respuesta[i] == "7")  {
                array.push("111")
            }
        
        }
        let final=array.join('').split('');
        for (let i = 0; i < final.length; i++) {
            if (final.indexOf('0')== 0) { final.shift() } 
            if (final.indexOf('0') == 0 && final.indexOf('0') == 1) { final.slice(0,2) }   
        }
        console.log(final.join(''));
        let fin = final.join('')
        fin =Number(fin) //____--------------------------------probat
        console.log(fin);
        document.getElementById("resultado").innerHTML =fin
        document.getElementById("resu").style.color="red"

    }
    //octal a octal 
    if (document.getElementById("vero").value === "octal" && document.getElementById("pablo").value === "octal"){
        console.log("octal a octal --------------------------- ");
    }
    //octal a hexadecimal
    if (document.getElementById("vero").value === "octal" && document.getElementById("pablo").value === "hexadecimal"){
        console.log("octal a hexadecimal----------");
        arr = numero.split('')
        console.log(arr);
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == "0") {
                let i = arr.indexOf("0")
                arr[i] = '000'
            } else if (arr[i] == "1") {
                let i = arr.indexOf("1")
                arr[i] = '001'
            } else if (arr[i] == "2") {
                let i = arr.indexOf("2")
                arr[i] = '010'
            } else if (arr[i] == "3") {
                let i = arr.indexOf("3")
                arr[i] = '011'
            } else if (arr[i] == "4") {
                let i = arr.indexOf("4")
                arr[i] = '100'
            } else if (arr[i] == "5") {
                let i = arr.indexOf("5")
                arr[i] = '101'
            } else if (arr[i] == "6") {
                let i = arr.indexOf("6")
                arr[i] = '110'
            } else if (arr[i] == "7") {
                let i = arr.indexOf("7")
                arr[i] = '111'
            }
        }
        let final = arr.join('').split('')
        console.log(final);
        for (let i = 0; i < final.length; i++) {
            if (final.indexOf('0') == 0) final.shift()
            else if (final.indexOf('0') == 0 && final.indexOf('0') == 1) final.splice(0, 2)
        }
        console.log(final);
        let nuevo = final.join('')
        console.log(nuevo);
        document.getElementById("resultado").innerHTML =nuevo
        document.getElementById("resu").style.color="red"

    }
}
function hexadecimal() {
    //hexa a decimal
    if (document.getElementById("vero").value === "hexadecimal" && document.getElementById("pablo").value === "decimal"){
        console.log("hexa a decimal");
        let numero = document.getElementById("numero").value
        para = numero 
        let a = 0
        let p = 0
        let c = 0
        let d = 0
        let arr = []
        let res=[]
        let num = document.getElementById("numero").value;
        re = num
        for (let i = 0; i < re.length; i++) {
            if (re[i] == "A") {
                res.push(10)
            }
            else if (re[i] == "B") {
                res.push(11)
            }
            else if (re[i] == "C") {
                res.push(12)
            }
            else if (re[i] == "D") {
                res.push(13)
            }
            else if (re[i] == "E") {
                res.push(14)
            }
            else if (re[i] == "F") {
                res.push(15)
            } else {
                a = parseInt(re[i])
                res.push(a)
            }
        }
        for (let i = res.length - 1; i >= 0; i--) {
            p = res[i] * Math.pow(16, c)
            c++;
            d = d + p
            arr.push(d)
        }
        let ultimo = arr[arr.length - 1]
        document.getElementById("resultado").innerHTML = ultimo
        document.getElementById("resu").style.color="red"
        validar()


    }
    //hexa a binario
    if (document.getElementById("vero").value === "hexadecimal" && document.getElementById("pablo").value === "binario"){
        console.log("hexa a binario");
        let conted = 0
        let div2=[]
        let octales = []
        let numero = document.getElementById("numero").value;
        conted = numero
        console.log(conted);
        for (let i = 0; i < conted.length; i++) {
            let unidad=conted[i]
            unidad.split("")
            if (unidad == 0) {
                octales.push(0,0,0,0)
            } else if (unidad == 1) {
                octales.push(0,0,0,1)
            } else if (unidad == 2) {
                octales.push(0,0,1,0)
            } else if (unidad == 3) {
                octales.push(0,0,1,1)
            } else if (unidad == 4) {
                octales.push(0,1,0,0)
            } else if (unidad == 5) {
                octales.push(0,1,0,1)
            } else if (unidad == 6) {
                octales.push(0,1,1,0)
            } else if (unidad == 7) {
                octales.push(0,1,1,1)
            } else if (unidad == 8) {
                octales.push(1,0,0,0)
            } else if (unidad == 9) {
                octales.push(1,0,0,1)
            } else if (unidad.toUpperCase() === "A") {
                octales.push(1,0,1,0)
            } else if (unidad.toUpperCase() === "B") {
                octales.push(1,0,1,1)
            } else if (unidad.toUpperCase()=== "C") {
                octales.push(1,1,0,0)
            } else if (unidad.toUpperCase() === "D") {
                octales.push(1,1,0,1)
            } else if (unidad.toUpperCase() === "E") {
                octales.push(1,1,1,0)
            } else if (unidad.toUpperCase() === 'F') {
                octales.push(1,1,1,1)
            } else{
                console.log("aqui entro");
            }
        } 
        for (let k = 0; k < octales.length; k++) {
            let a = octales[k]
            div2.push(a);
        }
        let a = div2.join('')
        a =Number(a)
        document.getElementById("resultado").innerHTML = a
        document.getElementById("resu").style.color="red"
        validar()
    }

    //hexadecimal a octal 
    if (document.getElementById("vero").value === "hexadecimal" && document.getElementById("pablo").value === "octal"){
        console.log("hexa a octal");
        let conted = 0
        let conted2= 0 
        let div2=[]
        let partes=3
        let octales = []
        let octales2 = []
        let numero = document.getElementById("numero").value;
        conted = numero
        console.log(conted);
        for (let i = 0; i < conted.length; i++) {
            let unidad=conted[i]
            unidad.split("")
            if (unidad == 0) {
                octales.push(0,0,0,0)
            } else if (unidad == 1) {
                octales.push(0,0,0,1)
            } else if (unidad == 2) {
                octales.push(0,0,1,0)
            } else if (unidad == 3) {
                octales.push(0,0,1,1)
            } else if (unidad == 4) {
                octales.push(0,1,0,0)
            } else if (unidad == 5) {
                octales.push(0,1,0,1)
            } else if (unidad == 6) {
                octales.push(0,1,1,0)
            } else if (unidad == 7) {
                octales.push(0,1,1,1)
            } else if (unidad == 8) {
                octales.push(1,0,0,0)
            } else if (unidad == 9) {
                octales.push(1,0,0,1)
            } else if (unidad.toUpperCase() === "A") {
                octales.push(1,0,1,0)
            } else if (unidad.toUpperCase() === "B") {
                octales.push(1,0,1,1)
            } else if (unidad.toUpperCase()=== "C") {
                octales.push(1,1,0,0)
            } else if (unidad.toUpperCase() === "D") {
                octales.push(1,1,0,1)
            } else if (unidad.toUpperCase() === "E") {
                octales.push(1,1,1,0)
            } else if (unidad.toUpperCase() === 'F') {
                octales.push(1,1,1,1)
            } else{
                console.log("aqui entro");
            }
        } 
        for (let k = 0; k < octales.length; k++) {
            let a = octales[k]
            div2.push(a);
        }
        console.log("DIV2= "+div2);

        conted2=div2
        let residuo = parseInt(conted2.length % 3)
        if (residuo == 2) {
            conted2.unshift(0)
        } if (residuo == 1) {
            conted2.unshift(0,0)
        }
        for (i = 0; i < conted2.length; i += partes) {
            let part = conted2.slice(i, i + partes)
            part = part.join("")
            if (part == "000") {
                octales2.unshift("0")
            } else if (part == "001") {
                octales2.unshift("1")
            } else if (part == "010") {
                octales2.unshift("2")
            } else if (part == "011") {
                octales2.unshift("3")
            } else if (part == "100") {
                octales2.unshift("4")
            } else if (part == "101") {
                octales2.unshift("5")
            } else if (part == "110") {
                octales2.unshift("6")
            } else if (part == "111") {
                octales2.unshift("7")
            } else {
                console.log("entro aqui");
            }
        }
        octales2.reverse();
        let concat = octales2.join("")
        document.getElementById("resultado").innerHTML = concat
        document.getElementById("resu").style.color="red"
        validar()

    }
    //hexadecimal a hexadecimal
    if (document.getElementById("vero").value === "hexadecimal" && document.getElementById("pablo").value === "hexadecimal"){
        console.log("hexa a hexadecimal");
        validar()
    }
}




function validar() {

    let vero = document.getElementById("vero").value
    let numero = document.getElementById("numero").value
    veroFn = numero.toUpperCase().split("")


    if (vero === "decimal") {


        for (let i = 0; i < veroFn.length; i++) {
            if (veroFn[i] !== '0' && veroFn[i] !== '1' && veroFn[i] !== '2' && veroFn[i] !== '3' && veroFn[i] !== '4' && veroFn[i] !== '5' && veroFn[i] !== '6' && veroFn[i] !== '7' && veroFn[i] !== '8' && veroFn[i] !== '9') {
                document.getElementById("resultado").innerHTML = "NÚMERO DECIMAL NO VÁLIDO"
            } else if (veroFn[i] == ',' || veroFn[i] == '-' || veroFn[i] == '.') document.getElementById("resultado").innerHTML = "NÚMERO DECIMAL NO VÁLIDO"

        }

    } else if (vero === "binario") {


        for (let i = 0; i < veroFn.length; i++) {

            if (veroFn[i] !== '0' && veroFn[i] !== '1') {document.getElementById("resultado").innerHTML = "NÚMERO BINARIO NO VÁLIDO" ;document.getElementById("resu").style.color="red"
        }else if (veroFn[i] == ',' || veroFn[i] == '-' || veroFn[i] == '.') document.getElementById("resultado").innerHTML = "NÚMERO BINARIO NO VÁLIDO"
            document.getElementById("resu").style.color="red"
        }

    } else if (vero === "octal") {

        for (let i = 0; i < veroFn.length; i++) {

            if (veroFn[i] !== '0' && veroFn[i] !== '1' && veroFn[i] !== '2' && veroFn[i] !== '3' && veroFn[i] !== '4' && veroFn[i] !== '5' && veroFn[i] !== '6' && veroFn[i] !== '7') 
            document.getElementById("resultado").innerHTML = "NÚMERO OCTAL NO VÁLIDO"
            else if (veroFn[i] == ',' || veroFn[i] == '-' || veroFn[i] == '.')
            document.getElementById("resultado").innerHTML = "NÚMERO OCTAL NO VÁLIDO"
            document.getElementById("resu").style.color="red"


        }

    } else if (vero === "hexadecimal") {

        for (let i = 0; i < veroFn.length; i++) {

            if (veroFn[i] !== '0' && veroFn[i] !== '1' && veroFn[i] !== '2' && veroFn[i] !== '3' && veroFn[i] !== '4' && veroFn[i] !== '5' && veroFn[i] !== '6' && veroFn[i] !== '7' && veroFn[i] !== '8' && veroFn[i] !== '9' && veroFn[i] !== 'A' && veroFn[i] !== 'B' && veroFn[i] !== 'C'
                && veroFn[i] !== 'D' && veroFn[i] !== 'E' && veroFn[i] !== 'F'){
            document.getElementById("resultado").innerHTML = "NÚMERO HEXADECIMAL NO VÁLIDO";
            document.getElementById("resu").style.color="red"
        }else if (veroFn[i] == ',' || veroFn[i] == '-' || veroFn[i] == '.') 
        document.getElementById("resultado").innerHTML = "NÚMERO HEXADECIMAL NO VÁLIDO" ;
            document.getElementById("resu").style.color="red"


        }
    } 

}
function limpiar (){
    document.getElementById ("numero").value="";
    document.getElementById ("vero").value="sel";
    document.getElementById ("pablo").value="sel";
    document.getElementById("resu").style.color="";
    document.getElementById("resultado").innerHTML="";


    


}
