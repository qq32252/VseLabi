// Задание 1: Вывод текущего дня месяца
function showCurrentDay() {
    const today = new Date();
    const day = today.getDate();
    alert(`Текущий день месяца: ${day}`);
}

// Задание 2: Вывод имени n+5 раз
function repeatName(n, fullName) {
    let result = "";
    for (let i = 0; i < n + 5; i++) {
        result += `${fullName}<br>`;
    }
    return result;
}

// Задание 3: Обработка массива
function processArray(array) {
    const sumPositive = array.filter(num => num > 0).reduce((acc, num) => acc + num, 0);
    const sortedArray = [...array].sort((a, b) => a - b);
    return `
        Исходный массив: [${array.join(', ')}]<br>
        Сумма положительных: ${sumPositive}<br>
        Отсортированный массив: [${sortedArray.join(', ')}]
    `;
}

// Задание 4: Расчёт по формуле
function calculateY(x) {
    try {
        if (x === 2) throw new Error("Ошибка: деление на ноль (x - 2 = 0)");
        const numerator = Math.pow(x, 2) + 6 * x - 15;
        const denominator = x - 2;
        return numerator / denominator;
    } catch (error) {
        alert(error.message);
        return NaN;
    }
}

// Задание 5: Работа со строками
function processStrings(S1, S2) {
    const lengthS1 = S1.length;
    const S2WithSpaces = S2.replace(/,/g, "    ");
    const S1Replaced = S1.replace("Владислав", "Павел");
    return `
        Длина S1: ${lengthS1}<br>
        S2 с пробелами: ${S2WithSpaces}<br>
        S1 после замены: ${S1Replaced}
    `;
}