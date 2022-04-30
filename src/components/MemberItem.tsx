import React, { FunctionComponent } from 'react'
import { member } from '../data/types'
import { TiDeleteOutline } from 'react-icons/ti'
import ReactTooltip from 'react-tooltip';

export interface Iprops extends member {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
}

const MemberItem: FunctionComponent<Iprops> = (Iprops) => {
  const { username, role, picture, onClick } = Iprops;
  const [ mouseOver, setMouseOver ] = React.useState<boolean>(false)

  return (
    <div 
      className='memberItem'
      onMouseOver={() => setMouseOver(true)}
      onMouseOut={() => setMouseOver(false)}
    >
        {
          mouseOver 
          ? <div>
              <ReactTooltip id="infoTooltip" place='top' type="light" effect="float">
                <span>Remove user</span>
              </ReactTooltip>
              <TiDeleteOutline 
                data-tip 
                data-for="infoTooltip"
                className='deleteIcon'
                onClick={(e) => {
                  e.preventDefault()
                  onClick(e)
                }}
              /> 
            </div>
          : <img 
              className='memberImage' 
              src={picture} 
              alt={username}
            />
        }
  
      <div className='infoWrapper'>
        <span className='role'>{ role } Member </span>
        <span className='username'>{ username }</span>
      </div>
    </div>
  )
}

export default MemberItem