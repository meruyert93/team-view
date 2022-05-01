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

  const addMemberToList = (member: member) => {
    dispatch(addMember(member))
  }

  return (
    <Dropdown>
      <Dropdown.Toggle as={AddTeamMemberButton}>
        Add team member to this test
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
