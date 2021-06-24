function setFormMessage(formElement, type, message){
    const messageElement = formElement.querySelector(".formMessage");

    messageElement.textContent = message;
    messageElement.classList.remove("formMessageSuccess", "formMessageError");
    messageElement.classList.add('formMessage--${type}');
}

function setInputError(inputElement, message){
    inputElement.classList.add("formInputError");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = message;
}

function clearInputError(inputElement){
    inputElement.classList.remove("formInputError");
    inputElement.parentElement.querySelector(".formInputErrorMessage").textContent = "";
}

document.addEventListener("DOMContentLoaded", () =>{
    const loginForm = document.querySelector("#login")
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
    
    e.preventDefault(); // prevents the redirect from the href
    loginForm.classList.add("formHidden");
    createAccountForm.classList.remove("formHidden");
    }); // end querySelector("#linkCreateAccount")

    document.querySelector("#linkLogin").addEventListener("click", e => {

        e.preventDefault();
        loginForm.classList.remove("formHidden");
        createAccountForm.classList.add("formHidden");
    }); // end querySelector("#linkLogin")

    loginForm.addEventListener("submit", e => {
         e.preventDefault();

        // Perform login
        setFormMessage(loginForm, "error", "Invalid Username or Password!")
    }); // end addEventListener("submit"

    document.querySelectorAll(".formInput").forEach(inputElement => {
         inputElement.addEventListener("blur", e => {
             if(e.target.id === "signUp" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Must have at least 10 charecters.");
                /*
                 if (e.target.id === "signUpName" && e.target.value.length > 0 && e.target.value.length < 10){
                 setInputError(inputElement, "Username must have at least 10 charecters.");
                 } 
                 else if (e.target.id === "signUpPassword" && e.target.value.length > 0 && e.target.value.length < 10){
                    setInputError(inputElement, "Password must have at least 10 charecters.");
                 }
                 else if (e.target.id === "signUpEmail" && e.target.value.length > 0 && e.target.value.length < 10){
                        setInputError(inputElement, "Email must have at least 10 charecters.");
                    }
             } // end signUp
             if (e.target.id === "loginUser"){
                if (e.target.id === "signUpName" && e.target.value.length > 0 && e.target.value.length < 10){
                    setInputError(inputElement, "Username must have at least 10 charecters.");
                } 
                else if (e.target.id === "signUpPassword" && e.target.value.length > 0 && e.target.value.length < 10){
                       setInputError(inputElement, "Password must have at least 10 charecters.");
                }*/
             } // end if signUp
             else if(e.target.id === "loginUser" && e.target.value.length > 0 && e.target.value.length < 10){
                setInputError(inputElement, "Usually contain at least 10 charecters.");
             } // end else if loginUser
         }); // end querySelectorAll(".formInput")

         // clear any errors when the user types inside
        inputElement.addEventListener("input", e => {
               clearInputError(inputElement);
         });

    }); // end querySelectorAll(".formInput")

}); // end addEventListener("DOMContentLoaded"