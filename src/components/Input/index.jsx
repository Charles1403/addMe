import cx from 'clsx';
import Container from '../Container';
import styles from './Input.module.css';

const Input = ({
	size,
	type = 'input',
	placeHolder,
	onChangeText = () => null,
}) => {
	const Tag = type;
	const computeInputWidth = (size) => {
		switch (size) {
		  case 'xs':
		    return 54;
		  case 'sm':
		    return 167;
		  case 'md':
		    return 252;
		  case 'lg':
		    return 343;
		  default:
		    return 167; 
		}
	};

	return (
	  <Container className='input-view'>
	    <Tag
	      className={cx(styles.input)}
	      placeholder={placeHolder}
	      placeholderTextColor="gray"
	      onChange={e => {
		if (onChangeText) {
		  onChangeText(e.target.value);
		}
	      }}
	      style={{
		width: computeInputWidth(size),	
	      }}
	    />
	  </Container>
	);
      };

export default Input;