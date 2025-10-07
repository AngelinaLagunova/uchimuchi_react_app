// Исходный объект с данными провинций — у вас уже есть
const provincesInfo = { /* ваш объект */ };

// Предполагаем, что базовый MapSidenav уже определён, например:
const MapSidenav = [
  // ... общие пункты
];

// Функция, которая создаёт навигацию для одной провинции по данным
function createProvinceSidenavs(provinceKey, provinceData) {
  const name = provinceData.name.name;       // "Guizhou"
  const nameRu = provinceData.name.nameRu;   // "Гуйчжоу"
  const slug = provinceKey;                    // "guizhou"

  // Обязательно должны быть ссылки внутри provinceData для удобства
  const links = provinceData.links || {};
  const foodLinks = provinceData.foodLinks || {};
  const sightsLinks = provinceData.sightsLinks || {};

  // Главный меню — добавляем ссылку на локацию
  const provinceSidenav = [].concat(
    MapSidenav,
    [{ href: links.location || `/province/${slug}/location`, text: nameRu }]
  );

  // Меню для еды (food)
  const provinceFoodSidenav = [].concat(
    provinceSidenav,
    [{ href: links.food || `/province/${slug}/food`, text: foodLinks.title || "Блюда" }]
  );

  // Меню для достопримечательностей (sights)
  const provinceSightsSidenav = [].concat(
    provinceSidenav,
    [{ href: links.sights || `/province/${slug}/sights`, text: sightsLinks.title || "Достопримечательности" }]
  );

  // Тестовые меню
  const provinceTestFoodSidenav = [].concat(
    provinceFoodSidenav,
    [{ href: foodLinks.test || `/province/${slug}/foodTest`, text: "Тест" }]
  );

  const provinceTestSightsSidenav = [].concat(
    provinceSightsSidenav,
    [{ href: sightsLinks.test || `/province/${slug}/sightsTest`, text: "Тест" }]
  );

  // Возвращаем объект с этими массивами
  return {
    [`${name}Sidenav`]: provinceSidenav,
    [`${name}FoodSidenav`]: provinceFoodSidenav,
    [`${name}SightsSidenav`]: provinceSightsSidenav,
    [`${name}TestFoodSidenav`]: provinceTestFoodSidenav,
    [`${name}TestSightsSidenav`]: provinceTestSightsSidenav,
  };
}

// Создадим все sidenav-объекты для всех провинций и dynamicSidebar
const allSidenavs = {};
const dynamicSidebar = {};

for (const provinceKey in provincesInfo) {
  if (!provincesInfo.hasOwnProperty(provinceKey)) continue;

  const provinceData = provincesInfo[provinceKey];
  const navs = createProvinceSidenavs(provinceKey, provinceData);

  Object.assign(allSidenavs, navs);

  // Заполняем dynamicSidebar
  const name = provinceData.name.name; // "Guizhou"
  const links = provinceData.links || {};
  const foodLinks = provinceData.foodLinks || {};
  const sightsLinks = provinceData.sightsLinks || {};

  // Добавляем ключи — маршрут => массив меню
  if (links.location) dynamicSidebar[links.location] = navs[`${name}Sidenav`];
  if (links.food) dynamicSidebar[links.food] = navs[`${name}FoodSidenav`];
  if (links.sights) dynamicSidebar[links.sights] = navs[`${name}SightsSidenav`];
  if (foodLinks.test) dynamicSidebar[foodLinks.test] = navs[`${name}TestFoodSidenav`];
  if (sightsLinks.test) dynamicSidebar[sightsLinks.test] = navs[`${name}TestSightsSidenav`];
}

// Теперь в `allSidenavs` есть все массивы, например allSidenavs.GuizhouFoodSidenav
// А в dynamicSidebar — объект маршрут => массив