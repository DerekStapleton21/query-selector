headerElement = document.querySelector(".article__header")
console.log(headerElement)

headerElement.textContent = "Welcome to the Derek Blog"

allHeaderElements = document.querySelectorAll(".article__header")
console.log("this is all of them", allHeaderElements)
for(let i = 0; i < allHeaderElements.length; i++){
    allHeaderElements[i].classList.add("important")

}

document.querySelector(".dashed").classList.remove("dashed")

document.querySelector(".article__footer").classList.add("goldenrod")