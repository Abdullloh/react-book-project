import React from 'react'
import {AuthorItemStyle} from './AuthorItemStyle';
import {Link,useHistory} from 'react-router-dom';
import { Card } from 'antd';
const { Meta } = Card;
export default function AuthorItem(props) {
    const{id,firstName,lastName,imageLink,loading} = props

    const history = useHistory()
    
    return (
             <AuthorItemStyle onClick={()=> history.push(`/authors/${id}`)}>
                 <Card
                hoverable
                cover={<img alt="example" src="https://devbooks-uz.vercel.app/static/media/avloniy.12469a73.svg" />}
            >
                <Meta title={firstName} description={lastName} />
            </Card>
         </AuthorItemStyle>
        
    )
}
