import React from 'react'
import "./categorycontainer.styles.scss"

const CategoryContainer = ({children}) => {
  return (
    <div className='categories-container'>{children}</div>
  )
}

export default CategoryContainer