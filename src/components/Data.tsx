import { useJsonFetch } from "../hooks/useJsonFetch";

export default function Data() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/data");

  return (
    <div>
      <h2>Data</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
}
