import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import {BookContainerStyle} from '../../style/booksHome/bookContainerStyle'
import BookItem from './BookItem'

export default function BookContainer() {

    const [books,setBooks] = useState([])   
    
    const fetchBooks = async () =>{
    try {
        const {data} = await  axios('https://book.alitechbot.uz/api/books')
        console.log(data);
        if (data.success) {
          setBooks(data.payload.docs);
        }
    } catch (error) {
        console.log(error);
     }
    }
    useEffect(() => {
        fetchBooks();
      }, []);
     console.log(books);

    return (
        <BookContainerStyle>
        <div id='bookContainer'>
            <h3>Asosiy kategoriyalar</h3>
            <ul>
                <li><a href="#">Asosiy kategoriyalar</a></li>
                <li><a href="#">Jadid adabiyoti </a></li>
                <li><a href="#">Sovet davri </a></li>
                <li><a href="#">Mustaqillik davri</a></li>
            </ul>
        
            <div id='books'>
            {
          books.map(item => (
            <BookItem
              key={item._id}
              id={item._id}
              title={item.title}
              imageLink={item.imageLink}
            />
          )
          )}
            </div>
            </div>
        </BookContainerStyle>
  
    )
}
