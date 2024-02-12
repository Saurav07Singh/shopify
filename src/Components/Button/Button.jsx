import React from 'react'
import "./button.styles.scss"

const Button = ({btnType,children,...restProps}) => {

    const Button_Types={
        google:'google-sign-in',
        inverted:'inverted'
    };
  return (
    <button className={`button-container ${Button_Types[btnType]}`} {...restProps}>{children}</button>
  )
}

export default Button