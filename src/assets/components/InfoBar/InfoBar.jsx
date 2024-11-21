import './infoBar.css'
const InfoBar = ({mode,uncompletedTodos,clearCompleted}) => {
    return (
        <div id="infoBar" style={{backgroundColor: mode === 'dark' ? '#25273D' : 'white'}}>
            <p id="info" name="info">{uncompletedTodos} items left</p>
            <button id="clear-bt" onClick={clearCompleted}>Clear Completed</button>
        </div>
    )
}

export default InfoBar;