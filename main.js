// Ejercicio botones

const section = document.querySelector('section');

for (let i = 1; i <= 100; i++) {

const button = document.createElement('button');
    
 button.textContent = i;
    

if (i % 2 === 0) {
        button.style.backgroundColor = 'blue';
    } else {
        button.style.backgroundColor = 'red';

    }

if (i % 5 === 0) {
        button.style.color = 'green';
    }
    
    section.appendChild(button);
}

// Ejercicio arcoiris 

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const spans = document.querySelectorAll('span');

spans.forEach((span, index) => {
    span.style.color = colors[index];
});
