'use strict';

/* Variables */

const teamMembers = [
  {
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
    foto: 'wayne-barnett-founder-ceo.jpg',
  },
  {
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
    foto: 'angela-caroll-chief-editor.jpg',
  },
  {
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
    foto: 'walter-gordon-office-manager.jpg',
  },
  {
    nome: 'Angela Lopez Gordon',
    ruolo: 'Social Media Manager',
    foto: 'angela-lopez-social-media-manager.jpg',
  },
  {
    nome: 'Scott Estrada',
    ruolo: 'Developer',
    foto: 'scott-estrada-developer.jpg',
  },
  {
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
    foto: 'barbara-ramos-graphic-designer.jpg',
  },
];

const members = document.querySelector('.members');
const fragment = new DocumentFragment();
let member;

/* Program */
const arrayLength = teamMembers.length;
for (let i = 0; i < arrayLength; i++) {
  member = document.createElement('div');
  member.classList.add('member');
  const image = document.createElement('div');
  image.classList.add('image');
  const caption = document.createElement('div');
  caption.classList.add('caption');
  for (let key in teamMembers[i]) {
    if (key === 'foto')
      image.innerHTML += `<img src="img/${teamMembers[i][key]}" alt="img${i}"></img>`;
    else if (key === 'nome')
      caption.innerHTML += `<h3>${teamMembers[i][key]}</h3>`;
    else caption.innerHTML += `<span>${teamMembers[i][key]}</span>`;
  }
  member.append(image);
  member.append(caption);
  fragment.append(member);
}
members.append(fragment);
