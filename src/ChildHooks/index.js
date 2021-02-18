import React from 'react';

const {forwardRef, useImperativeHandle} = React;


// We need to wrap component in `forwardRef` in order to gain
// access to the ref object that is assigned using the `ref` prop.
// This ref is passed as the second parameter to the function component.
const ChildFunctional = forwardRef((props, ref) => {

    // The component instance will be extended
    // with whatever you return from the callback passed
    // as the second argument
    useImperativeHandle(ref, () => ({

        getAlert() {
            alert("getAlert from functional Child");
        }

    }));

    return (
        <h3>Child functional component</h3>
    );
});

export default ChildFunctional;