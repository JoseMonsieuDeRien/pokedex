console.log("se conecto");

var coches = [
	["Polo", "Rojo", "3p"],
	["Vocho", "Azul", "2p"],
	["Lobo", "Negro", "2p"],
	["Swift", "Rojo", "5p"]
]

var contenido ="";

for (var i = 0; i < coches.length; i = i + 1){
  contenido +=  "<div class='tarjeta'>";
  contenido += "<p class='nombre'>" + coches[i][0] + "</p>";
  contenido +=  "<div class='tarjeta-info'>"
  contenido +=     "<p>" + coches[i][1] + "</p>";
  contenido +=      "<p>" + coches[i][2] + "</p>";
  contenido +=  "</div>";
  contenido += "</div>";

}

document.getElementById("aplicacion").innerHTML = contenido;