function recuperaCookie() {
  var cookies = document.cookie.split(';');
  cookies.forEach(function (cookie) {
    var coppia = cookie.split('=');
    var nome = coppia[0].trim();
    var valore = coppia[1];

    if (nome === 'data1') {
      document.getElementById('data1').value = valore;
    } else if (nome === 'data2') {
      document.getElementById('data2').value = valore;
    } else if (nome === 'data3') {
      document.getElementById('data3').value = valore;
    }
  });
}

window.onload = recuperaCookie;

function salvaCookie() {
  var data1 = document.getElementById("data1").value;
  var data2 = document.getElementById("data2").value;
  var data3 = document.getElementById("data3").value;

  var unaSettimanaInMillisecondi = 7 * 24 * 60 * 60 * 1000;
  var scadenza = new Date(Date.now() + unaSettimanaInMillisecondi);

  document.cookie = `data1=${data1};expires=${scadenza.toUTCString()}`;
  document.cookie = `data2=${data2};expires=${scadenza.toUTCString()}`;
  document.cookie = `data3=${data3};expires=${scadenza.toUTCString()}`;

  alert("Cookie salvati per una settimana!");
}