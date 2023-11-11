window.onload = function() {
    var formData = getCookie('formData');
    if (formData) {
        formData = JSON.parse(decodeURIComponent(formData));
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('age').value = formData.age;
    }
};

function saveData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    var data = {
        name: name,
        email: email,
        age: age
    };

    var jsonData = JSON.stringify(data);

    var expirationDate = new Date();
    expirationDate.setDate(expirationDate.getDate() + 7);

    document.cookie = 'formData=' + encodeURIComponent(jsonData) + '; expires=' + expirationDate.toUTCString() + '; path=/';

    alert('Dati salvati nei cookie per una settimana!');
}

function getCookie(name) {
    var cookieArr = document.cookie.split(';');
    for (var i = 0; i < cookieArr.length; i++) {
        var cookiePair = cookieArr[i].split('=');
        if (name === cookiePair[0].trim()) {
            return cookiePair[1];
        }
    }
    return null;
}