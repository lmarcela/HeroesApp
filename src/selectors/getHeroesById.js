import React from 'react';
import { heroes } from '../data/heroes';


export const getHeroeById = (id)=>{
    return heroes.find(heroe => heroe.id===id);
}