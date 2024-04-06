import React from 'react'
const phoneEmailMap = {
  phone: Phone,
  email: Email,
}

const PhoneEmail = ({onNext}) => {
  const [type, setType] = useState('phone');
  const Component = phoneEmailMap[type];

  function onNext(){
    setType(type + 1);  
  }
  return (
         <Component onNext ={onNext}/>
  )  
}

export default PhoneEmail