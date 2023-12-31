const API_KEY = '1';
const API_URL = 'https://www.themealdb.com/api/json/v1';

const countCategoryMeals = async (category) => {
  if (!category || typeof category !== 'string') {
    return 0;
  }
  const resp = await fetch(`${API_URL}/${API_KEY}/filter.php?c=${category}`);
  const resultData = await resp.json();
  return resultData.meals ? resultData.meals.length : 0;
};

const updateCategoryCounts = async () => {
  const menuLinks = document.querySelectorAll('header a');

  menuLinks.forEach(async (link) => {
    const { dataset: { category } } = link;
    const countMeal = await countCategoryMeals(category);
    const divCount = link.nextElementSibling;
    divCount.textContent = ` (${countMeal})`;
  });
};

export { updateCategoryCounts, countCategoryMeals };
