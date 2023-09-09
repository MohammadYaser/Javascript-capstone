import getDetail from './getDetail.js';
import fetchComments from './fetchComments.js';
import submitComment from './submitComment.js';
import commentCounter from './commentCounter.js';

const modal = document.getElementById('new-modal');
const closeBtn = document.getElementById('new-close');
const itemSection = document.getElementById('new-itemSection');
const commentSection = document.getElementById('new-commentSection');
const commentsHeading = document.getElementById('new-commentsHeading');
const btnAddComment = document.getElementById('new-btnAddComment');
const usernameInput = document.getElementById('new-username');
const commentInput = document.getElementById('new-comment');

const clearElement = (element) => {
  element.innerHTML = '';
};

const closeModal = () => {
  modal.style.display = 'none';
  clearElement(itemSection);
  clearElement(commentsHeading);
  clearElement(commentSection);
};

const displayComments = (comments) => {
  if (comments.length > 0) {
    const count = commentCounter(comments);
    commentsHeading.innerHTML = `<p class='commentCountTitle'>Comments(${count})</p>`;
    commentSection.innerHTML = comments
      .map(
        (comment) => `
          <div class="commentBox-beautiful">
            <p class="comment-name">${comment.username}:</p>
            <p class="commentText-beautiful">${comment.comment}</p>
            <p class="date-beautiful">${comment.creation_date}</p>
          </div>
        `
      )
      .join('');
  }
};

const fetchAndDisplayComments = async (id) => {
  try {
    const comments = await fetchComments(`RjyF2atccOw1gRFQE3W0/comments?item_id=${id}`);
    displayComments(comments);
  } catch (error) {
    console.error('Error fetching comments:', error);
  }
};

const openModal = async (id) => {
  try {
    const resultData = await getDetail(`lookup.php?i=${id}`);
    const result = resultData.meals;
    itemSection.innerHTML = `
      <img class='img-beautiful' src='${result[0].strMealThumb}'>
      <h2>${result[0].strMeal}</h2>
      <p class='p'>${result[0].strInstructions}</p>
    `;

    modal.style.display = 'flex';

    fetchAndDisplayComments(id);

    const pollInterval = 1000;
    const commentsPolling = setInterval(() => {
      fetchAndDisplayComments(id);
    }, pollInterval);

    btnAddComment.addEventListener('click', async () => {
      const username = usernameInput.value;
      const comment = commentInput.value;

      if (username !== '' && comment !== '') {
        await submitComment(id, username, comment);
        usernameInput.value = '';
        commentInput.value = '';
      }
    });

    closeBtn.addEventListener('click', () => {
      clearInterval(commentsPolling);
      closeModal();
    });
  } catch (error) {
    console.error('Error opening modal:', error);
  }
};

window.onclick = (event) => {
  if (event.target === modal) {
    closeModal();
  }
};

export default openModal;
