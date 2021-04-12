import React, { useState } from 'react';

function ErrorBoundary() {
    //declare new state variable called "hasError, set initial value to false"
    const [hasError, errorInfo] = useState(false);

    return ( 
       if {hasError}
       
       <h1>Something went wrong! I'm Sorry!</h1>
    )
}




class ErrorBoundary extends Component {
    constructor(props) {
      super(props);
      this.state = { 
          hasError: false };
    }

    componentDidCatch(error, errorInfo) {
        throw new Error('Noooooooo!');
    }

    render() {
        if(this.state.hasError) {
            return <h1>Something went wrong! I'm sorry!</h1>;
        }

        return this.props.children;
    }
};

export default ErrorBoundary;