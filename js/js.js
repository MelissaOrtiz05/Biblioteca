function ocultar(){
    var div=document.getElementById('imgN');
    div.style.display='none';
}

function mostrar(){
    var div=document.getElementById('imgN');
    div.style.display='';
}

var inicio;

function iniciarSesion(){
 
var correo=document.getElementById('txtusu').value;
var passw=document.getElementById('txtpass').value;
if((correo=="")&& (passw=="")){
  if(correo==""){
    alert ("Debe ingresar un correo valido");
  }else if(passw==""){
    alert ("Debe ingresar una contraseña");
  }
}else{
fetch('../js/arch.json')
  .then(function(resp){
   return resp.json();
})
  .then(function(datos){
    console.log(datos);
datos.forEach(function(validar) {
  if (validar.correo==correo){
    if(validar.contrasena==passw){
     // alert(validar.nombre+" "+validar.apellido)
     intento=true
      inicio=`${validar.nombre} ${validar.apellido}`
     bandera=true
     localStorage.setItem("Inicio", inicio)
     window.location=("../index.html")
    }else{
      alert("incorrecto contraseña")

      bandera=true
    }
  
  }else{
    bandera=false
  }
});
if(bandera==null){
  alert("usuario no existe")
}

})
}   
}
var usua
miStorage=window.localStorage;

function cargarD(){
 usua=miStorage.getItem('Inicio')
 document.getElementById('nombreU').innerHTML=usua;
var login=document.getElementById('iniciar');
var cerrarS=document.getElementById('cerrarSesion');
if(usua!=null){
  login.style.display='none';
  cerrarS.style.display='';

}else{
  login.style.display='';
  cerrarS.style.display='none';
}

}

function cerrar(){
  miStorage.clear();
  window.location="../index.html";

}
var arregloInfo=localStorage.getItem("arregloInfo");
arregloInfo=JSON.parse(arregloInfo);
if(arregloInfo==null){
  arregloInfo=[];
}
//var arregloInfo=[];
miespacio=window.localStorage

function guardarCont(){
  var nombreDigitado=document.getElementById("txtnombre").value;
  var pApellidoADigitado=document.getElementById("txtpApellido").value;
  var SApellidoDigitado=document.getElementById("txtsApellido").value;
  var correoDigitado=document.getElementById("txtCorreo").value;
  var fechaNacDigitado=document.getElementById("dateFecha").value;
  var edadDigitado=document.getElementById("txtEdad").value;
  var telefonoDigitado=document.getElementById("txtTelefono").value;
  var tipoLibroDigitado=document.getElementById("opcion").value;
  if(document.getElementById('precios').checked){
    var cheq="Precios";
  }else if(document.getElementById('consultarLi').checked){
    var cheq="Consultar libro";
  }else if(document.getElementById('consultarCom').checked){
    var cheq="Consultar compra de libros";
  }else if(document.getElementById('consultarAlq').checked){
    var cheq="Consultar alquiler de libros";
  }
  
  if(document.getElementById('F').checked){
    var generoDig="Femenino";
  }else if(document.getElementById('M').checked){
    var generoDig="Masculino";
  }
  if((nombreDigitado=="")||(pApellidoADigitado=="")||(SApellidoDigitado=="")||(correoDigitado=="")||(fechaNacDigitado=="")||(edadDigitado=="")||(telefonoDigitado=="")||(cheq.checked= false)||(generoDig.checked= false)){
    alert("Debe llenar todos los campos")
  }else{
    var newC={
      nombre:nombreDigitado,
      pApellido:pApellidoADigitado,
      sApellido:SApellidoDigitado,
      correo:correoDigitado,
      fechaNac:fechaNacDigitado,
      edad:edadDigitado,
      telefono:telefonoDigitado,
      tipoLibro:tipoLibroDigitado,
      motivo:cheq,
      genero:generoDig
    };

arregloInfo.push(newC);
miespacio.setItem('arregloInfo',JSON.stringify(arregloInfo));
alert("Datos guardados");

limpiarFormu();
}

}
function limpiarFormu(){
  document.getElementById("txtnombre").value="";
  document.getElementById("txtpApellido").value="";
  document.getElementById("txtsApellido").value="";
  document.getElementById("txtCorreo").value="";
  document.getElementById("dateFecha").value="";
  document.getElementById("txtEdad").value="";
  document.getElementById("txtTelefono").value="";
  document.getElementById("opcion").value="Terror";
  document.getElementById('precios').checked= false;
  document.getElementById('consultarLi').checked= false;
  document.getElementById('consultarCom').checked= false;
  document.getElementById('consultarAlq').checked= false;
  document.getElementById("F").checked= false;
  document.getElementById("M").checked= false;
}
function mostrarT(){
  var enca=document.getElementById("tabla_datos")
  enca.style.display='';

tablallena="";
tabla_datos
for(var i=0;i<arregloInfo.length;i++){
  var cuerpo=document.getElementById("elementos")
  var cli =arregloInfo[i];
  tablallena+="<tr><td>"+cli.nombre+"</td><td>"+cli.pApellido+"</td><td>"+cli.sApellido+"</td><td>"+cli.correo+"</td><td>"+cli.fechaNac+"</td><td>"+cli.telefono+"</td><td>"+cli.tipoLibro+"</td><td>"+cli.motivo+"</td><td>"+cli.genero+"</td></tr>"
  cuerpo.innerHTML=tablallena;
}  
}
Elemento=-1
function editarF(){
 var nombreDigitado=document.getElementById("txtnombre").value;
 var pApellidoADigitado=document.getElementById("txtpApellido").value;

 for(var i=0;i<arregloInfo.length;i++){
  var cli =arregloInfo[i];
  var SApellidoDigitado=document.getElementById("txtsApellido").value;

 if((cli.nombre==nombreDigitado)&&(cli.pApellido==pApellidoADigitado)){
   
     arregloInfo[Elemento]={     
      apellidoS:SApellidoDigitado
     } ;      
     alert(arregloInfo.apellidoS)
  miespacio.setItem("arregloInfo",JSON.stringify(arregloInfo));
alert("almacenado")

  }else{
  alert("Dato no encontrado")
} }


}
var arregloPed=localStorage.getItem("arregloPed");
arregloPed=JSON.parse(arregloPed);
if(arregloPed==null){
    arregloPed=[];
}
miespacio=window.localStorage

