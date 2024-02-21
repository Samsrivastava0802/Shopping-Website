let clothes = document.getElementById("clothes");
let blogs = document.getElementById("blogs");
let contacts = document.getElementById("contact");
let reviews = document.getElementById("review");

clothes.addEventListener("click", function(){
    clothes.style.color="red";
    blogs.style.color="black";
    contacts.style.color="black";
    reviews.style.color="black";

})

reviews.addEventListener("click", function(){
    clothes.style.color="black";
    blogs.style.color="red";
    contacts.style.color="black";
    reviews.style.color="black";

})

blogs.addEventListener("click", function(){
    clothes.style.color="black";
    blogs.style.color="black";
    contacts.style.color="black";
    reviews.style.color="red";

})

contacts.addEventListener("click", function(){
    clothes.style.color="black";
    blogs.style.color="black";
    contacts.style.color="red";
    reviews.style.color="black";

})

let login = document.getElementById("login");

document.addEventListener("DOMContentLoaded", function() {
    
    let login = document.querySelector("#login");
    login.addEventListener("click", function(){
        let loginPage = document.querySelector(".loginPage");
        loginPage.style.display="block";
    });
});

let loged = document.getElementById("loged");

loged.addEventListener("click", function(){
    let email = document.getElementById("email");
    let pass = document.getElementById("pass");

    if(email.value == "" || pass.value == ""){
        alert("Please Enter Email Password")
    }else{
        alert("You Loged In")
        document.querySelector(".loginPage").style.display="none";

    }

})

let submit = document.getElementById("submit");

submit.addEventListener("click", function(){
    console.log("Aa");
    let names = document.getElementById("name");
    let password = document.getElementById("pass");

    console.log(names.value);
    if(names.value == "" || password == ""){
        alert("Please Enter Name and Password")
    }else{
        alert("Thanks for connecting")
    }
})

