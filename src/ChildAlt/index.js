import React from 'react';

class ChildAlt extends React.Component {

    componentDidMount() {
        console.log('mount');
        this.props.setClick(this.getAlert);
    }

    getAlert() {
        alert('getAlert from Child alternative solution');
    }

    render() {
        return <h3>Child class component with function passed back to parent</h3>;
    }
}

export default ChildAlt;