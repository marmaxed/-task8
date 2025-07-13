import { useJsonFetch } from "../hooks/useJsonFetch";

export default function Loading() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/loading");

  return (
    <div>
      <h2>Loading</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
}