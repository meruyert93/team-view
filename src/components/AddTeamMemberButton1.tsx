import React, { FunctionComponent } from 'react'
import { Button } from 'react-bootstrap'
import { MdAddCircle } from 'react-icons/md'

export interface IProps {
  addTeamMember: React.MouseEventHandler<HTMLButtonElement>,
}

const AddTeamMemberButton: FunctionComponent<IProps> = ({ addTeamMember }) => {
  return (
    <Button
      className='addTeamMemberButton' 
      onClick={addTeamMember}
    >
      <MdAddCircle className="addTeamMemberIcon"/>
      Add Team member to this test
    </Button>
  )
}

export default AddTeamMemberButton