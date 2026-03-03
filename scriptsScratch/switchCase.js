const dayNumber =1;
let dayName;

switch (dayNumber) {
    case 1:
        dayName = "Понедельник";

    case 2:
        dayName = "Вторник";
        break;
    case 3:
        dayName = "Среда";
        break;
    case 4:
        dayName = "Четверг";
        break;
    case 5:
        dayName = "Пятница";
        break;
    case 6:
        dayName = "Суббота";
        break;
    case 7:
        dayName = "Воскресенье";
        break;
    case 8:
    case 9:
        dayName = "Ерунда какая то, а не день";
        break;
    default:
        dayName = "Некорректный номер дня";
}

console.log(`День недели: ${dayName}`); 
