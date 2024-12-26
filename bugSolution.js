```javascript
function MyComponent() {
  const [count, setCount] = useState(0);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/data', {
          signal,
        });
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        setCount(data.count);
      } catch (error) {
        if (error.name !== 'AbortError') {
          setError(error);
        }
      } finally {
        setLoading(false);
      }
    }
    fetchData();
    return () => controller.abort();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;
  return (
    <div>Count: {count}</div>
  );
}
```