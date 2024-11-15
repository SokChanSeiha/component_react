import classNames from 'classnames';

function Panel({children, className, ...rest}) {
    const usableClassNames = classNames(
        'border rounded p-3 shadow bg-white w-full',
        className
    );

  return (
    <div {...rest} className={usableClassNames} >{children}</div>
  )
}

export default Panel
