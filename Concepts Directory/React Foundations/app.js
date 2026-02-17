window.addEventListener("scroll", () => {
    const sections = document.querySelectorAll('.content-section');
    const navLinks = document.querySelectorAll('.nav-link');

    let current = ""
    let threshold = 200

    sections.forEach(section => {
        let sectionTop = section.offsetTop
        if(window.pageYOffset >= sectionTop - threshold){
            current = section.getAttribute('id');
        }
    })


    navLinks.forEach(link => {
        link.classList.remove("active")
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    })
})


// -------------------------------------------------------------

const toggle = document.getElementById('toggle-frag-switch')
const alt = document.getElementById('frag-alt')
const main = document.getElementById('frag-main')
const badge = document.getElementById('mode-badge')


toggle.addEventListener("change", () => {
    if (toggle.checked) {
        alt.style.display = 'none'
        main.style.display = 'block'
        badge.textContent = 'Fragment Mode'
        badge.className = 'px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-black uppercase rounded w-fit mb-1 transition-colors'
    } else {
        alt.style.display = 'block'
        main.style.display = 'none'
        badge.textContent = 'Div Mode'
        badge.className = 'px-2 py-0.5 bg-red-100 text-red-700 text-[9px] font-black uppercase rounded w-fit mb-1 transition-colors'
    }
})




