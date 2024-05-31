import { useState, useEffect } from 'react';
import axios from 'axios';


interface Data {
  features: {
    [key: string]: { "0": number };
  };
  prediction: string;
}

const useFetchData = (query: string) => {
  const [result, setResult] = useState<Data | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);  
  
  useEffect(() => {
    if (!query) return;

    const fetchData = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.get(`https://ysmpkqmb16.execute-api.ap-southeast-1.amazonaws.com/dev/dummy/crypto-fraud?address=${query}`)
        setResult(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query]);
  
  return { result, loading, error };
}

export default useFetchData;