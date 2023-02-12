const form = document.querySelector('form');
const main = document.querySelector('main');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const formData = new FormData(form);
  const username = formData.get('username');
  const tweet = formData.get('tweet');

  const tweetTemplate = `
    <section class="tweet">
      <img src="user-avatar.jpg" alt="User Avatar">
      <div class="tweet-info">
        <h2>${username}</h2>
        <p>@${username.toLowerCase()}</p>
        <p>${tweet}</p>
      </div>
      <div class="tweet-actions">
        <button class="retweet-btn">Retweet</button>
        <button class="like-btn">Like</button>
        <p class="retweet-count">0</p>
        <p class="like-count">0</p>
      </div>
    </section>
  `;

  main.innerHTML += tweetTemplate;

  const retweetBtn = document.querySelector('.retweet-btn');
  retweetBtn.addEventListener('click', () => {
    const retweetCount = document.querySelector('.retweet-count');
    retweetCount.textContent = parseInt(retweetCount.textContent) + 1;
  });

  const likeBtn = document.querySelector('.like-btn');
  likeBtn.addEventListener('click', () => {
    const likeCount = document.querySelector('.like-count');
    likeCount.textContent = parseInt(likeCount.textContent) + 1;
  });
});
