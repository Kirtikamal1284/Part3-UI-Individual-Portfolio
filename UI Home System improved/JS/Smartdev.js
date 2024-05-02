function toggleDevice(deviceId) {
    var device = document.getElementById(deviceId);
    console.log(deviceId + ' power toggled.');
}

function updateDisplay(displayId, value, isAdjusting) {
    const display = document.getElementById(displayId);
    display.textContent = value;
    if (isAdjusting) {
        display.classList.add('large');
    } else {
        display.classList.remove('large');
    }
}

function changeFanSpeed(value) {
    console.log(`Fan speed set to: ${value}`);
}
