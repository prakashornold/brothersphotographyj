/*
top_bottom: 0 for show top position of image
top_bottom: 50 for show middle position of image
top_bottom: 100 for show bottom position of image

According to need change the value of top_bottom
 */
const IndexSliderImage = [
  {
    id: 1,
    image: "images/home/1.jpg",
    alt: "Image 1",
    top_bottom: 20,
  },
  {
    id: 2,
    image: "images/home/2.jpg",
    alt: "Image 2",
    top_bottom: 70,
  },
  {
    id: 3,
    image: "images/home/3.jpg",
    alt: "Image 3",
    top_bottom: 15,
  },
  {
    id: 4,
    image: "images/home/4.jpg",
    alt: "Image 4",
    top_bottom: 60,
  },
  {
    id: 5,
    image: "images/home/5.jpg",
    alt: "Image 5",
    top_bottom: 60,
  },
  {
    id: 6,
    image: "images/home/6.jpg",
    alt: "Image 6",
    top_bottom: 40,
  },
  {
    id: 7,
    image: "images/home/7.jpg",
    alt: "Image 7",
    top_bottom: 20,
  },
  {
    id: 8,
    image: "images/home/8.jpg",
    alt: "Image 8",
    top_bottom: 40,
  },
  {
    id: 9,
    image: "images/home/9.jpg",
    alt: "Image 9",
    top_bottom: 70,
  },
];

const slideshow = document.getElementById("slideshow");

IndexSliderImage.forEach((item) => {
  // const component = `<img src="${item.image}" alt="${item.alt}" style="object-fit: unset;"/>`;

  const component = `<img
        data-src="${item.image}"
        data-image="${item.image}"
        data-image-dimensions="1920x1280"
        data-image-focal-point="0.5,0.5"
        alt="${item.alt}"
        data-use-advanced-positioning="true"
        data-image-resolution="2500w"
        src="${item.image}?format=2500w"
        loading = "lazy"
        style="
          width: 100%;
          height: 100%;
          object-position: 50% ${item.top_bottom}%;
          object-fit: cover;
        "
      />`;
  slideshow.innerHTML += component + "\n";
});
