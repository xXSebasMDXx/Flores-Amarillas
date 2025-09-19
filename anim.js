// Sincronizar las letras con la canción
var audio = document.querySelector("audio");
var lyrics = document.querySelector("#lyrics");

// Array de objetos que contiene cada línea y su tiempo de aparición en segundos
var lyricsData = [
  { text: "Soy preso de tu mirada", time: 18 },
  { text: "De esos tus labios de rosa", time: 20 },
  { text: "Perdido en lo más profundo", time: 22 },
  { text: "De esos tus luceros negros", time: 25 },
  { text: "Deja que me salga el día", time: 28 },
  { text: "Deja que muera mi noche", time: 30 },
  { text: "Por si algún día me quisieras", time: 37 },
  { text: "Déjame soñar contigo", time: 38 },
  { text: "Deja que pueda alcanzarte", time: 40 },
  { text: "Pañuelito palomita", time: 44 },
  { text: "Soy preso de tu mirada", time: 47 },
  { text: "De esos tus labios de rosa", time: 49 },

  { text: "Tú, mi poema", time: 54 },
  { text: "Mí, melodía", time: 56 },
  { text: "Soy preso de tu mirada", time: 60 },
  { text: "De esos tus labios de rosa", time: 62 },
  { text: "Deja que me salga el día", time: 65 },
  { text: "Deja que muera mi noche", time: 67 },

  { text: "Deja que me salga el día", time: 85 },
  { text: "Deja que muera mi noche", time: 86 },


  { text: "Tú, mi poema", time: 149 },
  { text: "Mí, melodía", time: 151 },
  { text: "Soy preso de tu mirada", time: 154 },
  { text: "De esos tus labios de rosa", time: 156 },
  { text: "Deja que me salga el día", time: 160 },
  { text: "Deja que muera mi noche", time: 162 },

  { text: "Deja que me salga el día", time: 179 },
  { text: "Deja que muera mi noche", time: 180 },
];

// Animar las letras
function updateLyrics() {
  var time = Math.floor(audio.currentTime);
  console.log(time);
  var currentLine = lyricsData.find(
    (line) => time >= line.time && time < line.time + 6
  );

  if (currentLine) {
    // Calcula la opacidad basada en el tiempo en la línea actual
    var fadeInDuration = 0.1; // Duración del efecto de aparición en segundos
    var opacity = Math.min(1, (time - currentLine.time) / fadeInDuration);

    // Aplica el efecto de aparición
    lyrics.style.opacity = opacity;
    lyrics.innerHTML = currentLine.text;
  } else {
    // Restablece la opacidad y el contenido si no hay una línea actual
    lyrics.style.opacity = 0;
    lyrics.innerHTML = "";
  }
}

setInterval(updateLyrics, 1000);

//funcion titulo
// Función para ocultar el título después de 216 segundos
function ocultarTitulo() {
  var titulo = document.querySelector(".titulo");
  titulo.style.animation =
    "fadeOut 3s ease-in-out forwards"; /* Duración y función de temporización de la desaparición */
  setTimeout(function () {
    titulo.style.display = "none";
  }, 3000); // Espera 3 segundos antes de ocultar completamente
}

// Llama a la función después de 216 segundos (216,000 milisegundos)
setTimeout(ocultarTitulo, 216000);