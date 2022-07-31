const startNumber = 5
const flipCard = document.querySelector(".flip-card")

const topHalf = flipCard.querySelector(".top")
const bottomHalf = flipCard.querySelector(".bottom")
const topFlip = document.createElement("div")
topFlip.classList.add("top-flip")
const bottomFlip = document.createElement("div")
bottomFlip.classList.add("bottom-flip")

topHalf.textContent = startNumber
bottomHalf.textContent = startNumber
topFlip.textContent = startNumber
bottomFlip.textContent = startNumber - 1

topFlip.addEventListener("animationstart", e => {
    topHalf.textContent = startNumber - 1
})

topFlip.addEventListener("animationend", e => {
    topFlip.remove()
})

bottomFlip.addEventListener("animationend", e => {
    bottomHalf.textContent = startNumber - 1
    bottomFlip.remove()
})

flipCard.append(topFlip, bottomFlip)