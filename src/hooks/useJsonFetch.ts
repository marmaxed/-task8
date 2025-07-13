import { useEffect, useState } from "react";

export function useJsonFetch<T = any>(url: string, opts?: RequestInit): [T | null, boolean, string | null] {
  const [data, setData] = useState<T | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    const fetchData = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch(url, opts);
        if (!response.ok) {
          throw new Error(`HTTP error: ${response.status}`);
        }

        const json = await response.json();
        if (!cancelled) {
          setData(json);
        }
      } catch (e: any) {
        if (!cancelled) {
          setError(e.message);
        }
      } finally {
        if (!cancelled) {
          setLoading(false);
        }
      }
    };

    fetchData();

    return () => {
      cancelled = true;
    };
  }, [url]);

  return [data, loading, error];
}

