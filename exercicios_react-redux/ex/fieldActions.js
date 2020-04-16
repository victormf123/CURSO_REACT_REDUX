export function changeValue(e){
  return {
    type: 'VALUE_CHANGED',
    payload: e.target.value
  }
}