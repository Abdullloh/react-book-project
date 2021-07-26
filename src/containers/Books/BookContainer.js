import React ,{useState}from 'react';
import axios from 'axios';
import {BookContainerStyle} from '../../style/booksHome/bookContainerStyle'
import Img from '../../assets/images/Book.svg'


export default function BookContainer() {
    // const[books,setBooks] = useState({
    //     title:'',
    //     price:'',
    //     author:''
    // })
              
    const fetchBooks =  () =>{
      const {data} =  axios('https://book.alitechbot.uz/api/books')
      .then(data=> {
          console.log(data)
          const{docs} = data.data.payload
          console.log(docs);
          docs.forEach(item=>{
              const{descrition,country,language,pages,price,title,imageLink,_id} = item
              let container = document.getElementById('books')
              container.innerHTML += `
               <div className="book">
                  <img src='${Img}'>
                  <div className="info">
                     <h6>Dunyoning ishlari</h6>
                     <p>Dunyoning ishlari</p>
                     <a href="">4.1 • 3400 ta fikrlar</a>
                  </div>
               </div>
              `
           })
      })
    }
     const [books,setBooks] = useState(fetchBooks)
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
        </div>
        <div id="books">
            {/* {fetchBooks()} */}
        </div>
        </BookContainerStyle>
  
    )
}
