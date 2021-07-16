import React ,{useState}from 'react';
import axios from 'axios';
import {BookContainers} from './style/booksHome/bookContainerStyle'
export default function BookContainer() {
    // const[books,setBooks] = useState({
    //     title:'',
    //     price:'',
    //     author:''
    // })

     const fetchBooks = () =>{
       const payload = axios('https://book.alitechbot.uz/api/books')
       .then(data=> {
           const{docs} = data.data.payload
        //    console.log(docs);
           docs.forEach(item=>{
               const{descrition,country,language,pages,price,title,imageLink,_id} = item
               let container = document.getElementById('books')
               container.innerHTML += `
                <li>${title} </li>
               `
           })
       })
     }
    return (
        <BookContainers>
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

        </div>
        </BookContainers>
  
    )
}
