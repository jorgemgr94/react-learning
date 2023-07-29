import { useState, useRef } from "react";
import { debounce } from "lodash";

type Character = {
	name: string;
};

export default function Debounce() {
	const [characters, setCharacters] = useState<string[]>([]);

	async function search(criteria: string) {
		const response = await fetch(
			`https://swapi.dev/api/people/?search=${criteria}`
		);
		const body = await response.json();

		return body.results.map((result: Character) => result.name);
	}

	const debouncedSearch = useRef(
		debounce(async (criteria) => {
			setCharacters(await search(criteria));
		}, 300)
	).current;

	async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		debouncedSearch(e.target.value);
	}

	return (
		<section>
			<input
				type="search"
				placeholder="Enter your search"
				onChange={handleChange}
			/>
			<ul>
				{characters.map((character) => (
					<li key={character}>{character}</li>
				))}
			</ul>
		</section>
	);
}
