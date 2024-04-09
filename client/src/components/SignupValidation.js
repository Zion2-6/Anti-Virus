function Validation(values){
  let error = {}
    const email_pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    const password_pattern = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,}$/
    //name
    if (values.firstname === "") {
      error.firstname = "First name should not be empty";
    } else {
      error.firstname = "";
    }
    if (values.lastname === "") {
      error.lastname = "Last name should not be empty";
    } else {
      error.lastname = "";
    }
    //email
    if (values.email === ""){
        error.email = "Email should not be empty"
    }
    else if (!email_pattern.test(values.email)){
        error.email = "Email does not match"
    }
    else {
        error.email = ""
    }
    //checks both passwords
    if (values.password === ""){
        error.password = "Password should not be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password = "Pass does not match"
    }
    else {
        error.password = ""
    }
    if (values.password2 === ""){
      error.password2 = "Password should not be empty"
    }
    else if (!password_pattern.test(values.password)){
        error.password2 = "Pass does not match"
    }
    else {
        error.password2 = ""
    }
    // street address
    if (values.street === "") {
      error.street = "Street address should not be empty";
    } else {
      error.street = "";
    }
    //state
    if (values.state === "") {
      error.state = "State should not be empty";
    } else {
      error.state = "";
    }
    //zip code
    if (values.zip === "") {
      error.zip = "Zip should not be empty";
    } else {
      error.zip = "";
    }
    //phone number
    if (values.phone === "") {
      error.phone = "Phone number should not be empty";
    } else {
      error.phone = "";
    }
    //age
    if (values.age === "") {
      error.age = "Age should not be empty";
    } else {
      error.age = "";
    }
    //dob
    if (values.dob === "") {
      error.dob = "Age should not be empty";
    } else {
      error.dob = "";
    }

    if(!values.userRoles){
      error.userRole ="Please select a user role";
    } else if (!['Patient', 'Doctor', 'Receptionist'].includes(values.userRole)){
      error.userRole="Invalid user role"
    }
    return error;
}

export default Validation;