import React from 'react'
import PropTypes from 'prop-types'

export default function Loader({loading}) {
    if(loading){
        return (
            <div>
                Loading ...
            </div>
        )
    }
   return null
}
