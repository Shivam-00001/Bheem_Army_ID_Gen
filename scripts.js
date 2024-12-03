  // Utility function to generate a random Employee ID
  function generateEmployeeID(prefix = 'ASP', length = 6) {
    const uniqueNumber = Math.floor(Math.random() * Math.pow(10, length));
    return prefix + String(uniqueNumber).padStart(length, '0');
}

// Form submission handler
document.getElementById('employeeForm').addEventListener('submit', function (e) {
    e.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const mobile = document.getElementById('mobile').value;
    const dob = document.getElementById('dob').value;
    const address = document.getElementById('address').value;
    const imageInput = document.getElementById('image');

    // Validate image file
    if (!imageInput.files.length) {
        alert('Please upload an image.');
        return;
    }

    // Load the image and display it in the ID card
    const reader = new FileReader();
    reader.onload = function (event) {
        const profileImage = document.getElementById('profileImage');
        profileImage.src = event.target.result;
        document.getElementById('idCardContainer').style.display = 'block';
        document.getElementById('editButton').style.display = 'inline-block';
        document.getElementById('confirmButton').style.display = 'inline-block';
        document.getElementById('imageControls').style.display = 'flex';
    };
    reader.readAsDataURL(imageInput.files[0]);

    // Populate ID card data
    document.getElementById('employeeName').innerText = name;
    document.getElementById('employeeMobile').innerText = mobile;
    document.getElementById('employeeDob').innerText = dob;
    document.getElementById('employeeAddress').innerText = address;
    document.getElementById('employeeID').innerText = generateEmployeeID();
});

// Edit Button functionality
document.getElementById('editButton').addEventListener('click', function () {
    document.getElementById('imageControls').style.display = 'flex';
});

// Confirm Button functionality
document.getElementById('confirmButton').addEventListener('click', function () {
    document.getElementById('imageControls').style.display = 'none';
    document.getElementById('printButton').style.display = 'inline-block';
});

// Print Button functionality
document.getElementById('printButton').addEventListener('click', function () {
    window.print();
});
// Image adjustment events
const profileImage = document.getElementById('profileImage');

// Adjust image left position
document.getElementById('marginLeft').addEventListener('input', function () {
    const marginLeftValue = this.value + 'px';
    profileImage.style.marginLeft = marginLeftValue;  // Adjusting marginLeft of the image
});

document.getElementById('marginDown').addEventListener('input', function () {
    const marginDownValue = this.value + 'px';
    profileImage.style.marginTop = marginDownValue; // Adjusting marginTop of the image
});


// Scale the image
document.getElementById('scale').addEventListener('input', function () {
    const scaleValue = this.value;
    profileImage.style.transform = 'scale(' + scaleValue + ')';  // Scaling the image
});
