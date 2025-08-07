function showAlert(placeName) {
    alert('You clicked on ' + placeName + '!');
}

// Optional: Simulate contact form submit
function submitForm(event) {
    event.preventDefault();
    // Display a simple thank you message
    document.getElementById("form-response").textContent =
        "Thank you for contacting us! We'll get back to you soon.";
    // Optionally clear form fields
    document.getElementById("name").value = '';
    document.getElementById("email").value = '';
    document.getElementById("message").value = '';
    return false;
}
