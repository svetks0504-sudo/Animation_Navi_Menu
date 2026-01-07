/*
   Доп. задание: добавить возможность закрыть меню 
   кликом за пределами этого элемента 
   (с затемнением фона).
    */

    const menu = document.querySelector(".navMenu");
    const openBtn = document.querySelector("#openBtn");
    const closeBtn = document.querySelector("#closeBtn");
    const navDivs = document.querySelectorAll(".navDiv");
 
   

    openBtn.addEventListener("click", () => {
        menu.classList.add('open')
    })

    closeBtn.addEventListener("click", () => {
        menu.classList.remove('open')
    })


navDivs.forEach(div => {
    div.addEventListener("click", () => {
        const subMenu = div.nextElementSibling;//через div.nextElementSibling что б не открывались все подразделы
        subMenu.classList.toggle("open");
        
         const items = subMenu.querySelectorAll(".subItem");// сдесь область видемости subMenu

         items.forEach((item, index) => {//для выезда подменю по очереди(item-наш подпункт,index-для задержки анимации)
            if (subMenu.classList.contains("open")) {//если открыто тогда стили применяем
                item.style.transition = `transform 0.3s ease ${index * 0.2}s, opacity 0.3s ease ${index * 0.1}s`;
                item.style.transform = "translateX(0)";
                item.style.opacity = "1";
            } else {
                item.style.transition = "none";
                item.style.transform = "translateX(-20px)";
                item.style.opacity = "0";
            }
        });
    });
});
