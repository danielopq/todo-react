import './skinSwitch.css'

const SkinSwitch = ({mode='light',switchSkin}) => {
    return (
        <div id="title">
            <h1>TODO</h1>
            <button id="changeBg-bt" className={mode === 'dark' ? 'sunBg' : 'moonBg'} onClick={switchSkin}></button>
        </div>
    )
}

export default SkinSwitch;