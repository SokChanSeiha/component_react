import className from 'classnames'

const finalClassNmae = className('px-1.5',{
    'bg-blue-500': true,
    'bg-red-500': true,
    "text-yellow-500": false
})

console.log(finalClassNmae); // px-1.5'  bg-blue-500  bg-red-500

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded
}) {
  return (
    <button className="px-3 py-1.5 border border-blue-600 bg-blue-500 text-white">{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    const count = Number(!!primary)
    +Number(!!secondary)
    +Number(!!warning)
    +Number(!!success)
    +Number(!!danger)

    if (count > 1) {
      return new Error('Only one of the primary, secondary, success, warning and danger can be true')
    }
  }
}

export default Button;