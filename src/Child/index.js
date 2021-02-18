import React from 'react';

class Child extends React.Component {


    getAlert() {
        alert('getAlert from Child');
    }

    render() {
        return <h3>Child class component</h3>;
    }
}

export default Child;