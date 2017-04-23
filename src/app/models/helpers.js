export function getImmutableList(list, getImmutableFun) {
  const immutableList = []
  const length = list
  for(let i = 0; i < length; i++) {
    immutableList.push(getImmutableFun(list[i]))
  }
  return immutableList
}
