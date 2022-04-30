import React from 'react'
import { Button } from 'react-bootstrap'
import { MdAddCircle } from 'react-icons/md'

type IProps = {
  onClick: React.MouseEventHandler<HTMLButtonElement>,
  children: string;
}

export type Ref = HTMLButtonElement

const AddTeamMemberButton = React.forwardRef<Ref, IProps>((props, ref) => {
  return (
    <Button
      href=""
      ref={ref}
      className='addTeamMemberButton' 
      onClick={(e) => {
        e.preventDefault()
        props.onClick(e)
      }}
    >
      <MdAddCircle className="addTeamMemberIcon"/>
      {props.children}
    </Button>
  )
})
AddTeamMemberButton.displayName = "AddTeamMemberButton"

export default AddTeamMemberButton