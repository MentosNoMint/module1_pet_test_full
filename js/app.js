let next = document.querySelector('.next');
let prev = document.querySelector('.prev'); 

next.addEventListener('click', () => {
let items = document.querySelectorAll('.item')
document.querySelector('.slaider').append(items[0])
})

prev.addEventListener('click', () => {
    let items = document.querySelectorAll('.item')
    document.querySelector('.slaider').prepend(items[items.length - 1])
    })