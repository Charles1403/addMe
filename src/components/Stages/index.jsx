/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import cx from 'clsx';
import Text from '../Text';
import Container from '../Container';
import styles from './Stages.module.css';

const Stages = ({
	className = "",
	numberOfStages = 0,
	currentStage = 0,
}) => {
	const stageArr = Array.from(Array(numberOfStages).keys());
	return (
		<div className={cx(styles.stages, className)}>
			{ stageArr.length >= 1 &&
				stageArr.map((stage, i) => (
					<Container inline alignItems="center" marginTop={32} key={i}>
						{i >= 1 && (<Container width={50} height={1} backgroundColor="lightgrey" marginLeft={6} marginRight={6}/>)}
						<Container 
							inline
							width={30} 
							height={30} 
							borderRadius={30}
							alignItems="center"
							justifyContent="center"
							backgroundColor={currentStage === stage ? "blue" : "whitesmoke"}
						>
							<Text text={stage + 1} color={currentStage === stage ? "tertiary" : "primary"} />
						</Container>	
					</Container>
				))
			}
		</div>
	)
}

export default Stages;