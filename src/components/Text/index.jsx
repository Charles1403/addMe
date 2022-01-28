import cx from 'clsx';
import styles from './Text.module.css';

const Text = ({
  color = "primary",
  type = "span",
  size = "sm",
  text = "",
  bold = false,
  className = ""
}) => {
  const Tag = type;
  return (
    <Tag
      className={cx(styles.text, className, {
        [styles.sm]: size === 'sm',
        [styles.md]: size === 'md',
        [styles.lg]: size === 'lg',
        [styles.bold]: bold,
        [styles.primary]: color === 'primary',
        [styles.secondary]: color === 'secondary',
        [styles.tertiary]: color === 'tertiary',
      })}
    >
      {text}
    </Tag>
  );
};

export default Text;