import React from 'react'
import PropTypes from 'prop-types'
import { useHistory } from 'react-router-dom';
import {BookItemStyle} from '../../style/booksHome/BookItem'
const defaultImage = "https://cdn.pixabay.com/photo/2019/09/17/20/47/prague-4484517__480.jpg"

export default function BookItem({title,id,imageLink}) {
    console.log(title);
    const history = useHistory();
    return (
        <BookItemStyle onClick={() => history.push(`/books/${id}`)} >
           <div className="book-img">
             <img src={ defaultImage} alt="book-img" />
           </div>
           <div className="book-info">
               <h6>{title.length > 20 ? title.slice(0, 17) + '...' : title}</h6>
           </div>

        </BookItemStyle>
    )
}

BookItem.defaultProps = {
    imageLink: defaultImage
  };
  
  BookItem.propTypes = {
    title: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    imageLink: PropTypes.string
  };