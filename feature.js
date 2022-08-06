const secFeatured = document.getElementById('sec-featured');

const featuredArr = [
  {
    image: 'image/speaker_01.png',
    title: 'Ali',
    subtitle: 'Software Engineer and specialist',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: 'image/speaker_02.png',
    title: 'Ahmad',
    subtitle: 'Software Devloper and specialist',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: 'image/speaker_03.png',
    title: 'Youzef',
    subtitle: 'Mobile Application Devloper and specialist',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: 'image/speaker_04.png',
    title: 'Youzef',
    subtitle: 'UX and UI desinger and specialist',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: 'image/speaker_05.png',
    title: 'Youzef',
    subtitle: 'specialist',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
  {
    image: 'image/speaker_06.png',
    title: 'Zaki',
    subtitle: 'Mobile Application Devloper and specialist',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
  },
];

featuredArr.forEach((element) => {
  const div = `<div class="item-featured">
                <img class="item-image-featured" src="${element.image}" alt="image">
                <div class="item-div-dec-featured">
                    <h4 class="item-title-featured"><strong>${element.title}</strong></h4>
                    <h5 class="item-subtitle-featured">${element.subtitle}</h5>
                    <div class="line-featured"></div>
                    <p class="item-dec-featured">${element.dec}</p>
                </div>
            </div>`;

  secFeatured.innerHTML += div;
});
