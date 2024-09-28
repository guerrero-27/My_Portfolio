document.querySelectorAll('.header').forEach(header => {
    header.addEventListener('click', function() {
        var description = this.nextElementSibling;
        var icon = this.querySelector('.toggle-icon');

        if (description.classList.contains('show')) {
            description.classList.remove('show');
            icon.textContent = '+';
        } else {
            description.classList.add('show');
            icon.textContent = '-';
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burger-menu');
    const navLinks = document.querySelector('.nav-links');
    const navItems = document.querySelectorAll('.nav-links li');

    burgerMenu.addEventListener('click', function() {
        navLinks.classList.toggle('active');

        
        navItems.forEach((item, index) => {
            if (navLinks.classList.contains('active')) {
                setTimeout(() => {
                    item.style.opacity = '1';
                }, index * 100); 
            } else {
                item.style.opacity = '1'; 
            }
        });
    });
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
            entry.target.classList.add('left');
        } else {
            entry.target.classList.remove('left');
        }
    });
});


const hiddenElements = document.querySelectorAll('.hidden');
if (hiddenElements) {
    hiddenElements.forEach((el) => observer.observe(el));
}

const swiper = new Swiper(".swiper", {
    slidesPerView: "auto",
    spaceBetween: 30,
});
