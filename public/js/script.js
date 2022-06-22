const infoSections = document.querySelectorAll('[data-info-section]')
const infoBtns = document.querySelectorAll('[data-info-btn]')

let sectionEl

infoBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        infoBtns.forEach(btn => {
            btn.style.backgroundColor = 'white'            
        })
        infoSections.forEach(section => {
            section.style.display = 'none'
        })
        btn.style.backgroundColor = 'yellow'
        sectionEl = btn.dataset.infoBtn
        showElement(document.querySelector(`[data-info-section="${sectionEl}"]`))
    })
})

infoSections.forEach(section => {
    section.style.display = 'none'
})

function showElement(el) {
    el.style.display = 'block'
}

function id(id) {
    return document.getElementById(id)
}