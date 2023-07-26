const apiUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/i9m0apsD5tf5BRR2jOcS/scores/';

const addScore = async (scoreList) => {
  const response = await fetch(apiUrl, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(scoreList),
  });
  const data = await response.json();
  return data.result;
};

const fetchData = async () => {
  const response = await fetch(apiUrl);
  const data = await response.json();
  return data.result;
};

export { addScore, fetchData };
