import { useJsonFetch } from "../hooks/useJsonFetch";

export default function ErrorRequest() {
  const [data, loading, error] = useJsonFetch("http://localhost:7070/error");

  return (
    <div>
      <h2>Error</h2>
      {loading && <p>Загрузка...</p>}
      {error && <p>{error}</p>}
      {data && <pre>{JSON.stringify(data)}</pre>}
    </div>
  );
}