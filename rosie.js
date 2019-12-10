window.addEventListener("DOMContentLoaded", getData);

function getData() {
    fetch("https://cosmicstryder.dk/wordpress/wp-json/wp/v2/sticker?_embed")
        .then(res => res.json())
        .then(handleData)
}


function handleData(myData) {
    myData.forEach(showPost)
}

function showPost(post) {
    console.log(post)

    const template = document.querySelector(".postTemplate").content;
    const postCopy = template.cloneNode(true);


    const img = postCopy.querySelector("img.cover");
    const imgPath = post.tattoo_image.guid;
    img.setAttribute("src", imgPath)
    img.setAttribute("alt", "Image of Temporary Tattoo" + post.title.rendered)


    const title = postCopy.querySelector(".tattootitle");
    title.innerHTML = post.tattoo_title;

    const price = postCopy.querySelector(".tattooprice");
    price.innerHTML = post.tattoo_price;
    document.querySelector(".threecolumns").appendChild(postCopy)
}
