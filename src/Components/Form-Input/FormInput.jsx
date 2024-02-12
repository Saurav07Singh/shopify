import React from 'react'
import "./form-input.styles.scss"


const FormInput = ({label,...children}) => {
  return (
    <div className='group'>
      <input className='form-input' {...children}/>
      <label className={`${children.value.length?"shrink":""} form-input-label`} >{label}</label>
    
    </div>
  )
}

export default FormInput