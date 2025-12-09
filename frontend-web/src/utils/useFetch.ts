import { useEffect, useState } from 'react';
import axios from 'axios';

export default function useFetch(url: string) {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get(url).then((res) => setData(res.data)).catch(() => setData(null));
  }, [url]);

  return { data };
}
