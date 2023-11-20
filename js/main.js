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

const container = document.querySelector('.container');

/* Program */

for (let i = 0; i < teamMembers.length; i++) {
  for (let key in teamMembers[i]) {
    if (key === 'foto') {
      container.innerHTML += `<img src="img/${teamMembers[i][key]}" alt=""></img>`;
    } else {
      container.innerHTML += `${teamMembers[i][key]} `;
    }
    container.innerHTML += '<br>';
  }
}
