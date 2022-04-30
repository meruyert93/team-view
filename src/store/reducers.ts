export default function team(state="", action) {
  switch(action.type) {
    case "ADD_MEMBER":
      return { state, ...action.payload};
    default:
      return state;
  }
}