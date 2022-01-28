import { useMemo, useState } from 'react'
import Text from '../../../../components/Text'
import Input from '../../../../components/Input'
import Container from "../../../../components/Container"
import Button from "../../../../components/Button"

const AddBookDetails = ({
	goBack = () => null,
	goForward = () => null,
	AddNewSubGenre = () => null
}) => {
	const [isbn, setIsbn] = useState('');
	const [title, setTitle] = useState('');
	const [author, setAuthor] = useState('');
	const [publisher, setPublisher] = useState('');
	const [description, setDescription] = useState('');

	const isFormDisabled = useMemo(() => {
		if (isbn !== '' && title !== '' && author !== '' && publisher !== '' && description !== '') return false;
		return true;
	}, [isbn, title, author, publisher, description])

	return (
		<Container block>
			<Text color="primary" type="p" text="Book title" size="md" />
			<Input variant="primary" size="lg" placeHolder="Book title" onChangeText={(text) => setTitle(text)}/>

			<Text color="primary" type="p" text="Author" size="md" />
			<Input variant="primary" size="lg" placeHolder="Author" onChangeText={(text) => setAuthor(text)}/>

			<Text color="primary" type="p" text="ISBN" size="md" />
			<Input variant="primary" size="lg" placeHolder="ISBN" onChangeText={(text) => setIsbn(text)}/>

			<Text color="primary" type="p" text="Publisher" size="md" />
			<Input variant="primary" size="lg" placeHolder="Publisher" onChangeText={(text) => setPublisher(text)}/>

			<Text color="primary" type="p" text="Description" size="md" />
			<Input variant="primary" size="lg" type="textarea" placeHolder="Type your description" onChangeText={(text) => setDescription(text)}/>

			<Container marginTop={50} width={200} justifyContent="space-between">
				<Button text="< Back" variant="secondary" onClick={goBack}/>
				<Button text="Next" disabled={isFormDisabled} onClick={() => {
					AddNewSubGenre(title, author, isbn, publisher, description );
					goForward();
					}}/>
			</Container>
		</Container>
	)
}

export default AddBookDetails;