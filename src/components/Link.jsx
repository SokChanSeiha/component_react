import {useContext} from 'react';
// import NavigationContext 

function Link({to, children}) {
    const handleClick = (event) => {
        event.preventDefault();
    };

    return <a onClick={handleClick}>{children}</a>
};

export default Link