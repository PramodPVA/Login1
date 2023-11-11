HeaderComponent.js
import React from 'react';

const HeaderComponent = () => {
    return (
        <header>
            <h1>Employee React Routing Task</h1>
        </header>
    );
}

export default HeaderComponent;


ListEmployees.js
import React from 'react';

const ListEmployees = () => {
    return (
        <div>
            <h2>List All Employees</h2>
            {/* Add logic to list employees */}
        </div>
    );
}

export default ListEmployees;



CreateEmployee.js
import React from 'react';

const CreateEmployee = () => {
    return (
        <div>
            <h2>Create Employee</h2>
            {/* Add logic to create employee */}
        </div>
    );
}

export default CreateEmployee;



ViewEmployee.js
import React from 'react';

const ViewEmployee = () => {
    return (
        <div>
            <h2>View Employee</h2>
            {/* Add logic to view employee */}
        </div>
    );
}

export default ViewEmployee;



FooterComponent.js
import React from 'react';

const FooterComponent = () => {
    return (
        <footer>
            <p>for display only this message</p>
            <p>"List All Employees"</p>
            <p>"Create Employee"</p>
            <p>"View Employee"</p>
        </footer>
    );
}

export default FooterComponent;




App.js
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HeaderComponent from './HeaderComponent';
import ListEmployees from './ListEmployees';
import CreateEmployee from './CreateEmployee';
import ViewEmployee from './ViewEmployee';
import FooterComponent from './FooterComponent';

function App() {
  return (
    <Router>
      <div className="App">
        <HeaderComponent />
        <Switch>
          <Route path="/list" component={ListEmployees} />
          <Route path="/create" component={CreateEmployee} />
          <Route path="/view" component={ViewEmployee} />
        </Switch>
        <FooterComponent />
      </div>
    </Router>
  );
}

export default App;