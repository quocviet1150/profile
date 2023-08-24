// main.ts
window.onscroll = () => {
    let header = document.querySelector(".header") as HTMLElement;

    header.classList.toggle("sticky", window.screenY > 100);
};
