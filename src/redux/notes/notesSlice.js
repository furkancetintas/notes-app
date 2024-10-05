import { createSlice } from '@reduxjs/toolkit';

export const notesSlice = createSlice({
  name: 'notes',
  initialState: {
    items: [
      {
        id: '1',
        title: 'Note Title 1',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nemo consequuntur, deleniti perferendis tempora quis.',
        color: '#ec4899',
      },
      {
        id: '2',
        title: 'Note Title 2',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nemo consequuntur, deleniti perferendis tempora quis.',
        color: '#a855f7',
      },
      {
        id: '3',
        title: 'Note Title 3',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nemo consequuntur, deleniti perferendis tempora quis.',
        color: '#eab308',
      },
      {
        id: '4',
        title: 'Note Title 4',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nemo consequuntur, deleniti perferendis tempora quis.',
        color: '#3b82f6',
      },
      {
        id: '5',
        title: 'Note Title 5',
        description:
          'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio nemo consequuntur, deleniti perferendis tempora quis.',
        color: '#22c55e',
      },
    ],
    searchNote: '',
    filterColor: '',
  },
  reducers: {
    getTodos: (state, action) => {
      console.log(action.payload);
      return state.items;
    },
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    deleteNote: (state, action) => {
      const id = action.payload;
      const filtered = state.items.filter((item) => item.id !== id);

      state.items = filtered;
    },
    filterNote: (state, action) => {
      state.searchNote = action.payload;
      console.log(state.searchNote);
    },
    filterColorHandle: (state, action) => {
      state.filterColor = action.payload;
      console.log(state.filterColor);
    },
  },
});

export const { getTodos, addNote, deleteNote, filterNote, filterColorHandle } =
  notesSlice.actions;
export default notesSlice.reducer;
