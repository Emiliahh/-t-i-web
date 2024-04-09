window.addEventListener("scroll", function () {
    let navbar = document.getElementById("navi-head");
    if (window.pageYOffset > 50) {
        console.log(window.pageYOffset);
        navbar.classList.add("navi-head-fixed");
    }
    else {
        navbar.classList.remove("navi-head-fixed");
    }

})
function sideshow() {
    const side = document.querySelector('.side-bar');
    console.log("running");
    side.style.display = "flex";
    side.style.transition = "all 0.5s ease-out";
}

function sideclose(){
    const side=document.querySelector('.side-bar');
    console.log("runing")
    side.style.display="none";
    side.style.transition = "all 0.5s ease-out";
}