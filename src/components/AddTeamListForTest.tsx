import * as React from 'react';
import AddTeamMemberButton from './AddTeamMemberButton';
import SearchForm from './SearchForm'
import Dropdown from 'react-bootstrap/Dropdown';
import { Button } from 'react-bootstrap'
import members from '../data/dataMembers'
import { member } from '../data/types'
import { useDispatch } from 'react-redux'
import { addMember } from '../store/team'

export default function TeamListForTest () {
  const dispatch = useDispatch();
  const [areMoreShown, setAreMoreShown] = React.useState<boolean>(false)
  const [noOfElements, setnoOfElements] = React.useState<number>(5);
  const slice = members.slice(0, noOfElements);

  const addMemberToList = (member: member) => {
    dispatch(addMember(member))
  }

  const toggleLengthOfMembers = () => {
    if(slice.length > 5)  {
      setnoOfElements(noOfElements - 5)
      setAreMoreShown(false)
    } else {
      setnoOfElements(noOfElements + 5)
      setAreMoreShown(true)
    } 
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as={AddTeamMemberButton}>
        Add team member to this test
      </Dropdown.Toggle>

      <Dropdown.Menu as={SearchForm}>
        {slice.map((member: member) => {
          return (
            <Dropdown.Item 
              eventKey={member.id} 
              key={member.id}
              onClick={() => addMemberToList(member)}
            >
              {member.username}
            </Dropdown.Item>
          )
        })}
        <Button className='toggleButton' onClick={() => toggleLengthOfMembers()}>
          { areMoreShown ? 'show less ' : 'show more'}
        </Button>
      </Dropdown.Menu>
    </Dropdown>
  );
}
