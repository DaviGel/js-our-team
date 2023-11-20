'use strict';

/* Variables */

const teamMembers = [
  {
    foto: 'wayne-barnett-founder-ceo.jpg',
    nome: 'Wayne Barnett',
    ruolo: 'Founder & CEO',
  },
  {
    foto: 'angela-caroll-chief-editor.jpg',
    nome: 'Angela Caroll',
    ruolo: 'Chief Editor',
  },
  {
    foto: 'walter-gordon-office-manager.jpg',
    nome: 'Walter Gordon',
    ruolo: 'Office Manager',
  },
  {
    foto: 'angela-lopez-social-media-manager.jpg',
    nome: 'Angela Lopez Gordon',
    ruolo: 'Social Media Manager',
  },
  {
    foto: 'scott-estrada-developer.jpg',
    nome: 'Scott Estrada',
    ruolo: 'Developer',
  },
  {
    foto: 'barbara-ramos-graphic-designer.jpg',
    nome: 'Barbara Ramos',
    ruolo: 'Graphic Designer',
  },
];

const members = document.querySelector('.members');

/* Program */

for (let i = 0; i < teamMembers.length; i++) {
  const member = document.createElement('div');
  let image = document.createElement('div');
  let caption = document.createElement('div');
  member.classList.add('member');
  image.classList.add('image');
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
  members.append(member);
}
