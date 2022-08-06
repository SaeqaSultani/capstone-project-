const secMain = document.getElementById('sec-main');

const arr = [
  {
    profile: './image/html.png',
    name: 'HTML',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    profile: './image/css.png',
    name: 'CSS',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    profile: './image/php-code.png',
    name: 'PHP',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
  {
    profile: './image/c++.png',
    name: 'C++',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },

  {
    profile: './image/java.png',
    name: 'JAVA',
    dec: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

arr.forEach((element) => {
  const div = `
         <div class="item-main">
                <img class="item-image-main" src='${element.profile}' alt="mobile-baground-image">
                <h4 class="item-title-main"><strong>${element.name}</strong></h4>
                <p class="item-dec-main">${element.dec}</p>
            </div>`;

  secMain.innerHTML += div;
});