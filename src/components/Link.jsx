import classNames from 'classnames';
import useNavigation from '../hook/use-navigation';
// import {useContext} from 'react';
// import NavigationContext from '../context/navigation';

function Link({to, children, className, activeClassName}) {
    // get currentPath state
    const {navigate, currentPath} = useNavigation();

    const usableLinkClassNames = classNames(
        'text-blue-500',
        className,
        currentPath=== to && activeClassName
    );
    const handleClick = (event) => {
        // if using one of the keys, 
        if (event.metaKey || event.ctrlKey) {
            return;
        }
        event.preventDefault();

        navigate(to);
    };
    // related with key commands
    return <a  className={usableLinkClassNames} href={to} onClick={handleClick}>
        {children}</a>
};

export default Link