import React from 'react';
import './App.css';
import Child from "./Child";
import ChildFunctional from "./ChildHooks";
import ChildAlt from "./ChildAlt";

const {useRef} = React;


function App() {

    const child = React.createRef();
    const funcChild = useRef();
    let clickChildAlt;


    const onClickChild = () => {
        child.current.getAlert();
    }

    const onClickChildFunctional = () => {
        funcChild.current.getAlert();
    }

    const onClickChildAlt = () => {
        clickChildAlt   ();
    }


    return (
        <div className="App">

            <Child ref={child}/>
            <button onClick={onClickChild}>Run Child method</button>


            <ChildFunctional ref={funcChild}/>
            <button onClick={onClickChildFunctional}>Run functional Child method</button>

            <ChildAlt setClick={click => clickChildAlt = click}  />
            <button onClick={onClickChildAlt}>Run alternative Child method</button>


        </div>
    );
}

export default App;
