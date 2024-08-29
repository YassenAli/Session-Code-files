

// AddEventListener

// 1. Add Event
const btn = document.querySelector('.btn');
btn.addEventListener('click', () => {
    console.log('Button Clicked!');
});

// 2. Remove Event
const btn2 = document.querySelector('.btn2');
const handleClick = () => {
    console.log('Button Clicked!');
}
btn2.addEventListener('click', handleClick);
btn2.removeEventListener('click', handleClick);



// 2. Event Handler Function
const btn3 = document.querySelector('.btn3');
const handleClick2 = (e) => {
    console.log(e);
}
btn3.onclick = handleClick2;