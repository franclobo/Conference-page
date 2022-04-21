const mobileMenu = document.querySelector('.mobile-menu');
const closeBtn = document.querySelector('.close-menu');
const optMenu = document.querySelector('.mobile-menu-navigation');
const dropDown = document.querySelector('.dropdown-menu');
const scrollLock = document.querySelector('.content');
const ourMembers = document.getElementById('members');

mobileMenu.addEventListener('click', () => {
  dropDown.classList.remove('hide-menu');
  scrollLock.classList.add('lockscroll');
});
closeBtn.addEventListener('click', () => {
  dropDown.classList.toggle('hide-menu');
  scrollLock.classList.remove('lockscroll');
});
optMenu.addEventListener('click', () => {
  dropDown.classList.toggle('hide-menu');
  scrollLock.classList.remove('lockscroll');
});

const members = [
  {
    Picture: './Pictures/speaker8.jpg',
    Name: 'Yochai Benkler',
    Title: 'Professor',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker7.jpg',
    Name: 'Kiham Chon',
    Title: 'Professor',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker5.jpg',
    Name: 'SohYeong Noh',
    Title: 'Professor',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker6.jpg',
    Name: 'Julia Leda',
    Title: 'Professor',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker3.jpg',
    Name: 'Lila Treticov',
    Title: 'Professor',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
  {
    Picture: './Pictures/speaker1.jpg',
    Name: 'Ryan Merkley',
    Title: 'Professor',
    Description: "Some quick example text to build on the card title and make up the bulk of the card's content.",
  },
];

const seeMembers = () => {
  let str = '';
  for (let i = 0; i < members.length; i += 1) {
    str += `<div class="card-member">
      <div class="picture"><img src=${members[i].Picture} alt=${members[i].Name}></div>
      <div>
        <div class="card-body">
          <h3 class="member-name">${members[i].Name}</h3>
          <h3 class="member-title">${members[i].Title}</h3>
        </div>
        <p class="description-member">${members[i].Description}</p>
      </div>
    </div>`;
  }
  return str;
};

ourMembers.innerHTML = `
<h2 class="list-members">Our Teachers</h2>
    <div class="guide-bar-members"></div>
        ${seeMembers()}
        </div>`;