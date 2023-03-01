const CDN = (value: string): string => `https://cdn.jsdelivr.net/gh/akabab/superhero-api@0.3.0/api/${value}.json`;

function fetchData(value: string): Promise<any> {
    return fetch(CDN(value))
        .then((response) => response.json());
}

export default fetchData;