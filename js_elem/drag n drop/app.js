const item = document.querySelector('.item')

console.log(item)

item.addEventListener('dragstart', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(event) {
    console.log('drag start', event.target)
    event.target.classList 
}

function dragend() {

}