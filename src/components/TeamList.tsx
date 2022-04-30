import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../store/store';
import MemberItem from './MemberItem';
import { deleteMember } from '../store/team'
import { member } from '../data/types'

type Props = {}

const TeamList = (props: Props) => {
   const team = useSelector((state: RootState) => state.team);
   const dispatch = useDispatch();

   const deleteMemberFromList = (member: member) => {
    dispatch(deleteMember(member))
  }

  return (
    <div>
      {
        team.teamMembers.map(member => {
          return (
            <MemberItem
              id={member.id}
              key={member.id} 
              username={member.username}
              role={member.role}
              picture={member.picture}
              onClick={() => deleteMemberFromList(member)}
            />
          )
        })
      }
    </div>
  )
}

export default TeamList