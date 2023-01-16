import { React, useEffect, useState } from 'react';
import './App.css';
import Card from './components/Card';

const App = (props) => {
  const [DarkState, setDarkState] = useState(false)
  const [scrollButtonHide, setScrollButtonHide] = useState(false)

  const DarkModeHandler = () => {
    setDarkState(true)
  }
  const LightModeHandler = () => {
    setDarkState(false)
  }

  const TopScroll = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }


  const ScrollTopButtonDataHandler = () => {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
      setScrollButtonHide(true)
    }
    else {
      setScrollButtonHide(false)
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', ScrollTopButtonDataHandler)
  }, [])

  return (
    <>
      <div className={!DarkState ? "main-container" : "main-container-mode"}>
        <button className={!DarkState ? "Dark-Mode" : "Dark"} onClick={!DarkState ? DarkModeHandler : LightModeHandler}>{!DarkState ? 'Dark' : 'Light'} Mode</button>
        <Card onDarkState={DarkState} />
        {scrollButtonHide &&
          <button className={!DarkState ? 'top-button' : "top-button-mode"} onClick={TopScroll} >TOP</button>
        }
      </div>
      <script src="react.js"></script>
    </>
  );
}




export default App;
