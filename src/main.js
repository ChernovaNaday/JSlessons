// alert("Hello from JavaScript!")
// confirm("Согласны, узнали?")

// console-объект.
// log()-метод, выводит специальный отдел в браузере,специальную информацию
// alert - окно для уведомлений
/*
undefined - неинициализированные значения
null - флаг отсутствия значений или нулевое значение
bool (Boolean) - логический тип данных, frue или false (правда или ложь, есть или нет)
string(строка) - последовательность символов или символ, объединенные в структуру
number (цифры) - число любого вида, NaN (Not-a-Numbet), Infiniti (если надо описать бесконечность) +0 -0
object - представление объекта языка JavaScript

Декримент:
++x или x++ <=> x+1

Инкримент:
--x или x-- <=> x-1
*/


// let ans;
// ans = prompt("Укажите ваше имя");
// alert("Ваше имя -" + ans);

// let ans;
// ans = prompt("Введите код операции:");
// if (ans== "6453") {
//     alert("Молодец! Правильный ответ");
// }else{
//     alert("Код неверный! Не молодец");
// }

/*
if (condition)условие{
    statement;
}
else{
    other statement;
}*/

// let x;
// x = prompt("Введите число:");
// Number(x);
// alert("Ваше число в квадрате: " + x ** 2);

// let x;
// x = prompt("Введите число первое число:");
// x = Number(x);
// let y;
// y = prompt("Введите число второе число:");
// y = Number(y);
// let S;
// S = (x + y) / 2;
// alert("Ваше среднее арифметическое чисел: " + S); 

const mile = 0.621371;
let x;
x = prompt("Введите км");
x = Number(x);
alert("Мили: " + x * mile)