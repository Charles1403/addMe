/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cx from 'clsx';
import styles from './Container.module.css';

const Container = ({
  position,
  height,
  width,
  paddingTop,
  paddingLeft,
  paddingRight,
  paddingBottom,
  marginTop,
  marginRight,
  marginLeft,
  marginBottom,
  fullHeight = false,
  fullWidth = false,
  backgroundColor,
  justifyContent,
  flexGrow,
  flexBasis,
  flexShrink,
  flexWrap,
  flex,
  overflow,
  border = false,
  className,
  borderRadius,
  inline = false,
  block = false,
  alignItems,
  textAlign,
  flexDirection,
  children,
  onClick = () => {},
}) => (
  <div
    className={cx(styles.box, className, {
      [styles.fullWidth]: fullWidth,
      [styles.fullHeight]: fullHeight,
      [styles.inline]: inline,
      [styles.block]: block,
      [styles.border]: border,
      [styles.flexDirectionRow]: flexDirection === 'row',
      [styles.flexDirectionColumn]: flexDirection === 'column',
    })}
    style={{
      position,
      backgroundColor,
      justifyContent,
      flexGrow,
      flexBasis,
      flexShrink,
      flexWrap,
      flex,
      overflow,
      alignItems,
      textAlign,
      borderRadius: `${borderRadius * 0.1}em`,
      height: `${height * 0.1}em`,
      width: `${width * 0.1}em`,
      paddingTop: `${paddingTop * 0.1}em`,
      paddingLeft: `${paddingLeft * 0.1}em`,
      paddingRight: `${paddingRight * 0.1}em`,
      paddingBottom: `${paddingBottom * 0.1}em`,
      marginTop: `${marginTop * 0.1}em`,
      marginRight: `${marginRight * 0.1}em`,
      marginLeft: `${marginLeft * 0.1}em`,
      marginBottom:  `${marginBottom * 0.1}em`,
    }}
    onClick={onClick}
  >
    {children}
  </div>
);

export default Container;