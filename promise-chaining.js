function print () {
    console.log.apply(console, arguments); 
}

async function getData () {
    try {
        comments = await fetch('https://jsonplaceholder.typicode.com/posts/1/commentss');
        comments = await comments.json();
        return comments;
    } catch (error) {
        return [] 
    }
}

async function printComments () {
    let comments = await getData();
    comments.forEach(comment => print(comment.name));
}

printComments();



