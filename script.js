let number = prompt('Введите первое число', 'Число 1'),
    base = prompt('Введите второе число', 'Число 2'),
    pNumber = parseInt(number, 10),
    pBase = parseInt(base, 10);

if (isNaN(pNumber) || isNaN(pBase)) {
    console.log('Некорректный ввод!');
} else {
    console.log(pNumber.toString(pBase));
}