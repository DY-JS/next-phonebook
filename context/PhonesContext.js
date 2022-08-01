import { createContext, useState, useMemo, useCallback } from 'react';
import phonesData from '../pages/api/data.json';

export const PhonesContext = createContext();

export const PhonesContextProvider = ({ children }) => {
  const lsKey = 'phonebook';
  const [data, setData] = useState(phonesData);
  const columns = data?.length ? Object.keys(data[0]) : [];
  const initialData = {
    id: '',
    name: '',
    phone: '',
  };
  const [selectedNote, setSelectedNote] = useState(initialData);
  const [newNote, setNewNote] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);

  const saveInLS = (key, data) => {
    if (localStorage) {
      localStorage.setItem(key, JSON.stringify(data));
    }
  };

  const handleAddNote = useCallback(
    (newNote) => {
      const newData = [...data, newNote];
      setData((current) => newData);
      saveInLS(lsKey, data);
    },
    [data]
  );

  const handleDeleteNote = useCallback(
    (id) => {
      const newData = data.filter((note) => note.id !== id);
      setData(newData);
      saveInLS(lsKey, data);
    },
    [data]
  );

  const handleEditNote = useCallback(
    ({ name, phone, id }) => {
      const newData = data.map((note) => {
        if (note.id === id) {
          return { ...note, name, phone };
        }
        return note;
      });
      setData((data) => newData);
      saveInLS(lsKey, data);
    },
    [data]
  );

  const value = useMemo(
    () => ({
      data,
      lsKey,
      setData,
      initialData,
      columns,
      selectedNote,
      setSelectedNote,
      handleAddNote,
      handleDeleteNote,
      handleEditNote,
      newNote,
      setNewNote,
      editMode,
      setEditMode,
      addMode,
      setAddMode,
    }),
    [columns, data, selectedNote, newNote, initialData, editMode, addMode]
  );

  return (
    <PhonesContext.Provider value={value}>{children}</PhonesContext.Provider>
  );
};
