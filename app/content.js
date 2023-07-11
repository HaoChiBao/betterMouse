const load = () => {
    document.createElement('div')

}


const openMouseModal = () => {
    
}

const closeMouseModal = () => {
    
}
const state = {
    controlHold: false,
    activationHold: false,
    activationKey: 'Control',
}

// activation key
window.addEventListener('keydown', (e) => {
    const key = e.key
    if(key === state.activationKey) {
        state.activationHold = true
    }
})

window.addEventListener('keyup', (e) => {
    const key = e.key
    if(key === state.activationKey) {
        state.activationHold = false
    }
})


// control key
window.addEventListener('mousedown', (e) => {
    const key = e.button
    if(key === 0) {
        state.controlHold = true
    }
})

window.addEventListener('mouseup', (e) => {
    const key = e.button
    if(key === 0) {
        state.controlHold = false
    }
})