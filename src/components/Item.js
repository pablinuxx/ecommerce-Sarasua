import React, { useEffect, useState } from 'react'
import { ItemList } from './ItemList'

export const Item = () => {
    const [books, setBooks] = useState([])

    const getBooks = (books) =>{
        return new Promise((res,rej) =>{
            setTimeout(() => {
                return res(books)
            }, 2000);
        })
    }
    useEffect(() => {
     
    getBooks(ItemList).then(result =>{
        setBooks(result)
    })
    }, [])

    
    return (
        <> 
           {
            // eslint-disable-next-line array-callback-return
            books.map((book)=>{
         <div classNmae="card">
             <img src={book.ImgUrl} alt="" />
             <h3>{book.titulo}</h3>
             <p>{book.autor}</p>                        
          </div>
                 })
              }
        </>
    )
}
