import type { FC } from "react";
import type { UserShort } from "../models/models";

interface Props {
  users: UserShort[];
  selected?: number;
  onSelect: (user: UserShort) => void;
}

const List: FC<Props> = ({ users, onSelect, selected }) => {
  return (
    <ul>
      {users.map((u) => (
        <li
          key={u.id}
          onClick={() => onSelect(u)}
          style={{
            fontWeight: selected === u.id ? "bold" : "normal",
          }}
        >
          {u.name}
        </li>
      ))}
    </ul>
  );
};

export default List;