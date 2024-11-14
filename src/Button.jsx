import PropTypes from "prop-types";

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
    <button>{children}</button>
  )
}

Button.propTypes = {
  checkVariationValue: ({primary, secondary, success, warning, danger}) => {
    // <Button primary>One</Button> : true
    // <Button primary secondary>One</Button> : false

    // if one the prop isn't used, it's undefined,
    // (!!undefined) = 0
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