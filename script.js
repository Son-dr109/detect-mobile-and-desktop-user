// let details = navigator.userAgent; let xp = /android|iphone|kindle|ipad/i; let isMobileDevice =  xp.test(details); if(isMobileDevice == false) { console.log("you are using desktop") } else { console.log("you are using mobile") }
let phone = document.getElementById("phone");
let desktop = document.getElementById("desktop");
let wrapper = document.querySelector(".wrapper");
let details = navigator.userAgent;
let Ox1004 = /android|iphone|kindle|ipad/i;
let isMobileDevice = Ox1004.test(details);

if (isMobileDevice == false) {
    desktop.style.opacity = 1
}
else {
    phone.style.opacity = 1

    // For Mobile User to view website
    wrapper.style.marginRight = '-100px'
    wrapper.style.display = 'flex'
}