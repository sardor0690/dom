let cards = document.querySelectorAll('.card')

let arr = ['red', 'blue', 'aqua', 'green', 'gray', 'black', 'indigo', 'purple', 'yellow', 'orange']
function rand() {
    let i = Math.floor(Math.random() * arr.length)
    return arr[i]
}
cards.forEach(card=>{
        card.style.background = rand();
}) 