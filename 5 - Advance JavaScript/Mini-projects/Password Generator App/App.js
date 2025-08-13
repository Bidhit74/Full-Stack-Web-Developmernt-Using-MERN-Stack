let pass_fild = document.querySelector(".pass-input");
const inputSlider = document.querySelector("[data-lengthSlider]");
let copyMsg = document.querySelector("[dtaa-copyMsg]");
let copyBtn = document.querySelector(".btn1");
let passGenerateBtn = document.querySelector(".btn2");
const number = document.querySelector(".number");
const slider = document.querySelector(".slider");
const upperCheck = document.querySelector("#check1");
const lowerCheck = document.querySelector("#check2");
const numberCheck = document.querySelector("#check3");
const symbolCheck = document.querySelector("#check4");
const allCheckbox = document.querySelectorAll("input[type='checkbox']");
const color_boll = document.querySelector(".color-div");

let password = "";
let passwordLength = 10;
let checkCount = 0;

hendlerSlider();

function hendlerSlider() {
    slider.value = passwordLength;
    number.innerText = passwordLength;

    const min = inputSlider.min;
    const max = inputSlider.max;
    inputSlider.style.backgroundSize =
        ((passwordLength - min) * 100) / (max - min) + "% 100%";
}

function generateRandomNumber(min, max) {
    let rand_num = Math.floor(Math.random() * (max - min) + min);
    return rand_num;
}

function getUpperCase() {
    // let char = "A".charCodeAt(0);
    // let Uletter = String.fromCharCode(char + generateRandomNumber(0, 26));
    return String.fromCharCode(generateRandomNumber(65, 91));
}

function getLowerCase() {
    // let char = "a".charCodeAt(0);
    // let Lletter = String.fromCharCode(char + generateRandomNumber(0, 26));
    return String.fromCharCode(generateRandomNumber(97, 123));
}

function numberCase() {
    return generateRandomNumber(0, 10);
}

function symbolCase() {
    let char = "#".charCodeAt(0);
    let Symbol = String.fromCharCode(char + generateRandomNumber(0, 4));
    return Symbol;
}

function setIndicator(color) {
    color_boll.style.backgroundColor = color;
    color_boll.style.boxShadow = "0px 0px 15px 3px " + color;
}

async function copyContent() {
    try {
        await navigator.clipboard.writeText(pass_fild.value);
        copyMsg.innerText = "Copied";
    } catch (err) {
        copyMsg.innerText = "Copy Failed";
    }
    copyMsg.classList.add("active");
    setTimeout(function () {
        copyMsg.classList.remove("active");
    }, 1500);
}

function calculateStrength() {
    let isUpper = false;
    let isLower = false;
    let isNumber = false;
    let isSymbol = false;

    if (check1.checked) {
        isUpper = true;
    }
    if (check2.checked) {
        isLower = true;
    }
    if (check3.checked) {
        isNumber = true;
    }
    if (check4.checked) {
        isSymbol = true;
    }

    if (isUpper && isLower && isNumber && isSymbol && passwordLength >= 8) {
        setIndicator("#1deb5b");
    } else if (
        isUpper &&
        isLower &&
        (isNumber || isSymbol) &&
        passwordLength >= 6
    ) {
        setIndicator("yellow");
    } else {
        setIndicator("#d53245");
    }
}

function hendleCheckboxChange() {
    checkCount = 0;
    allCheckbox.forEach((checkbox) => {
        if (checkbox.checked) {
            checkCount++;
        }
    });
}

allCheckbox.forEach((checkbox) => {
    checkbox.addEventListener("change", hendleCheckboxChange);
});

function shufflePassword(array) {
    //Fisher Yates Method
    for (let i = array.length - 1; i > 0; i--) {
        //random J, find out using random function
        const j = Math.floor(Math.random() * (i + 1));
        //swap number at i index and j index
        const temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    let str = "";
    array.forEach((el) => (str += el));
    return str;
}

function passwordGenerator() {
    if ((checkCount = 0)) {
        return;
    }
    if (passwordLength < checkCount) {
        passwordLength = checkCount;
        hendlerSlider();
    }
    // remove old password
    password = "";
    let funcArray = [];
    if (upperCheck.checked) {
        funcArray.push(getUpperCase);
    }
    if (lowerCheck.checked) {
        funcArray.push(getLowerCase);
    }
    if (numberCheck.checked) {
        funcArray.push(numberCase);
    }
    if (symbolCheck.checked) {
        funcArray.push(symbolCase);
    }
    //Compulsory addition
    for (let i = 0; i < funcArray.length; i++) {
        password += funcArray[i]();
    }
    // Ramaining Addition
    for (let i = 0; i < passwordLength - funcArray.length; i++) {
        let randIndex = generateRandomNumber(0, funcArray.length);
        password += funcArray[randIndex]();
    }
    // Shuffle this password
    password = shufflePassword(Array.from(password));

    // Show in UI
    pass_fild.value = password;
    calculateStrength();
}

slider.addEventListener("input", (e) => {
    passwordLength = e.target.value;
    hendlerSlider();
});

copyBtn.addEventListener("click", () => {
    if (pass_fild.value) {
        copyContent();
    }
});

passGenerateBtn.addEventListener("click", passwordGenerator);
