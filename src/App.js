import './App.css';
import {useState} from "react";
import Header from "./layouts/Header/Header";
import SideMenu from "./layouts/SideMenu/SideMenu"
import MenuData from "./resources/Menu"
import Content from './layouts/Content/Content';

function App() {
    const [isOpenSideMenu, setOpenSideMenu] = useState(false);
    const [currentMenu, setCurrentMenu] = useState(MenuData[0]);

    return (
        <div className="App">
            <Header
                isOpenSideMenu={isOpenSideMenu}
                setOpenSideMenu={setOpenSideMenu}
            />
            <Content
                currentMenu={currentMenu}
                setCurrentMenu={setCurrentMenu}
            />
            <SideMenu
                isOpenSideMenu={isOpenSideMenu}
                setOpenSideMenu={setOpenSideMenu}
                setCurrentMenu={setCurrentMenu}
            />
            {isOpenSideMenu && <div className="wrapper" onClick={() => {setOpenSideMenu(false)}} />}
        </div>
    );
}

export default App;
