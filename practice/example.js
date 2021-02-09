function sayHello() {
    // Extracting data from the DOM
    let name = document.getElementById('name').value;

    let newParagraph = document.createElement('p');
    newParagraph.textContent = 'Hello ' + name;

    // Altering the DOM
    document.body.appendChild(newParagraph);
}

const button = document.querySelector('button')
button.addEventListener('click', sayHello);



