const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const heading = document.querySelector('h5');

// click

// clearBtn.addEventListener('click',runEvent);

// Double Click

// clearBtn.addEventListener('dblclick',runEvent);

// Mouse Down

// clearBtn.addEventListener('mousedown',runEvent); 

// Mouseenter

// clearBtn.addEventListener('mouseenter',runEvent); 
// clearBtn.addEventListener('mouseenter',runEvent); 

card.addEventListener('mousemove',runEvent);

// Event Handler

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`);
    heading.textContent = `MouseX : ${e.offsetX}`;
    document.body.style.backgroundColor = `rgb( ${e.offsetX}, ${e.offsetY},40)`;
}
