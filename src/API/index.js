const CDN = value => `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/${value}.json`

function fectchData(value) {
  return fetch(CDN(value))
    .then(response => response.json())
}

export default fectchData;
