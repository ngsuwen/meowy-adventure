const getData = () => {
    return $.ajax({
        url: 'https://api.datamuse.com/words?rel_jjb=enemy',
    })
}

async function getName() {
    let callAPI = await getData();
    let random = Math.floor(Math.random()*callAPI.length)
    let adj = await callAPI[random].word;
    let firstName = adj[0].toUpperCase() + adj.slice(1).toLowerCase();
    let fullName = firstName + ' Mouse'
    return fullName
}