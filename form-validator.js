function formValidator(form) {
    let inputFields = document.querySelectorAll("input");
    let success = true;
    
    form.addEventListener("submit", function(event){
        event.preventDefault();
        inputFields.forEach(function(input){
            input.style.borderBottom = "";
            form.querySelector(".statusMessage." + input.name).innerText = "";
        });
    
        inputFields.forEach(function(input){
            if (input.type == "number" && !/^[0-9]+$/.test(input.value) && input.value != "") {
                input.style.borderBottom = "solid 2px red";
                input.focus();
                form.querySelector(".statusMessage." + input.name).innerText = "der må kun være tal.";
                success = false;
                
            }

            if(input.hasAttribute("required") && input.value == ""){
                input.style.borderBottom = "solid 2px red";
                input.focus();
                form.querySelector(".statusMessage." + input.name).innerText = "Udfyld dette felt.";
                success = false;
                
            }


        });
        if(!success) return
    });
}

export default formValidator;