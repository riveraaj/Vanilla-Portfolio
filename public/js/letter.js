const spans = document.querySelectorAll('h1 span');

let counter = 0;
setInterval(() => {
    spans[counter].classList.remove('show');
    spans[counter].classList.add('hide');
    counter++;
    if (counter === spans.length) {
        counter = 0;
    }
    spans[counter].classList.remove('hide');
    spans[counter].classList.add('show');
}, 3000);