// Object เพื่อเก็บสีของแต่ละปุ่มแยกตาม Bank และ A/B
const buttonColors = {
  'Bank 1': {
    '1': { a: '#000000', b: '#000000' },
    '2': { a: '#000000', b: '#000000' },
    '3': { a: '#000000', b: '#000000' },
    '4': { a: '#000000', b: '#000000' },
    '5': { a: '#000000', b: '#000000' },
    '6': { a: '#000000', b: '#000000' }
  },
  'Bank 2': {
    '1': { a: '#000000', b: '#000000' },
    '2': { a: '#000000', b: '#000000' },
    '3': { a: '#000000', b: '#000000' },
    '4': { a: '#000000', b: '#000000' },
    '5': { a: '#000000', b: '#000000' },
    '6': { a: '#000000', b: '#000000' }
  },
  'Bank 3': {
    '1': { a: '#000000', b: '#000000' },
    '2': { a: '#000000', b: '#000000' },
    '3': { a: '#000000', b: '#000000' },
    '4': { a: '#000000', b: '#000000' },
    '5': { a: '#000000', b: '#000000' },
    '6': { a: '#000000', b: '#000000' }
  },
  'Bank 4': {
    '1': { a: '#000000', b: '#000000' },
    '2': { a: '#000000', b: '#000000' },
    '3': { a: '#000000', b: '#000000' },
    '4': { a: '#000000', b: '#000000' },
    '5': { a: '#000000', b: '#000000' },
    '6': { a: '#000000', b: '#000000' }
  }
};

// Object เพื่อเก็บการตั้งค่า MIDI และ Screen Text ของแต่ละปุ่มแยกตาม Bank
const buttonSettings = {
  'Bank 1': {
    '1': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '2': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '3': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '4': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '5': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '6': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } }
  },
  'Bank 2': {
    '1': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '2': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '3': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '4': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '5': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '6': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } }
  },
  'Bank 3': {
    '1': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '2': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '3': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '4': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '5': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '6': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } }
  },
  'Bank 4': {
    '1': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '2': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '3': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '4': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '5': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } },
    '6': { mode: 'single-step-single-bank', channel: { a: 1, b: 1 }, messageType: { a: 'pc', b: 'pc' }, pcNumber: { a: 0, b: 0 }, ccNumber: { a: 0, b: 0 }, ccValue: { a: 0, b: 0 }, noteNumber: { a: 60, b: 60 }, noteVelocity: { a: 100, b: 100 }, screenText: { a: '', b: '' } }
  }
};

// ตัวแปรสำหรับควบคุม
const screenTextAInput = document.getElementById('screen-text-a');
const screenTextBInput = document.getElementById('screen-text-b');
const screenTextBLabel = document.getElementById('screen-text-b-label');
const screenColorAInput = document.getElementById('screen-color-a');
const screenColorBInput = document.getElementById('screen-color-b');
const screenColorBLabel = document.getElementById('screen-color-b-label');
const colorBarContainer = document.getElementById('colorBarContainer');
const colorBarTop = document.getElementById('colorBarTop');
const colorBarBottom = document.getElementById('colorBarBottom');
const colorPicker = document.getElementById('colorPicker');
const bankButton = document.getElementById('bankButton');
const bankPopup = document.getElementById('bankPopup');
const switchLabel = document.getElementById('switchLabel');
const modeSelect = document.getElementById('mode');
const messageTypeSelect = document.getElementById('message');
const bankTabs = document.getElementById('bankTabs');
const settingsForm = document.getElementById('settings-form');
let activeButton = null;
let currentBank = 'Bank 1';
let currentTab = 'bank-a';
const buttonStates = {};

// อัปเดตข้อความ (Screen Text หรือ SW-<button number>) และสีตามปุ่มที่เลือก
function updateSwitchLabel() {
  if (!activeButton || !activeButton.getAttribute('data-button')) {
    switchLabel.style.display = 'none';
    return;
  }

  const buttonValue = activeButton.getAttribute('data-button');
  const settings = buttonSettings[currentBank][buttonValue];
  const isABMode = settings.mode === 'single-step-two-banks' || settings.mode === 'press-down-release' || settings.mode === 'long-step';
  const bank = currentTab === 'bank-a' ? 'a' : 'b';
  const screenText = settings.screenText[bank].trim();

  let switchText = screenText || `SW-${buttonValue}${isABMode ? (bank === 'a' ? ' A' : ' B') : ''}`;
  const switchColor = buttonColors[currentBank][buttonValue][bank];

  switchLabel.textContent = switchText;
  switchLabel.style.color = switchColor;
  switchLabel.style.display = 'block';
}

