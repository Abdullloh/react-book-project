import React from 'react'
import {SearchContainer} from './style/booksHome/searchStyle'
export default function Search() {
    return (
        <SearchContainer>
            <h1>Qidirish</h1>
            <div>
                <input type="text"  placeholder="Adiblar, kitoblar, audiolar, maqolalar..."/>
                <button>Izlash</button>
            </div>
        </SearchContainer>
    )
}
