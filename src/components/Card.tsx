import React from 'react'

type Props = {
  name?: string
  designation?: string
  src?: string
}
const Card = ({ name = '', designation = '', src = 'https://www.w3schools.com/howto/img_avatar.png' }: Props) => {
  return (
    <div className='card'>
      {src && <img src={src} alt='Avatar' style={{ width: '100%' }} />}
      <div className='container'>
        {name && (
          <h4>
            <b>{name}</b>
          </h4>
        )}
        {designation && <p>{designation}</p>}
      </div>
    </div>
  )
}

export default Card
