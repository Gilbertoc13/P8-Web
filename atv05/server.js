const express = require('express');
const PORT = 3000;

const animes = [
    {
        id: 1,
        name: 'Naruto',
        genre: 'Shounen',
        studio: 'Pierrot'
    },
    {
        id: 2,
        name: 'Attack on Titan',
        genre: 'Action',
        studio: 'MAPPA'
    },
    {
        id: 3,
        name: 'One Piece',
        genre: 'Adventure',
        studio: 'Toei Animation'
    }
];


function createAnime(id, name, genre, studio){
    const newAnime = {id, name, genre, studio};
    animes.push(newAnime);
}
module.exports = {express, PORT, animes, createAnime};

