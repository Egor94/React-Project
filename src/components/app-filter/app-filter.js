import './app-filter.css'

const AppFilter = () => {
    return (
        <div className="btn-group">
            <button
                className="btn btn-light"
                type="button">
                All emploee
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Salary Up
            </button>
            <button
                className="btn btn-outline-light"
                type="button">
                Salary over 1000$
            </button>

        </div>
    );
}

export default AppFilter;