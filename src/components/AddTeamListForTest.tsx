import * as React from 'react';
import AddTeamMemberButton from './AddTeamMemberButton';
import SearchForm from './SearchForm'
import Dropdown from 'react-bootstrap/Dropdown';
import members from '../data/dataMembers'
import { member } from '../data/types'
import { useSelector, useDispatch } from 'react-redux'
import { addMember } from '../store/team'

export interface IAppProps {
}

export default function TeamListForTest (props: IAppProps) {
  const dispatch = useDispatch();
  // const team = useSelector((state: RootState) => state.teamMembers);

  const addMemberToList = (member: member) => {
    dispatch(addMember(member))
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as={AddTeamMemberButton}>
        Add Team member to this test
      </Dropdown.Toggle>

      <Dropdown.Menu as={SearchForm}>
        {members.map((member: member) => {
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
      </Dropdown.Menu>
    </Dropdown>
  );
}
