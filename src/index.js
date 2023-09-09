import './style.css';
import './logo.png';
import {
  fetchCategoryMeals, displayMeals, transferLikes, likesCountUpdate,
} from './modules/renderList.js';
import { updateCategoryCounts } from './modules/mealCounter.js';

const menuLinks = document.querySelectorAll('header a');
const containerMeals = document.getElementById('list');

const renderMealCategory = async (category) => {
  const categoryMeals = await fetchCategoryMeals(category);
  displayMeals(categoryMeals);
};

const setupHeaderLinkListeners = () => {
  menuLinks.forEach((link) => {
    const { dataset: { category } } = link;
    link.addEventListener('click', async (e) => {
      e.preventDefault();
      await renderMealCategory(category);
    });
  });
};

const appStart = async () => {
  await updateCategoryCounts();
  setupHeaderLinkListeners();
  renderMealCategory('Seafood');
};

containerMeals.addEventListener('click', async (e) => {
  if (e.target.classList.contains('likes-icon')) {
    const divMeal = e.target.closest('.meal').querySelector('h3');
    const titleMeal = divMeal.textContent;
    const divLikeCount = e.target.nextElementSibling;
    const likesCurrent = parseInt(divLikeCount.textContent, 10);
    const likesUpdated = likesCurrent + 1;
    const resultSuccess = await transferLikes(titleMeal);
    if (resultSuccess) {
      likesCountUpdate(divLikeCount, likesUpdated);
    }
  }
});

appStart();