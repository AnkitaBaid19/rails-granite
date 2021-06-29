import React, { useEffect, useState } from "react";

import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import Dashboard from "components/Dashboard";

const App = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {}, []);

  return (
    <Router>
      <Switch>
        <Route exact path="/dashboard" component={Dashboard} />
      </Switch>
    </Router>
  );
};

export default App;