// ตั้งค่าสีเริ่มต้นให้ปุ่มทั้งหมดตาม Bank เริ่มต้น
function updateButtonColors() {
  document.querySelectorAll('.button').forEach(button => {
    const buttonId = button.getAttribute('data-button');
    const state = buttonStates[`${currentBank}-${buttonId}`] || 'bank-a';
    const selectedColor = buttonColors[currentBank][buttonId][state === 'bank-a' ? 'a' : 'b'];
    button.style.backgroundColor = selectedColor;
  });
  bankButton.textContent = currentBank;
  if (activeButton) updateSwitchLabel();
  else switchLabel.style.display = 'none';
}
updateButtonColors();

// อัปเดต UI ตามโหมดที่เลือก
function updateModeUI() {
  const mode = modeSelect.value;
  const isABMode = mode === 'single-step-two-banks' || mode === 'press-down-release' || mode === 'long-step';

  if (activeButton) {
    const buttonValue = activeButton.getAttribute('data-button');
    buttonSettings[currentBank][buttonValue].mode = mode;
  }

  bankTabs.style.display = isABMode ? 'flex' : 'none';
  screenColorBLabel.style.display = isABMode ? 'block' : 'none';
  screenColorBInput.style.display = isABMode ? 'block' : 'none';
  screenTextBLabel.style.display = isABMode ? 'block' : 'none';
  screenTextBInput.style.display = isABMode ? 'block' : 'none';

  document.querySelectorAll('.message-options input[data-bank="b"]').forEach(input => {
    input.style.display = isABMode && currentTab === 'bank-b' ? 'block' : 'none';
  });
  document.querySelectorAll('.message-options input[data-bank="a"]').forEach(input => {
    input.style.display = isABMode && currentTab === 'bank-a' ? 'block' : 'none';
    if (!isABMode) input.style.display = 'block';
  });

  updateMessageTypeUI();
}

// อัปเดต UI ตาม Message Type
function updateMessageTypeUI() {
  const selectedType = messageTypeSelect.value;
  document.querySelectorAll('.message-options').forEach(option => {
    option.style.display = 'none';
  });
  document.getElementById(selectedType + '-options').style.display = 'flex';
  document.querySelector('.message-options').style.display = 'flex';
}

// โหลดการตั้งค่าเมื่อเลือกปุ่ม
function loadButtonSettings() {
  if (!activeButton) return;

  const buttonValue = activeButton.getAttribute('data-button');
  const settings = buttonSettings[currentBank][buttonValue];
  const bank = currentTab === 'bank-a' ? 'a' : 'b';

  modeSelect.value = settings.mode || 'single-step-single-bank';
  messageTypeSelect.value = settings.messageType[bank] || 'pc';
  document.getElementById('channel').value = settings.channel[bank] || 1;
  screenTextAInput.value = settings.screenText.a || '';
  screenTextBInput.value = settings.screenText.b || '';
  screenColorAInput.value = rgbToHex(buttonColors[currentBank][buttonValue].a) || '#00ff00';
  screenColorBInput.value = rgbToHex(buttonColors[currentBank][buttonValue].b) || '#0000ff';

  document.getElementById('pc-number-a').value = settings.pcNumber.a || 0;
  document.getElementById('pc-number-b').value = settings.pcNumber.b || 0;
  document.getElementById('cc-number-a').value = settings.ccNumber.a || 0;
  document.getElementById('cc-number-b').value = settings.ccNumber.b || 0;
  document.getElementById('cc-value-a').value = settings.ccValue.a || 0;
  document.getElementById('cc-value-b').value = settings.ccValue.b || 0;
  document.getElementById('note-number-a').value = settings.noteNumber.a || 60;
  document.getElementById('note-number-b').value = settings.noteNumber.b || 60;
  document.getElementById('note-velocity-a').value = settings.noteVelocity.a || 100;
  document.getElementById('note-velocity-b').value = settings.noteVelocity.b || 100;

  updateModeUI();
  updateMessageTypeUI();
  updateSwitchLabel();

  const selectedColor = buttonColors[currentBank][buttonValue][bank];
  colorBarTop.style.backgroundColor = selectedColor;
  colorBarBottom.style.backgroundColor = selectedColor;
}

