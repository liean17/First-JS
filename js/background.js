const imgs = [
    "11.jpg",
    "12.jpg",
    "13.jpg",
    "14.jpg",
    "15.jpg",
    "16.jpg",
    "17.jpg",
    "18.jpg",
    "19.jpg",
    "20.jpg"
];
const Cimg = imgs[Math.floor(Math.random() * imgs.length)];

const bgimg = document.createElement("img");

bgimg.src = `img/${Cimg}`;

document.body.appendChild(bgimg);

bgimg.id = 'bgimage';