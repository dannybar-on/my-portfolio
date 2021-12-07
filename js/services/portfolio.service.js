'use strict';

const STORAGE_KEY = 'projDB';
const gProjectId = [
  'touch-nums',
  'Minesweeper',
  'book-shop',
  'monsters-memory',
];
const gProjectNames = [
  'Touch The Nums',
  'Mine Sweeper',
  'My Book-Shop',
  'Monsters Memory Game',
];
const gProjectDesc = [
  "Let's see how fast you are absorbing numbers in the space",
  'Good old Minesweeper game, watch your step, it could be a MINE',
  'Check out my Book-shop',
  'Check out my Monsters Memory Game',
];

_createProjects();
var gProjects;

function _createProject(id, name, desc, labels = []) {
  return {
    id,
    name,
    desc,
    url: id,
    publishAt: new Date(),
    labels,
  };
}

function _createProjects() {
  var projects = loadFromStorage(STORAGE_KEY);

  if (!projects || !projects.length) {
    var projects = [];

    for (var i = 0; i < gProjectId.length; i++) {
      projects.push(
        _createProject(gProjectId[i], gProjectNames[i], gProjectDesc[i])
      );
    }
  }

  gProjects = projects;
  _saveProjectsToStorage();
}

function findProject(id) {
  return gProjects.find((project) => {
    return project.id === id;
  });
}

function getProjects() {
  return gProjects;
}

function _saveProjectsToStorage() {
  saveToStorage(STORAGE_KEY, gProjects);
}
