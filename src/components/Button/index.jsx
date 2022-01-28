import cx from 'clsx';
import styles from './Button.module.css';

const Button = ({
  text,
  marginTop,
  marginLeft,
  marginRight,
  size = "sm",
  marginBottom,
  disabled = false,
  variant ="primary",
  onClick = () => {},
}) => (
  <button
    disabled={disabled}
    type="button"
    style={{
      marginTop,
      marginLeft,
      marginRight,
      marginBottom,
    }}
    className={cx(styles.button, {
      [styles.sm]: size === 'sm',
      [styles.md]: size === 'md',
      [styles.lg]: size === 'lg',
      [styles.primary]: variant === 'primary',
      [styles.secondary]: variant === 'secondary',
      [styles.tertiary]: variant === 'tertiary',
      [styles.disabled]: disabled,
    })}
    onClick={() => onClick()}
  >
    {text}
  </button>
);

export default Button;