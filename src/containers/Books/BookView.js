import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios'

export default function BookView() {
    // const [book,setBook] = useState({
    //     comment:[],
    //     book:{
    //         author:{

    //         }
    //     }
    // });
    // const params = useParams()
    // console.log(params);
    // const fetchBook = async () => {
    //     try {
    //       const  {data}  = await axios(`https://book.alitechbot.uz/api/books/${params.id}`);
    //       console.log(data);
    //       if (data.success) {
    //           console.log(data);
    //         setBook(data.payload);
    //       }
    //     } catch (error) {
    //       console.log(error);
    //     }
    //   }
    
    //   useEffect(() => {
    //     fetchBook();
    //   }, []);
    //   console.log(book);
    return (
        <div>
            <h1>BookView page</h1>
        </div>
    )
}
