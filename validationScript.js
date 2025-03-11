// Korben Link
// 3-4-2025

    // JavaScript code for form validation
    document.getElementById('myForm').addEventListener('submit', function(event){
      let userinput = document.getElementById("inputField").value;

      // Regular expression pattern for alphanumeric input
      let regex = /^[a-zA-Z0-9]*$/;

      if (!regex.test(userinput)){
        alert(`Invalid format! ${userinput}`);
        // Prevent form from submitting
        event.preventDefault(); 
      } else {
        alert(`Valid format! ${userinput}`);
      }
    })