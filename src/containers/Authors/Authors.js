import React,{useState,useEffect,useRef} from 'react'
import Header from '../Header/Header'
import {Link} from 'react-router-dom'
import {AuthorPage} from './AuthorStyle'
import banner from '../../assets/images/bg.svg'
import axios from 'axios'
import { Carousel } from 'antd';
import AuthorItem from './AuthorItem'
export default function Authors() {
  const ref = useRef()
  const initialState = {
    data:[],
    loading:true,
  }
    const [authors ,setAuthors] = useState(initialState)
    const fetchAuthors = async() =>{
        try {
            const {data} = await axios('https://book.alitechbot.uz/api/authors')
            console.log(data);
            if (data.success) {
                setAuthors({data:data.payload,loading:false});
              }
        } catch (error) {
            
        }
    }
    useEffect(()=>{
        fetchAuthors()
    },[])
    console.log(authors);
    
    const contentStyle = {
      height: '346px',
      color: '#fff',
      width:'100%',
      lineHeight: '160px',
      borderRadius:'20px',
      objectFit: "cover",
      objectPosition: "right center",
      textAlign: 'center',
      background: '#364d79',
    };
//     const current = ref.current;
//     console.log(current)
//     const loader = () => {
//       if(authors.loading){
//       return(
       
//        current.innerHtml = `
//        <div> Loading ...</div>
//        `
//       )
//     }
//    return(
//    current.innerHtml =  ` <>
//    {authors.data.map(data=>  (
                 
//      <AuthorItem
//      loading={authors.loading}
//       key={data._id}
//       id={data._id}
//       firstName={data.firstName}
//       lastName={data.lastName}
//       imageLink={data.imageLink}
//   />
//  ))}
//  </>
//  `
//    )
//   }
   
    return (
      <>
       <Header/>
        <AuthorPage>
            <div className="slider-container">
            <Carousel >
                <div>
                  <img src={banner} style={contentStyle} alt="" />
                </div>
                <div>
                <img src="https://cdn.pixabay.com/photo/2019/06/12/21/10/ocean-4270251__340.jpg" style={contentStyle} alt="" />
                </div>
                <div>
                <img src="https://cdn.pixabay.com/photo/2021/08/01/13/10/zakynthos-6514351__340.jpg" style={contentStyle} alt="" />
                </div>
                <div>
                <img src="https://cdn.pixabay.com/photo/2021/07/26/07/32/travel-6493621__340.jpg" style={contentStyle} alt="" />
                </div>
            </Carousel>
               <form action="#">
                 <h1>Qidirish</h1>
                 <input type="text" placeholder='Adiblar,kitoblar .....' />
                 <button>
                 <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.9766 18.2214C12.8226 18.2214 14.5196 17.5864 15.8736 16.5334L20.2696 20.9294L21.6836 19.5154L17.2876 15.1194C18.3416 13.7644 18.9766 12.0674 18.9766 10.2214C18.9766 5.81044 15.3876 2.22144 10.9766 2.22144C6.56556 2.22144 2.97656 5.81044 2.97656 10.2214C2.97656 14.6324 6.56556 18.2214 10.9766 18.2214ZM10.9766 4.22144C14.2856 4.22144 16.9766 6.91244 16.9766 10.2214C16.9766 13.5304 14.2856 16.2214 10.9766 16.2214C7.66756 16.2214 4.97656 13.5304 4.97656 10.2214C4.97656 6.91244 7.66756 4.22144 10.9766 4.22144Z" fill="#3C2710"/>
                    <path d="M12.3886 8.80743C12.7676 9.18743 12.9766 9.68943 12.9766 10.2214H14.9766C14.9766 9.15643 14.5606 8.15243 13.8026 7.39343C12.2886 5.88143 9.66363 5.88143 8.15063 7.39343L9.56264 8.80943C10.3226 8.05143 11.6326 8.05343 12.3886 8.80743Z" fill="#3C2710"/>
                </svg>
                     Izlash
                 </button>
               </form>
            </div>
            <div ref={ref} className="author-wrapper" >
             
                {authors.data.map(data=>  (
                  
                    <AuthorItem
                    loading={authors.loading}
                     key={data._id}
                     id={data._id}
                     firstName={data.firstName}
                     lastName={data.lastName}
                     imageLink={data.imageLink}
                 />
                ))}
               
            </div>
        </AuthorPage>
      </>
    )
}
