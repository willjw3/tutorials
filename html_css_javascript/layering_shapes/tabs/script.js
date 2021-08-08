const first = {title: "Item 1", description: "This is item 1.", color: "beige"};
const second = {title: "Item 2", description: "This is item 2.", color: "lightgray"};
const third = {title: "Item 3", description: "This is item 3", color: "lightsteelblue"};

let tab1 = {};
let tab2 = {};
let tab3 = {};
let title = document.getElementById("title");
let description = document.getElementById("description")
let layer = document.getElementById("parent");

const buttons = document.getElementsByClassName("child");

function showLayer(event) {
    
    switch(event.target.value) {
        case 'first':
            tab1.style.zIndex = "10";
            tab2.style.zIndex = "-10";
            tab3.style.zIndex = "-10";
            title.innerHTML = first.title;
            description.innerHTML = first.description;
            layer.style.backgroundColor = first.color;
            break;
        case 'second':
            tab1.style.zIndex = "-10";
            tab2.style.zIndex = "10";
            tab3.style.zIndex = "-10";
            title.innerHTML = second.title;
            description.innerHTML = second.description;
            layer.style.backgroundColor = second.color;
            break;
        case 'third':
            tab1.style.zIndex = "-10";
            tab2.style.zIndex = "-10";
            tab3.style.zIndex = "10";
            title.innerHTML = third.title;
            description.innerHTML = third.description;
            layer.style.backgroundColor = third.color;
            break;
        default:
            console.log('Error: Unable to handle click event.')
    }
}

for (let i = 0; i < buttons.length; i++) {
    switch (buttons[i].value) {
        case 'first':
            tab1 = buttons[i];
            break;
        case 'second':
            tab2 = buttons[i];
            break;
        case 'third':
            tab3 = buttons[i];
            break;
        default:
            console.log('Error: Unable to assign button to variable.')
    }
    buttons[i].addEventListener('click', showLayer)
}
