import { useState, useEffect } from "react";

export default function useAPI({ url, onError }) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  async function refresh() {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setData(data);
    } catch (error) {
      setError(error);
      onError();
    }
    setLoading(false);
  }

  useEffect(() => {
    refresh();
  }, [url]);

  return { loading, data, error, refresh };
}
