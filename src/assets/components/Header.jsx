
const Header = () => {
    return (
        <header>
            <div id="title">
                <h1>TODO</h1>
                <button className="moonBg"></button>
            </div>
            <form>
                <div id="newTodo" className="container cont-light-mode single-cont">
                    <button className='state-bt unFinished-bt'></button>
                    <input id="createTodo" type="text" placeholder='Create a new todo...'></input>
                </div>
            </form>
        </header>
    )
}

export default Header;