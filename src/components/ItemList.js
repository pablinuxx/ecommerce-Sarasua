import React from 'react';
import books from '../data/products';
import {Item} from './Item';

export const ItemList = () => {
   
   return (
        <>
        <h3>Consultando Productos</h3>  
            <Item books={books} />
        </>
    )
}