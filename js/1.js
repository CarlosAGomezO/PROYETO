function hola(){
  alert("ADVERTENCIA  --  El contenido del foro es Volatil.");
}
hola();
function envio(){
  var sesion;
  var comentario;
  var fecha = new Date();
  var mes = fecha.getMonth();
  mes = mes+1
      sesion = document.getElementById("conjunto");
      comentario = document.getElementById("comentario").value;
  var el1 = document.createElement("div");
  el1.className = "unidad";
  sesion.appendChild(el1);
  var el2 = document.createElement("div");
  el2.className = "fondotexto";
  el1.appendChild(el2);
  var el3 = document.createElement("h2");
  el3.className = "fe-chan";
  el3.innerHTML= "-" + fecha.getDate() + "/" + mes+ "/" + fecha.getFullYear() + " " + fecha.getHours() + ":" + fecha.getMinutes() + ":" + fecha.getSeconds() + "-";
  el2.appendChild(el3);
  var el4 = document.createElement("h2");
  el4.className = "outcom";
  el4.innerHTML= comentario;
  el2.appendChild(el4);
var comp = document.getElementById("comentario");
comp.value = "";
}
