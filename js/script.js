
function openCloseSidePanel () {
    const hamburgers = document.querySelectorAll('.hamburger'),
            menu = document.querySelector('.menu'),
            closeElem = document.querySelector('.menu__close');

    hamburgers.forEach(hamburger => {
        hamburger.addEventListener('click', () => {
            menu.classList.add('active');
            document.body.style.overflow = 'hidden';
            closeHeader();
        });
    });

    closeElem.addEventListener('click', () => {
        menu.classList.remove('active');
        document.body.style.overflow = 'auto';
    });
    
};
    
openCloseSidePanel();

function closeHeader() {
    const header = document.querySelector('.header');
    header.classList.remove('fixed');
};

function openHeader() {
    const header = document.querySelector('.header');
    header.classList.add('fixed'); 
};

function byScroll() {
    const promo = document.querySelector('.promo');
    const arrow = document.querySelector('.pageup');

    window.addEventListener('scroll', () => {
        let scrollTop = window.scrollY;
        let promoCenter = promo.offsetHeight / 2;
        
        if (scrollTop > promoCenter) {
            openHeader();
        } else {
            closeHeader();
        };

        if (scrollTop > 1600) {
            arrow.classList.add('show')
        } else {
            arrow.classList.remove('show')
        }
    });
};

byScroll();

function smoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const id = link.getAttribute('href');

            document.querySelector(id).scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });
};

smoothScroll();

function sliders() {

    function useSlider(select){
        const slider = new ItcSimpleSlider(select + ' .itcss', {
            loop: true,
            autoplay: false,
            interval: 5000,
            swipe: true,
        });
    
        document.querySelector(select + ' .btn__prev').onclick = () => {
            slider.prev();
        }
    
        document.querySelector(select + ' .btn__next').onclick = () => {
            slider.next();
        }
    }
    
    
    useSlider('section.photo');
    useSlider('section.offers');
    
};

sliders();

function forms() {
    const form = document.querySelector('.form'),
          thank = document.querySelector('.connection__thank');
          allInput = document.querySelectorAll('input');

          
    function validationForm(form) {
        let result = true
        allInput.forEach(input => {
            if (input.value == '') {
                input.classList.add('error');
                result = false;
            }
        });
        return result
    };

    function removeError() {
        allInput.forEach(input => {
            if (input.classList.contains('error')) {
                input.classList.remove('error')
            }
        });
    };

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        removeError();
        if (validationForm(this)) {
            form.classList.add('hidden');
            thank.classList.add('show');
        };
    });
};

forms();


