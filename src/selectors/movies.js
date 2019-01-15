export const selectLists = (lists) => lists && lists.filter(list => !!list)

export const selectListById = (lists, id) => lists.find(list => list.id === id)