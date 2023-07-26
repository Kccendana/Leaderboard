import './style.css';
import { addScore, fetchData } from './module/addScore.js';

const scoreList = document.querySelector('.lists');
const form = document.querySelector('#add-new');
const refresh = document.querySelector('.refresh');

const displayLists = async () => {
  const scores = await fetchData();
  scoreList.innerHTML = '';
  scores.forEach((data) => {
    scoreList.innerHTML += `
        <li><span class="list-name">${data.user}</span><span class="listscore">${data.score}</span></li>`;
  });
};

form.addEventListener('submit', async (event) => {
  event.preventDefault();
  const name = document.querySelector('#leader-name').value.trim();
  const score = document.querySelector('#leader-score').value.trim();

  if (name !== '' && score !== '') {
    const scoreData = {
      user: name,
      score,
    };
    await addScore(scoreData);
    document.querySelector('#leader-name').value = '';
    document.querySelector('#leader-score').value = '';
  }
});

refresh.addEventListener('click', displayLists);
