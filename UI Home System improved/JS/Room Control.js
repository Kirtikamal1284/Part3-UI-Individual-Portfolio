
const roomSettings = {
    livingRoomLight: 50,
    kitchenLight: 50,
    parentRoomLight: 50,
    livingRoomTemp: 22,
    kitchenTemp: 28,
    parentRoomTemp: 18
};

function toggleLight(elementId) {
    const light = document.getElementById(elementId);
    if (!light) {
        console.log('Error: Light element not found for', elementId);
        return;
    }

    if (light.value != 0) {
        light.value = 0; // Turn off the light
    } else {
        light.value = roomSettings[elementId]; // Restore to last saved value
    }
    roomSettings[elementId] = light.value; // Update the saved setting

    // Update display to reflect the change
    const displayId = elementId + 'Display';
    const display = document.getElementById(displayId);
    if (display) {
        display.textContent = light.value;
    } else {
        console.log('Error: Display element not found for', displayId);
    }
}

function updateLightDisplay(displayId, value) {
    const display = document.getElementById(displayId);
    if (display) {
        display.textContent = value;
        display.className = 'light-display large'; // Apply large and bold style
    } else {
        console.log('Error: Display element not found for', displayId);
    }
}

function fixLightDisplay(displayId, value) {
    const display = document.getElementById(displayId);
    if (display) {
        display.textContent = value;
        display.className = 'light-display'; // Revert to normal style
        roomSettings[displayId.replace('Display', '')] = parseInt(value, 10); // Save light setting
    } else {
        console.log('Error: Display element not found for', displayId);
    }
}

function updateTempDisplay(displayId, value) {
    const display = document.getElementById(displayId);
    if (display) {
        display.textContent = value;
        display.className = 'temp-display large'; // Apply large and bold style
    } else {
        console.log('Error: Display element not found for', displayId);
    }
}

function fixTempDisplay(displayId, value) {
    const display = document.getElementById(displayId);
    if (display) {
        display.textContent = value;
        display.className = 'temp-display'; // Revert to normal style
        roomSettings[displayId.replace('Display', '')] = parseInt(value, 10); // Save temperature setting
    } else {
        console.log('Error: Display element not found for', displayId);
    }
}

function addDevice() {
    var container = document.querySelector('.container');

    var newDevice = document.createElement('div');
    newDevice.className = 'device';
    newDevice.innerHTML = `
        <h2>New Device</h2>
        <label for="newDevicePower">Turn On/Off</label>
        <label class="switch">
            <input type="checkbox" onchange="toggleDevice('newDevice')">
            <span class="slider round"></span>
        </label>
        <input type="range" min="0" max="100" value="50" class="dimmer" id="newDeviceVolume"
        oninput="updateDisplay('newDeviceVolumeDisplay', this.value, true)"
        onchange="updateDisplay('newDeviceVolumeDisplay', this.value, false)">
        <label for="newDeviceVolume">Volume: <span id="newDeviceVolumeDisplay" class="display-value">50</span></label>
    `;

    container.appendChild(newDevice);
}
