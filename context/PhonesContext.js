import { createContext, useState, useMemo, useCallback } from "react";
import phonesData from "../pages/api/data.json";

export const PhonesContext = createContext();

export const PhonesContextProvider = ({ children }) => {
  const [data, setData] = useState(phonesData);
  const columns = data?.length ? Object.keys(data[0]) : [];
  const initialData = {
    name: "",
    phone: "",
  };
  const [selectedNote, setSelectedNote] = useState(null);
  const [newNote, setNewNote] = useState(initialData);
  const [editMode, setEditMode] = useState(false);
  const [addMode, setAddMode] = useState(false);

  const handleAddNote = useCallback(
    (newNote) => {
      const newData = [...data, newNote];
      setData((current) => data);
      //saveInLS(lsKey, data);
    },
    [data]
  );

  const handleDeleteNote = useCallback(
    (id) => {
      const newData = data.filter((note) => note.phone !== id);
      setData(newData);
      //saveInLS(lsKey, data);
    },
    [data]
  );

  const handleEditNote = useCallback(
    ({ name, phone, id }) => {
      //const { name, phone } = selectedNote;
      const newData = data.map((note) => {
        if (note.id === id) {
          return { ...note, name, phone };
        }
        return note;
      });
      setData((data) => newData);
    },
    [data]
  );

  const value = useMemo(
    () => ({
      data,
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
