'use strict';
const lorem = document.querySelector('.js-lorem');
const lipsum = document.querySelector('.js-lipsum');

// function createLipsum() {
//     lipsum.innerHTML = 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quis ab fugiat iste optio quod? Deleniti quia eligendi dolores adipisci perspiciatis commodi ullam optio ab totam, ipsa id repellendus quidem!';
//   }

const main = document.querySelector('main');

  // function createLipsum() {
  //     const lipsum = '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quis ab fugiat iste optio quod? Deleniti quia eligendi dolores adipisci perspiciatis commodi ullam optio ab totam, ipsa id repellendus quidem!</p>';
  //     main.innerHTML += lipsum;
  //   }

  //funcion arrow
  const createLipsum = () => {
    const lipsum = '<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deleniti quis ab fugiat iste optio quod? Deleniti quia eligendi dolores adipisci perspiciatis commodi ullam optio ab totam, ipsa id repellendus quidem!</p>';
    main.innerHTML += lipsum;
  }
  lorem.addEventListener('mouseover', createLipsum);