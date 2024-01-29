import React from 'react'
import "./categoryitem.styles.scss"


const CategoryItem = ({category}) => {
    const {id,imageUrl,title} = category
  return (
    <div className='category-container'>
    <div key={id} style={{backgroundImage:`url(${imageUrl})`}} className='background-image' />
    <div className='category-body-container'>
              <h2>{title}</h2>
    </div>
    
    </div>
  )
}

export default CategoryItem