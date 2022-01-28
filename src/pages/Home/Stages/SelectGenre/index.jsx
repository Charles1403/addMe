import { useContext } from "react"
import Container from "../../../../components/Container"
import Button from "../../../../components/Button"
import { Context } from "../../../../context"

const SelectGenre = ({
	disabled = true,
	selectedGenre = '',
	goBack = () => null,
	goForward = () => null,
	updateSelectedGenre = () => null
}) => {
	const {genres} = useContext(Context);
	return (
		<>
			<Container marginTop={32} flexWrap="wrap" width={600}>
				{genres.map((genre, i) => (
					<Button
						key={i}
						text={genre.name}
						variant={selectedGenre === genre.name ? "primary" : "secondary"}
						marginRight={8}
						marginTop={8}
						size="md"
						onClick={() => updateSelectedGenre(genre.name, genre.id)} />
				))}
			</Container>
			<Container marginTop={50} width={200} justifyContent="space-between">
				<Button text="< Back" variant="secondary" onClick={goBack}/>
				<Button text="Next" disabled={disabled} onClick={goForward}/>
			</Container>
		</>
	)
}

export default SelectGenre;