window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.hook-section')
    const navLinks = document.querySelectorAll('.nav-link')
    let current = "";
    sections.forEach(section => {
        if (window.pageYOffset >= section.offsetTop - 250) {
            current = section.getAttribute('id')
        }
    })
    navLinks.forEach(link => {
        link.classList.remove('active')
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active')
        }
    })
})









