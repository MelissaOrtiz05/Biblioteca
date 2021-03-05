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
document.getElementById('res').innerHTML='subtotal de '+CanrtperroC+' perros calientes por un precio de '+perroC+' es un total de '+perroCS +" <br> <br> "+'subtotal de '+Canthamburguesa+' hamburguesa por un precio de '+hamburguesa+' es un total de '+hamburguesaS+" <br> <br> "+'subtotal de '+Cantpizza+' hamburguesa por un precio de '+pizza+' es un total de '+pizzaCant+" <br> <br> "+'subtotal de '+Canrsalchipapa+' hamburguesa por un precio de '+salchipapa+' es un total de '+salchipapaCant+" <br> <br><br> <br> "+"Total: "+total;

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
function mostrar(){
alert("mostrar  ")
    var enca=document.getElementById("tabla_datos")
      
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






     