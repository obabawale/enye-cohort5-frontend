import { useEffect, useState } from 'react';
import Table from './Table';

function App() {
  const [profiles, setProfiles] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getProfiles = async () => {
      setLoading(true);
      const response = await fetch("https://api.enye.tech/v1/challenge/records");
      const data = await response.json();
      setProfiles(data.records.profiles);
      setLoading(false);
    }
    getProfiles();
  }, []);

  return (
    <div className="App">
      <h1 className="text-primary mb-5">Profiles</h1>
      <Table profiles={profiles} loading={loading}/>
    </div>
  );
}

export default App;