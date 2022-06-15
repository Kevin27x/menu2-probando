let subLi = document.querySelectorAll(".nav-ul-sub");

subLi.forEach(e => {
    e.addEventListener("mouseover", () => {
        let menu = e.childNodes;

        console.log(menu.clientHeight)
    })
});