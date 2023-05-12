const nav = document.getElementById("nav-mobile-tablet");
const stopPoint = document.getElementById('stop-nav').offsetTop;

window.addEventListener("scroll", function () {
    if (window.innerWidth < 768) {
        if (window.pageYOffset >= (stopPoint * 1.51 + 100)) {
            nav.style.bottom = "12.5%";
        } else {
            nav.style.bottom = "3.5%";
        }
    } else {
        if (window.pageYOffset >= (stopPoint * 1.7 + 100)) {
            nav.style.bottom = "12.5%";
        } else {
            nav.style.bottom = "3.5%";
        }
    }
});

function setActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav ul li a');

    sections.forEach(section => {
        const top = section.offsetTop - 50;
        const bottom = top + section.offsetHeight;
        if (window.scrollY >= top && window.scrollY < bottom) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.parentNode.classList.remove('active');
                if (link.getAttribute('href') === `#${id}`) {
                    link.parentNode.classList.add('active');
                }
            });
        }
    });
}

document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('nav ul li').forEach(li => {
            li.classList.remove('active');
        });
        link.parentNode.classList.add('active');
    });
});

window.addEventListener('scroll', setActiveLink);