const nextImg = document.querySelector(".right-arrow");
const prevImg = document.querySelector(".left-arrow");
const listContent = document.querySelector(".carousel-content").querySelectorAll("ul li");
let listIndex = 0;

nextImg.addEventListener("click", function() {
    listContent[listIndex].classList.remove("visible-img");
    if (listIndex >= listContent.length -1) {
        listIndex = 0;
    } else {
        listIndex += 1
    }
    listContent[listIndex].classList.toggle("visible-img");

    console.log(listIndex)
});

prevImg.addEventListener("click", function() {
    listContent[listIndex].classList.remove("visible-img");
    if (listIndex <= 0) {
        listIndex = listContent.length -1;
    } else {
        listIndex -= 1
    }
    listContent[listIndex].classList.toggle("visible-img");
    console.log(listIndex)
});