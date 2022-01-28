import { useContext } from 'react'
import Input from '../../../../components/Input'
import Container from "../../../../components/Container"
import Button from "../../../../components/Button"
import { Context } from '../../../../context'

const AddNewSubGenre = ({
	subGenre = '',
	disabled = true,
	goBack = () => null,
	goForward = () => null,
	selectedGenreId = 0,
	setSubGenre = () => null,
}) => {
	const { addGenre } = useContext(Context)
	return (
		<Container block>
			<Container marginTop={40}>
				<Input variant="primary" size="lg" placeHolder="Subgenre name" onChangeText={(text) => setSubGenre(text)}/>
			</Container>
			<Container marginTop={50} width={200} justifyContent="space-between">
				<Button text="< Back" variant="secondary" onClick={goBack}/>
				<Button text="Next" disabled={disabled} onClick={() => {
					if (selectedGenreId !== 0) {
						addGenre(selectedGenreId - 1, {
							id: Math.ceil(Math.random() * 100),
							name: subGenre,
							isDescriptionRequired: false,
						})
						goForward();
					}
				}}/>
			</Container>
		</Container>
	)
}

export default AddNewSubGenre;