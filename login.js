function signup()
{
    document.querySelector(".login-container").style.cssText ="display:none;";
    document.querySelector(".sign-container").style.cssText ="display:block;";
    document.querySelector(".container").style.cssText ="background: linear-gradient(to bottom,#5c5cad,#0a047a);";
    document.querySelector(".btn2").style.cssText ="display:block;";
    document.querySelector(".btn1").style.cssText ="display:none;";
}

function login()
{
    document.querySelector(".sign-container").style.cssText ="display:none;";
    document.querySelector(".login-container").style.cssText ="display:block;";
    document.querySelector(".container").style.cssText ="background: linear-gradient(to bottom, blue, red);";
    document.querySelector(".btn1").style.cssText ="display:block;  margin-left: 70px;";
    document.querySelector(".btn2").style.cssText ="display:none;";
}
