import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { getSomeData } from './apiservice';
import Login from './LoginForm';
import Onebox from './OneBox';
import Reply from './reply';

const App = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getSomeData();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      <h1>Data from API</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
      <Router>
        <Switch>
          <Route path="/google-login" component={Onebox} />
          <Route path="/reply/:thread_id" component={Reply} />
          <Route path="/" component={Login} />
        </Switch>
      </Router>
    </div>
  );
};

export default App;
