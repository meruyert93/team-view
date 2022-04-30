import * as React from 'react';
import AddTeamMemberButton from './AddTeamMemberButton';
import SearchForm from './SearchForm'
import Dropdown from 'react-bootstrap/Dropdown';
import members, { member} from '../data/dataMembers'

export interface IAppProps {
}

export default function TeamListForTest (props: IAppProps) {

  const addMember = (member: member) => {
    console.log(member)
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
              onClick={() => addMember(member)}
            >
              {member.username}
            </Dropdown.Item>
          )
        })}
      </Dropdown.Menu>
    </Dropdown>
  );
}
