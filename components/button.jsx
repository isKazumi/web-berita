import { useState, useEffect } from 'react'

const Button = ({
  children,
  variant,
  disable = false,
  hendler,
  type = 'button',
  className
}) => {
  const [style, setStyle] = useState(null)

  useEffect(() => {
    const variants = {
      default:
        'p-3 text-lg hover:bg-secondary hover:text-white rounded-lg bg-gray text-center'
    }

    if (variant == 'default') {
      setStyle(variants.default)
    } else {
      return
    }
  }, [variant])

  return (
    <>
      <button
        type={type}
        disabled={disable}
        onClick={hendler}
        className={style || className}
      >
        {children}
      </button>
    </>
  )
}

export default Button