function subPerro(){
 
    var perroC=document.getElementById('txtPerroC').value;
    var CanrtperroC=document.getElementById('txtNumCPerro').value;

     var hamburguesa=document.getElementById('txtHamburguesa').value;
     var Canthamburguesa=document.getElementById('txtNumHamburguesa').value;
     var pizza=document.getElementById('txtPizza').value;
     var Cantpizza=document.getElementById('txtNumPizza').value;

     
     var salchipapa=document.getElementById('txtSalchipapa').value;
     var Canrsalchipapa=document.getElementById('txtNumSalchipapa').value;
    
   
    if(document.getElementById('radioPeso').checked){
        var moneda="Peso";
      }else if(document.getElementById('radioDolar').checked){
        var moneda="Dolar";
      }

      if(document.getElementById('radioPeso').checked){
        var perroCS=parseInt(perroC)*parseInt(CanrtperroC);
        var hamburguesaS=parseInt(hamburguesa)*parseInt(Canthamburguesa);
        var pizzaCant=parseInt(pizza)*parseInt(Cantpizza);
        var salchipapaCant=parseInt(salchipapa)*parseInt(Canrsalchipapa);
        var total=parseInt(perroCS)+parseInt(hamburguesaS)+parseInt(pizzaCant)+parseInt(salchipapaCant);
        
    
    }else if(document.getElementById('radioDolar').checked){
        var perroCS=CanrtperroC*(0.00028*perroC);
        var hamburguesaS=Canthamburguesa*(hamburguesa*0.00028);
        var pizzaCant=Cantpizza*(pizza*0.00028);
        var salchipapaCant=Canrsalchipapa*(salchipapa*0.00028);
        var total=parseFloat(perroCS)+parseFloat(hamburguesaS)+parseFloat(pizzaCant)+parseFloat(salchipapaCant);
   

}

if((perroC=="")||(CanrtperroC=="")||(moneda.checked=false)||(hamburguesa=="")||(Canthamburguesa=="")||(pizza=="")||(Cantpizza=="")||(salchipapa=="")||(Canrsalchipapa=="")){
  alert("Debe llenar todos los campos")
}else{
  var newPe={
      precioP:perroC,
      cantP:CanrtperroC,
      sbperro:perroCS,
      tpMoneda:moneda,
      precioHa:hamburguesa,
      cantH:Canthamburguesa,
      sbHamb:hamburguesaS,
      precioPi:pizza,
      cantPi:Cantpizza,
      sbPizz:pizzaCant,
      precioSal:salchipapa,
      cantSal:Canrsalchipapa,
      sbSalc:salchipapaCant,
      totalP:total
  };


arregloPed.push(newPe);
miespacio.setItem('arregloPed',JSON.stringify(arregloPed));
alert("Datos guardados");
//document.getElementById('res').innerHTML='Total '+totalD;
limpiar();
}
}
function mostrar(){

      
      tablallena="";
      for(var i=0;i<arregloPed.length;i++){
        var cuerpo=document.getElementById("elementos")
        var cli =arregloPed[i];
        tablallena+="<tr><td>"+cli.precioP+"</td><td>"+cli.cantP+"</td><td>"+cli.sbperro+"</td><td>"+cli.precioHa+"</td><td>"+cli.cantH+"</td><td>"+cli.sbHamb+"</td><td>"+cli.precioPi+"</td><td>"+cli.cantPi+"</td><td>"+cli.sbPizz+"</td><td>"+cli.precioSal+"</td><td>"+cli.cantSal+"</td><td>"+cli.sbSalc+"</td><td>"+cli.tpMoneda+"</td><td>"+cli.totalP+"</td></tr>"
        cuerpo.innerHTML=tablallena;
      }  
      
}

function limpiar(){
    document.getElementById("txtPerroC").value="";
    document.getElementById("txtHamburguesa").value="";
    document.getElementById("txtPizza").value="";
    document.getElementById("txtNumCPerro").value="";
    document.getElementById("txtNumHamburguesa").value="";
    document.getElementById("txtNumPizza").value="";
    document.getElementById("txtNumSalchipapa").value="";
    document.getElementById('radioDolar').checked= false;
    document.getElementById('radioPeso').checked= false;
} 




