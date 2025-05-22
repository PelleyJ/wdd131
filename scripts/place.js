const temp = 10;
const wind = 5;

function calculateWindChill(t, s) {
  return (13.12 + 0.6215 * t - 11.37 * Math.pow(s, 0.16) + 0.3965 * t * Math.pow(s, 0.16)).toFixed(1);
}

const windChillOutput = document.getElementById('windchill');
if (temp <= 10 && wind > 4.8) {
  windChillOutput.textContent = `${calculateWindChill(temp, wind)} °C`;
} else {
  windChillOutput.textContent = 'N/A';
}

// Footer year and last modified
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
