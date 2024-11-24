import './skinSwitch.css';

/**
 * Renders the skin switcher component in the website header.
 * Displays the app title and a button that allows the user to toggle between 
 * the two available themes (dark or light mode).
 * 
 * @param {Object} props - Component props.
 * @param {string} props.mode - Current skin mode ('dark' or 'light'). Defaults to 'dark'.
 * @param {function} props.switchSkin - Function to toggle between dark and light modes.
 * @returns {JSX.Element} The SkinSwitch component.
 */
const SkinSwitch = ({ mode = 'dark', switchSkin }) => {
    return (
        <div id="title">
            <h1>TODO</h1>
            <button 
                aria-label="Change skin" 
                id="changeBg-bt" 
                className={mode === 'dark' ? 'sunBg' : 'moonBg'} 
                onClick={switchSkin}
            ></button>
        </div>
    );
};

export default SkinSwitch;
