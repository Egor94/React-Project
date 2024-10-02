import AppInfo from '../app-info/app-info';
import SerchPanel from '../serch-panel/serch-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/emploees-add-form';

import './app.css';

function App() {
    return (
        <div className="app">   
            <AppInfo/>
            <div className="serch-panel">
            <SerchPanel/>
            <AppFilter/>
            </div>

            <EmployeesList/>
            <EmployeesAddForm/>
        </div>
    );
}

export default App;