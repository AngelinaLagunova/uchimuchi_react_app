const data = [
  { char: "三杯鸡", phen: "sān bēi jī", trans: "Цыплёнок трёх чашек", pict: "/images/jiangxiFood1.png" },
  { char: "莲花血鸭", phen: "liánhuā xuè yā", trans: "Пряная утка с кровью из Ляньхуа", pict: "/images/jiangxiFood2.png" },
  { char: "鄱湖胖鱼头", phen: "pó hú pàng yú tóu", trans: "Толстолобик из озера Поян", pict: "/images/jiangxiFood3.png" },
  { char: "藜蒿炒腊肉", phen: "lí hāo chǎo là ròu", trans: "Жаренная полынь со свининой", pict: "/images/jiangxiFood4.png" },
  { char: "南昌炒米粉", phen: "nánchāng chǎo mǐfěn", trans: "Жареная рисовая лапша по-наньчански", pict: "/images/jiangxiFood5.png" }
];

// Перемешать массив (Fisher-Yates)
function shuffleArray(arr) {
  let array = arr.slice(); // копия массива
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

function generateQuizItems(data) {
  const allTranslations = data.map(item => item.trans);

  return data.map(item => {
    const correct = item.trans;
    // Получаем два случайных неправильных ответа
    const incorrect = shuffleArray(allTranslations.filter(t => t !== correct)).slice(0, 2);
    // Формируем массив из 3-х вариантов
    const options = shuffleArray([correct, ...incorrect]);

    // Определяем где правильный вариант (var1/var2/var3)
    const rightVar = `var${options.indexOf(correct) + 1}`;

    // Собираем элемент
    return {
      char: item.char,
      phen: item.phen,
      pict: item.pict,
      var1: options[0],
      var2: options[1],
      var3: options[2],
      rightVar: rightVar
    };
  });
}

const quizItems = generateQuizItems(data);
console.log(JSON.stringify(quizItems));
