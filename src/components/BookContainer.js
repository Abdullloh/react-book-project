import React ,{useState}from 'react'
// import axios from 'axios'
export default function BookContainer() {
    // const[books,setBooks] = useState({
    //     title:'',
    //     price:'',
    //     author:''
    // })

     const fetchBooks = () =>{
    //    const payload = axios('https://book.alitechbot.uz/api/books');
    //      console.log(payload);
     fetch('https://book.alitechbot.uz/api/books')
      .then(data=>data.json())
      .then(res=>{
          const{docs} = res.payload
          console.log(docs);
      })
     }
    return (
        <div>
            {fetchBooks()}
        </div>
    )
}
