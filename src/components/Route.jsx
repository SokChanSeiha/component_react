import useNavigation from "../hook/use-navigation";
// import {useContext} from 'react';
// import NavigationContext from '../context/navigation';

function Route({path, children}) {
    const {currentPath} = useNavigation();
    
    if (path === currentPath) {
        return children;
    };
    return null;
};

export default Route;