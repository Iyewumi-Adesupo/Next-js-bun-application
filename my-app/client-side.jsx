import { useEffect, useState } from 'react';

export default function MyComponent() {
  const [randomValue, setRandomValue] = useState(null);

  useEffect(() => {
    // This code runs only on the client
    setRandomValue(Math.random());
  }, []);

  return (
    <div>
      {randomValue ? (
        <p>Random Value: {randomValue}</p>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
