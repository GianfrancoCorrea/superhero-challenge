const CDN = 'https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/all.json'

function fectchData() {
  return fetch(CDN)
    .then(response => response.json())
}

export default fectchData;
