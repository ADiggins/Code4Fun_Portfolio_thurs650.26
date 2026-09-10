console.log("OpenerCheck confirmed!");

var openerElement;
//When the window has finish adding the 'my-opener' element...
window.customElements.whenDefined('my-opener').then(function () {
    openerElement = document.getElementById("opener");

    if (sessionStorage.getItem("visitorName") == null)
        openerElement.style.display = 'block'
    else
        openerElement.style.display = 'none'

    document.getElementById("visitorForm").addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(event.target);
        fetch(event.target.action, {
            method: event.target.method,
            body: formData
        }).then(
           console.log(" Done! Email sent :) "), 
           registerVisitor(false),
           openerElement.style.display = "none" 
        )
    })

    // document.getElementById("submitVisitor").addEventListener('click', function (event) {
    //     event.preventDefault();
    //     registerVisitor(false);
    //     openerElement.style.display = "none";
    // })

    document.getElementById("submitAnon").addEventListener('click', function (event) {
        event.preventDefault();
        registerVisitor(true);
        openerElement.style.display = "none";
    })
})


//sessionStorage.setItem("visitorName", "Shrek"); //SIMULATION. A visitor has seen your site!
//sessionStorage.removeItem("visitorName"); //SIMULATION. Website/server reset!




function registerVisitor(anonCheck) {
    if (!anonCheck) {
        sessionStorage.setItem("visitorName", document.getElementById("visitorName").value);
        sessionStorage.setItem("visitorCompany", document.getElementById("visitorCompany").value)
    } else {
        sessionStorage.setItem("visitorName", "anonymous")
        sessionStorage.setItem("visitorCompany", "anonymous")
    }
}

