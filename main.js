fetch("http://bikes.suman.dk/wp-json/wp/v2/bike?_embed")
    .then(res => res.json())
    .then(handleData)

function handleData(posts) {
    posts.forEach(showBike)
}

function showBike(singleBike) {
    console.log(singleBike)
  /*  const img_url = singleBike._embedded["wp:featuredmedia"][0].media_details.sizes.medium.source_url;*/

    const template = document.querySelector("template").content;

    const copy = template.cloneNode(true);

    copy.querySelector("h2").textContent = singleBike.title.rendered;
      copy.querySelector(".price").textContent = ('Price:- '+singleBike.price);
  copy.querySelector(".instock").textContent = ('Instock:- '+singleBike.instock);
    /*copy.querySelector("img").src = img_url;*/


    const mainEl = document.querySelector("main");
    mainEl.appendChild(copy);
}
