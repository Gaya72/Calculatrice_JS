function getScreen() {
    return document.getElementById("screen");
}

// Функция для добавления цифр и операторов на экран
function addToScreen(value) {
    const screen = getScreen();
    if (screen.value === "0") {
        screen.value = value; // Заменяем 0 на нажатую цифру/оператор
    } else {
        screen.value += value; // Добавляем к текущему значению
    }
}

// Функция для выполнения вычислений
function calculate() {
    const screen = getScreen();
    // Используем eval для выполнения математического выражения, заменяя ÷ на /
    screen.value = eval(screen.value.replace("÷", "/").replace("×", "*"));
}

// Функция для очистки экрана
function clearScreen() {
    getScreen().value = "0"; // Сбрасываем экран на 0
}

// Обработчики событий для всех кнопок
document.querySelectorAll(".calculator-keys button").forEach(button => {
    button.addEventListener("click", () => {
        const buttonValue = button.textContent;

        if (buttonValue >= "0" && buttonValue <= "9") {
            // Если это цифра, добавляем ее на экран
            addToScreen(buttonValue);
        } else if (buttonValue === "C") {
            // Если это кнопка очистки, очищаем экран
            clearScreen();
        } else if (buttonValue === "=") {
            // Если это кнопка равно, выполняем расчет
            calculate();
        } else {
            // Если это оператор, добавляем его на экран
            addToScreen(buttonValue);
        }
    });
});

