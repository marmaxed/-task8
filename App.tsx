import { useEffect, useState } from "react";
import type { UserShort } from "./models/models";
import List from "./components/List";
import Details from "./components/Details";

function App() {
  const [users, setUsers] = useState<UserShort[]>([]);
  const [selected, setSelected] = useState<UserShort | null>(null);

  useEffect(() => {
    fetch("https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json")
      .then((res) => res.json())
      .then(setUsers)
      .catch(console.error);
  }, []);

  return (
    <div>
      <List users={users} onSelect={setSelected} selected={selected?.id} />
      {selected && <Details info={selected} />}
    </div>
  );
}

export default App;