// บันทึกการตั้งค่าเมื่อกด Save Settings (ไม่มีแจ้งเตือน)
settingsForm.addEventListener('submit', function(e) {
  e.preventDefault();
  if (!activeButton) return;

  const buttonValue = activeButton.getAttribute('data-button');
  const settings = buttonSettings[currentBank][buttonValue];
  const bank = currentTab === 'bank-a' ? 'a' : 'b';

  settings.mode = modeSelect.value;
  settings.messageType[bank] = messageTypeSelect.value;
  settings.channel[bank] = parseInt(document.getElementById('channel').value) || 1;
  settings.screenText.a = screenTextAInput.value;
  settings.screenText.b = screenTextBInput.value;
  buttonColors[currentBank][buttonValue].a = screenColorAInput.value;
  buttonColors[currentBank][buttonValue].b = screenColorBInput.value;

  settings.pcNumber[bank] = parseInt(document.getElementById(`pc-number-${bank}`).value) || 0;
  settings.ccNumber[bank] = parseInt(document.getElementById(`cc-number-${bank}`).value) || 0;
  settings.ccValue[bank] = parseInt(document.getElementById(`cc-value-${bank}`).value) || 0;
  settings.noteNumber[bank] = parseInt(document.getElementById(`note-number-${bank}`).value) || 60;
  settings.noteVelocity[bank] = parseInt(document.getElementById(`note-velocity-${bank}`).value) || 100;

  updateButtonColors();
  updateSwitchLabel();

  const selectedColor = buttonColors[currentBank][buttonValue][bank];
  colorBarTop.style.backgroundColor = selectedColor;
  colorBarBottom.style.backgroundColor = selectedColor;
  colorBarContainer.style.display = 'block';
});

// เมื่อเปลี่ยนโหมด
modeSelect.addEventListener('change', function() {
  if (activeButton) {
    const buttonValue = activeButton.getAttribute('data-button');
    buttonSettings[currentBank][buttonValue].mode = this.value;
    updateSwitchLabel();
  }
  updateModeUI();
});

// เมื่อเปลี่ยน Message Type
messageTypeSelect.addEventListener('change', function() {
  updateMessageTypeUI();
  if (activeButton) {
    const buttonValue = activeButton.getAttribute('data-button');
    const bank = currentTab === 'bank-a' ? 'a' : 'b';
    buttonSettings[currentBank][buttonValue].messageType[bank] = this.value;
  }
});

// เมื่อคลิกปุ่ม Bank เพื่อแสดง/ซ่อนป๊อบอัพ
bankButton.addEventListener('click', function(event) {
  event.stopPropagation();
  bankPopup.style.display = bankPopup.style.display === 'block' ? 'none' : 'block';
});

// เมื่อคลิกตัวเลือกในป๊อบอัพ
document.querySelectorAll('.bank-option').forEach(option => {
  option.addEventListener('click', function(event) {
    event.stopPropagation();
    currentBank = this.getAttribute('data-bank');
    bankPopup.style.display = 'none';
    updateButtonColors();
    if (activeButton) {
      const buttonValue = activeButton.getAttribute('data-button');
      const selectedColor = buttonColors[currentBank][buttonValue][currentTab === 'bank-a' ? 'a' : 'b'];
      colorBarTop.style.backgroundColor = selectedColor;
      colorBarBottom.style.backgroundColor = selectedColor;
      screenColorAInput.value = rgbToHex(buttonColors[currentBank][buttonValue].a);
      screenColorBInput.value = rgbToHex(buttonColors[currentBank][buttonValue].b);
      loadButtonSettings();
      updateSwitchLabel();
    } else {
      colorBarContainer.style.display = 'none';
      switchLabel.style.display = 'none';
    }
  });
});

// ซ่อนป๊อบอัพเมื่อคลิกนอก
document.addEventListener('click', function(event) {
  if (!bankButton.contains(event.target) && !bankPopup.contains(event.target)) {
    bankPopup.style.display = 'none';
  }
});

// ลบการคลิกนอกปุ่มเพื่อยกเลิกการเลือก
document.addEventListener('click', function(event) {
  const isBankOptionClick = event.target.classList.contains('bank-option');
  const isBankButtonClick = event.target.id === 'bankButton';
  const isWithinColorBar = event.target.closest('.color-bar-container');
  const isColorPicker = event.target.id === 'colorPicker';

  if (!isBankOptionClick && !isBankButtonClick && !isWithinColorBar && !isColorPicker) {
    colorPicker.style.display = 'none';
  }
});

