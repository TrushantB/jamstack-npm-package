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
      <div>
        {name && (
          <h4 className='name' style={{ padding: '10px 0px' }}>
            <b>{name}</b>
          </h4>
        )}
        {designation && <p className='designation'>{'designation'}</p>}
      </div>
    </div>
  )
}

export default Card
