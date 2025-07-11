import { type FC, useEffect, useState } from "react";
import type { UserShort, UserDetails } from "../models/models";

interface Props {
  info: UserShort;
}

const cache = new Map<number, UserDetails>();

const Details: FC<Props> = ({ info }) => {
  const [data, setData] = useState<UserDetails | null>(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const load = async () => {
      if (cache.has(info.id)) {
        setData(cache.get(info.id)!);
        return;
      }

      setLoading(true);
      try {
        const res = await fetch(`https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/${info.id}.json`);
        const json = await res.json();
        cache.set(info.id, json);
        setData(json);
      } catch (err) {
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [info.id]);

  if (loading || !data) return <div>Загрузка...</div>;

  return (
  <div style={{ maxWidth: 300 }}>
    <h2>{data.name}</h2>
    <img src={data.avatar} alt={data.name} width={150} />
    <p><strong>Город:</strong> {data.details.city}</p>
    <p><strong>Компания:</strong> {data.details.company}</p>
    <p><strong>Должность:</strong> {data.details.position}</p>
  </div>);

};

export default Details;