const main = document.querySelector(".main");
const loginlink = document.querySelector(".login-link");
const registerlink = document.querySelector(".register-link");
const btnpopup = document.querySelector(".btn");
const iconClose1 = document.querySelector(".icon-close1");
const iconClose2 = document.querySelector(".icon-close2");

console.log(iconClose1)
console.log(iconClose2)
registerlink.addEventListener("click" , () => {
    main.classList.add("active");
});

loginlink.addEventListener("click" , () => {
    main.classList.remove("active");
})

btnpopup.addEventListener("click" , () => {
    main.classList.add("active-popup");
})

iconClose1.addEventListener("click" , () => {
    main.classList.remove("active-popup");
})

iconClose2.addEventListener("click" , () => {
    main.classList.remove("active-popup");
})

