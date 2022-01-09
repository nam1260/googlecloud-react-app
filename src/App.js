import './App.css';
import {useState} from "react";
import Header from "./layouts/Header/Header";
import SideMenu from "./components/SideMenu"
import MenuData from "./resources/Menu"

function App() {
    const [isOpenSideMenu, setOpenSideMenu] = useState(false);
    const [currentMenu, setCurrentMenu] = useState(MenuData[0]);

    return (
        <div className="App">
            <Header isOpenSideMenu={isOpenSideMenu} setOpenSideMenu={setOpenSideMenu}/>
            <SideMenu isOpenSideMenu={isOpenSideMenu} setOpenSideMenu={setOpenSideMenu}/>
            {isOpenSideMenu && <div className="wrapper" onClick={() => {setOpenSideMenu(false)}} />}
        </div>
    );
}

export default App;
