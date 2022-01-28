import { useContext, useMemo } from "react";
import Container from "../../../../components/Container"
import Button from "../../../../components/Button"
import { Context } from "../../../../context";

const SelectSubGenre = ({
	disabled = true,
	selectedSubGenre = '',
	selectedGenreId = -1,
	goBack = () => null,
	goForward = () => null,
	updateSelectedSubGenre = () => null
}) => {
	const {genres} = useContext(Context)
	const selected = useMemo(() => genres.filter(genre => genre.id === selectedGenreId)[0]
	, [genres, selectedGenreId]);
	const subGenres = selected.subgenres;

	return (
		<>
			<Container marginTop={32} flexWrap="wrap" width={600}>
				{subGenres.map((subGenre, i) => (
					<Button
						key={i}
						size="md"
						marginTop={8}
						marginRight={8}
						text={subGenre.name}
						onClick={() => updateSelectedSubGenre(subGenre.name)}
						variant={selectedSubGenre === subGenre.name ? "primary" : "secondary"}
					/>
				))}
				<Button
					text="+ Add new"
					variant="tertiary"
					marginRight={8}
					marginTop={8}
					size="md"
					onClick={() => goForward(0)} 
				/>
			</Container>
			<Container marginTop={50} width={200} justifyContent="space-between">
				<Button text="< Back" variant="secondary" onClick={goBack}/>
				<Button text="Next" disabled={disabled} onClick={() => goForward(1)}/>
			</Container>
		</>
	)
}

export default SelectSubGenre;