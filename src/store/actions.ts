export const addMember = (member) => {
  return { type: "ADD_MEMBER", payload: member}
}

export const deleteMember = (member) => {
  return { type: "DELETE_MEMBER", payload: member}
}