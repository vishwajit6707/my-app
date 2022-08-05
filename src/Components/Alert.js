import React from 'react'

export default function alert(props) {

const capitalize = (word)=>{
const a = word.toLowerCase();
return  a.charAt(0).toUpperCase() + a.slice(1) ;

}

  return (
     props.alert &&
    <div className={`alert alert-${props.alert.type} alert-dismissible fade show`} role="alert">
     <strong>{props.alert.msg}</strong> : {capitalize(props.alert.type)} 

   </div>

  )
}
