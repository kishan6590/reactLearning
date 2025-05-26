//custome hooks

import { useState, useEffect } from "react";

export function useSpecialChai() {
  const [chai, setChai] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(`https://api.freeapi.app/api/v1/public/quotes/quote/random`)
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to fetch special chai");
        }
        return res.json();
      })
      .then((data) => {
        setChai(data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message || "Something went wrong");
        setLoading(false);
      });
  }, []);

  return { chai, loading, error };
}
