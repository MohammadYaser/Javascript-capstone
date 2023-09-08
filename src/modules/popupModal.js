import getDetail from './getDetail.js';
import fetchComments from './fetchComments.js';
import submitComment from './submitComment.js';
import commentCounter from './commentCounter.js';

const newModal = document.getElementById('new-modal');
const newClosebtn = document.getElementById('new-close');
const newItemSection = document.getElementById('new-itemSection');
const newCommentSection = document.getElementById('new-commentSection');
const newCommentsHeading = document.getElementById('new-commentsHeading');
const newBtnAddComment = document.getElementById('new-btnAddComment');
const newUsernameInput = document.getElementById('new-username');
const newCommentInput = document.getElementById('new-comment');

const clearElements = (elements) => {
  elements.forEach((element) => {
    element.innerHTML = '';
  });
};

const closeModal = () => {
  newModal.style.display = 'none';
  clearElements([newItemSection, newCommentsHeading, newCommentSection]);
};

const displayItemDetail = async (id, data) => {
  newModal.style.display = 'flex';

  newItemSection.innerHTML = `
    <img class='img-beautiful' src='${data.strMealThumb}'>
    <h2>${data.strMeal}</h2>
    <p class='p'>${data.strInstructions}</p>
  `;

  const fetchAndDisplayComments = async () => {
    const comments = await fetchComments(`RjyF2atccOw1gRFQE3W0/comments?item_id=${id}`);
    if (comments.length > 0) {
      const count = commentCounter(comments);
      newCommentsHeading.innerHTML = `<p class='commentCountTitle'>Comments(${count})</p>`;
      newCommentSection.innerHTML = comments
        .map(
          (comment) => `
            <div class="commentBox-beautiful">
              <p class="comment-name">${comment.username}:</p>
              <p class="commentText-beautiful">${comment.comment}</p>
              <p class="date-beautiful">${comment.creation_date}</p>
            </div>
          `,
        )
        .join('');
    }
  };

  await fetchAndDisplayComments();

  const pollInterval = 1000;
  const commentsPolling = setInterval(fetchAndDisplayComments, pollInterval);

  newBtnAddComment.addEventListener('click', async () => {
    const username = newUsernameInput.value;
    const comment = newCommentInput.value;

    if (username !== '' && comment !== '') {
      await submitComment(id, username, comment);
      newUsernameInput.value = '';
      newCommentInput.value = '';
    }
  });

  newClosebtn.addEventListener('click', () => {
    clearInterval(commentsPolling);
    closeModal();
  });
};

const popupModal = async (id) => {
  const resultData = await getDetail(`lookup.php?i=${id}`);
  const result = resultData.meals;
  displayItemDetail(id, result[0]);
};

window.onclick = (event) => {
  if (event.target === newModal) {
    closeModal();
  }
};

export default popupModal;
