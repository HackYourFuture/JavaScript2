'use strict';

const gameTitles = [
  // Replace with your own book titles
  'mass_effect_3',
  'persona_5',
  'planescape_torment',
  'warcraft_3',
  'fallout_2',
  'destiny',
  'world_of_warcraft',
  'tes3_morrowind',
  'zelda_botw',
  'horizon_zero_dawn',
];

const myFavoriteGames = {
  mass_effect_3: {
    name: 'Mass Effect 3',
    platform: 'PC / Xbox 360 / Playstation 3',
    developer: 'Bioware Inc.',
  },
  persona_5: {
    name: 'Persona 5',
    platform: 'Playstation 3-4',
    developer: 'ATLUS Games',
  },
  planescape_torment: {
    name: 'Planescape Torment',
    platform: 'PC',
    developer: 'Black Isle Studios',
  },
  warcraft_3: {
    name: 'Warcraft III',
    platform: 'PC / MAC',
    developer: 'Blizzard Entertainment',
  },
  fallout_2: {
    name: 'Fallout 2',
    platform: 'PC',
    developer: 'Black Isle Studios',
  },
  destiny: {
    name: 'Destiny',
    platform: 'Playstation 3 / Xbox 360',
    developer: 'Bungie',
  },
  world_of_warcraft: {
    name: 'World of Warcraft',
    platform: 'PC / MAC',
    developer: 'Blizzard Entertainment',
  },
  tes3_morrowind: {
    name: "The Elder Scroll's 3 - Morrowind",
    platform: 'PC',
    developer: 'Bethesda Softworks',
  },
  zelda_botw: {
    name: 'The Legend of Zelda - Breath of the Wild',
    platform: 'Nintendo WiiU / Switch',
    developer: 'Nintendo Co.',
  },
  horizon_zero_dawn: {
    name: 'Horizon Zero Dawn',
    platform: 'Playstation 4',
    developer: 'Guerilla Games',
  },
};

const gameCovers = {
  mass_effect_3:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562439982/Gamecovers/mass_effect_3_b9i7re.jpg',
  persona_5:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562439984/Gamecovers/persona_5_g9uq9z.jpg',
  planescape_torment:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562439983/Gamecovers/planescape_torment_p8bjkj.jpg',
  warcraft_3:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562439983/Gamecovers/warcraft_3_kbvsym.jpg',
  fallout_2:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562439981/Gamecovers/fallout_2_fherlh.jpg',
  destiny:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562439983/Gamecovers/destiny_pxsqfj.jpg',
  world_of_warcraft:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562439982/Gamecovers/world_of_warcraft_smjfrd.jpg',
  tes3_morrowind:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562439983/Gamecovers/tes3_morrowind_oecwyv.jpg',
  zelda_botw:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562444229/Gamecovers/zelda_botw_abmpnq.jpg',
  horizon_zero_dawn:
    'https://res.cloudinary.com/ladylaurelin/image/upload/v1562439983/Gamecovers/horizon_zero_dawn_avozvm.jpg',
};

function renderList(ul) {
  for (let i = 0; i < gameTitles.length; i++) {
    const game = gameTitles[i];
    const gameDetails = myFavoriteGames[game];
    const gameCoverDisplay = gameCovers[game];
    const li = document.createElement('li');
    ul.appendChild(li);
    li.id = gameTitles[i];
    li.className = 'game_container';
    const img = document.createElement('img');
    li.appendChild(img);
    img.setAttribute('src', gameCoverDisplay);
    img.setAttribute('alt', 'a cover for ' + gameDetails.name);
    const h2 = document.createElement('h2');
    h2.innerText = gameDetails.name;
    li.appendChild(h2);
    const gamePlatform = document.createElement('p');
    gamePlatform.innerText = 'Platform: ' + gameDetails.platform;
    li.appendChild(gamePlatform);
    gamePlatform.className = 'gamePlatform';
    const gameDeveloper = document.createElement('p');
    gameDeveloper.innerText = 'Developer: ' + gameDetails.developer;
    li.appendChild(gameDeveloper);
    gameDeveloper.className = 'gameDeveloper';
  }
}

function main() {
  const mainContentDiv = document.createElement('div');
  mainContentDiv.id = 'mainContent';
  const body = document.querySelector('body');
  body.appendChild(mainContentDiv);
  const h1 = document.createElement('h1');
  h1.innerText = "Arya's Favorite Games";
  mainContentDiv.appendChild(h1);
  const ul = document.createElement('ul');
  mainContentDiv.appendChild(ul);
  renderList(ul);
}

window.addEventListener('load', main);
