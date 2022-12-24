import PropTypes from 'prop-types'
import { ArrowPathIcon } from '@heroicons/react/24/outline'

export const Button = ({ title, onClick, loading, disabled, LeftIcon, RightIcon }) => {
  return (
    <button
      className='flex items-center gap-4 btn btn-primary bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded shadow-lg'
      disabled={disabled}
      onClick={() => onClick()}
    >{LeftIcon && LeftIcon}
      {title}
      {RightIcon && RightIcon}
      {loading && <ArrowPathIcon className='animate-spin w-6' />}
    </button>
  )
}

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  LeftIcon: PropTypes.func,
  RightIcon: PropTypes.func
}

Button.defaultProps = {
  title: '',
  onClick: () => {},
  loading: false,
  disabled: false,
  LeftIcon: null,
  RightIcon: null
}
