import { useState, useEffect } from 'react';
import axios from 'axios';

interface SentimentData {
  title: string;
  date: string;
  sentiment: number;
  label: string;
}

const useFetchSentiment = (title: string) => {
  const [result, setResult] = useState<SentimentData | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!title) return;

    const fetchSentiment = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await axios.post(
          'https://ysmpkqmb16.execute-api.ap-southeast-1.amazonaws.com/dev/dummy/news-sentiment',
          { title }
        );
        setResult(response.data);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSentiment();
  }, [title]);

  return { result, loading, error };
};

export default useFetchSentiment;
