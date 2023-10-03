function sendMail(){
    var params = {
        name: document.getElementById("name").value,
        email:document.getElementById("email").value,
        message:document.getElementById("message").value,
    };
const serviceID = "service_yl12tlr";
const templateID = "template_7g6ig1r";

emailjs.send(serviceID,templateID,params).then((res) => {
        document.getElementById("name").value ="";
        document.getElementById("email").value ="";
        document.getElementById("message").value ="";
        console.log(res);
        alert("message sent");
    }).catch(err=>console.log(err));
}

