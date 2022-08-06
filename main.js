const secMain = document.getElementById('sec-main');

const arr = [
  {
    profile: '/image/html.png',
    name: 'HTML',
    dec: 'HTML is a markup language that web browsers use to interpret and compose text, images, and other material into visual or audible web pages.',
  },
  {
    profile: '/image/javascript.png',
    name: 'JAVA SCRIPT',
    dec: 'JavaScript is the Programming Language for the Web. JavaScript can update and change both HTML and CSS. JavaScript can calculate , manipulate and validate data.',
  },
  {
    profile: '/image/php-code.png',
    name: 'PHP',
    dec: 'PHP is a widely used server-side programming language that’s become increasingly fast and powerful over the years. PHP works well with HTML and databases, making it a great language for anyone interested in building dynamic web applications.',
  },
  {
    profile: '/image/python.png',
    name: 'PYTHON',
    dec: 'Python is a high-level, interpreted, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Python is dynamically-typed and garbage-collected. ',
  },

  {
    profile: '/image/java.png',
    name: 'JAVA',
    dec: 'Java is a high-level, class-based, object-oriented programming language that is designed to have as few implementation dependencies as possible. It is a general-purpose programming language.',
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