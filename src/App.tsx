import { useState } from "react";

import "./App.css";
import UserForm from "./components/UserForm";

function App() {
  const [typeUser, setTypeUser] = useState([
    { id: 1, omschrijving: "leerling" },
    { id: 2, omschrijving: "leerkracht" },
    { id: 3, omschrijving: "administratief medewerker" },
  ]);
  const [users, setUsers] = useState<string[]>([]);
  const handleClick = (user?: string) => {
    if (user != null) setUsers([...users, user]);
  };
  return (
    <>
      <UserForm onSubmit={handleClick}></UserForm>
    </>
  );
}

export default App;
