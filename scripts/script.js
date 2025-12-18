/*
   Доп. задание: добавить возможность закрыть меню 
   кликом за пределами этого элемента 
   (с затемнением фона).
    */

    const menu = document.querySelector(".navMenu");
    const openBtn = document.querySelector("#openBtn");
    const closeBtn = document.querySelector("#closeBtn");

    openBtn.addEventListener("click", () => {
        menu.classList.add('open')
    })

    closeBtn.addEventListener("click", () => {
        menu.classList.remove('open')
    })