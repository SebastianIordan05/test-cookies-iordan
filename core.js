// Load data from local storage when the page loads
window.onload = function() {
    var formData = localStorage.getItem('formData');
    if (formData) {
        // If there is saved data in local storage, restore the values in the form fields
        formData = JSON.parse(formData);
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('age').value = formData.age;
    }
};

// Function to save data in local storage
function saveData() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var age = document.getElementById('age').value;

    // Create a data object
    var data = {
        name: name,
        email: email,
        age: age
    };

    // Convert the data object into a JSON string and save it to local storage
    localStorage.setItem('formData', JSON.stringify(data));

    alert('Data saved in local storage!');
}