const create = document.querySelector("#btncreate");
const copy = document.querySelector("#btncopy");
const passfield = document.querySelector("#password");
const icon =  document.querySelector('#icon');


let password = '';

create.onclick = function(){
    password = '';
    let lenght = document.querySelector("#enter").value;
    let chars = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ!"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
    let n = chars.length;
    for(var i = 0; i < lenght; i++){
        password += chars.charAt(Math.floor(Math.random()*n));
    }
    console.log(password);
    document.querySelector("#password").value = password;
}

copy.onclick = function(){
    navigator.clipboard.writeText(password);
    icon.classList.remove("fas", "fa-copy");
    icon.classList.add("green");
    icon.innerHTML = "Coppied";
    setTimeout(addagain,1000);
}
function addagain(){
    icon.classList.remove("green");
    icon.classList.add("fas", "fa-copy");
    icon.innerHTML = "";
}