// เมื่อคลิกปุ่มบนรูป
document.querySelectorAll('.button').forEach(button => {
  button.addEventListener('click', function(event) {
    event.stopPropagation();
    const buttonValue = this.getAttribute('data-button');
    const settings = buttonSettings[currentBank][buttonValue];
    const isABMode = settings.mode === 'single-step-two-banks' || settings.mode === 'press-down-release' || settings.mode === 'long-step';

    document.querySelectorAll('.button').forEach(btn => btn.classList.remove('active'));
    this.classList.add('active');
    activeButton = this;

    if (isABMode) {
      const currentState = buttonStates[`${currentBank}-${buttonValue}`] || 'bank-a';
      const newState = currentState === 'bank-a' ? 'bank-b' : 'bank-a';
      buttonStates[`${currentBank}-${buttonValue}`] = newState;
      currentTab = newState;
    } else {
      buttonStates[`${currentBank}-${buttonValue}`] = 'bank-a';
      currentTab = 'bank-a';
    }

    const selectedColor = buttonColors[currentBank][buttonValue][currentTab === 'bank-a' ? 'a' : 'b'];
    this.style.backgroundColor = selectedColor;
    colorBarContainer.style.display = 'block';
    colorBarTop.style.backgroundColor = selectedColor;
    colorBarBottom.style.backgroundColor = selectedColor;

    document.querySelectorAll('.bank-tab').forEach(tab => {
      tab.classList.remove('active');
      if (tab.getAttribute('data-tab') === currentTab) tab.classList.add('active');
    });

    loadButtonSettings();
    updateSwitchLabel();
  });
});

// เมื่อเปลี่ยนสีใน screen-color-a หรือ screen-color-b
[screenColorAInput, screenColorBInput].forEach(input => {
  input.addEventListener('input', function() {
    const selectedColor = this.value;
    const targetBank = this.getAttribute('data-bank');
    if (activeButton) {
      const buttonValue = activeButton.getAttribute('data-button');
      buttonColors[currentBank][buttonValue][targetBank] = selectedColor;
      if (currentTab === `bank-${targetBank}`) {
        colorBarTop.style.backgroundColor = selectedColor;
        colorBarBottom.style.backgroundColor = selectedColor;
        activeButton.style.backgroundColor = selectedColor;
        updateSwitchLabel();
      }
    }
  });
});

// เมื่อคลิกแถบสี แสดงตัวเลือกสี
[colorBarTop, colorBarBottom].forEach(bar => {
  bar.addEventListener('click', function() {
    colorPicker.style.display = 'block';
    colorPicker.value = rgbToHex(this.style.backgroundColor);
    colorPicker.focus();
  });
});

// เมื่อเปลี่ยนสีใน colorPicker
colorPicker.addEventListener('input', function() {
  const selectedColor = this.value;
  colorBarTop.style.backgroundColor = selectedColor;
  colorBarBottom.style.backgroundColor = selectedColor;
  if (activeButton) {
    const buttonValue = activeButton.getAttribute('data-button');
    if (currentTab === 'bank-a') {
      screenColorAInput.value = selectedColor;
      buttonColors[currentBank][buttonValue].a = selectedColor;
    } else {
      screenColorBInput.value = selectedColor;
      buttonColors[currentBank][buttonValue].b = selectedColor;
    }
    activeButton.style.backgroundColor = selectedColor;
    updateSwitchLabel();
  }
});

// การจัดการ A/B Bank Tabs
document.querySelectorAll('.bank-tab').forEach(tab => {
  tab.addEventListener('click', function() {
    document.querySelectorAll('.bank-tab').forEach(t => t.classList.remove('active'));
    this.classList.add('active');
    currentTab = this.getAttribute('data-tab');
    if (activeButton) {
      const buttonValue = activeButton.getAttribute('data-button');
      buttonStates[`${currentBank}-${buttonValue}`] = currentTab;
      const selectedColor = buttonColors[currentBank][buttonValue][currentTab === 'bank-a' ? 'a' : 'b'];
      activeButton.style.backgroundColor = selectedColor;
      colorBarTop.style.backgroundColor = selectedColor;
      colorBarBottom.style.backgroundColor = selectedColor;
      loadButtonSettings();
      updateSwitchLabel();
    }
  });
});

// ฟังก์ชันแปลง RGB เป็น Hex
function rgbToHex(rgb) {
  const rgbMatch = rgb.match(/^rgba?\((\d+),\s*(\d+),\s*(\d+)/);
  if (!rgbMatch) return rgb.startsWith('#') ? rgb : '#000000';
  const r = parseInt(rgbMatch[1]).toString(16).padStart(2, '0');
  const g = parseInt(rgbMatch[2]).toString(16).padStart(2, '0');
  const b = parseInt(rgbMatch[3]).toString(16).padStart(2, '0');
  return `#${r}${g}${b}`;
}

// เรียกใช้ updateModeUI ครั้งแรกเพื่อให้ UI เริ่มต้นถูกต้อง
updateModeUI();