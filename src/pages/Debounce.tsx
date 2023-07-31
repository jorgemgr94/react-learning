import { useState, useRef } from 'react';
import debounce from 'lodash/debounce';
import Footer from '../components/Footer';

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
		debounce(async (criteria: string) => {
			setCharacters(await search(criteria));
		}, 300)
	).current;

	async function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		debouncedSearch(e.target.value);
	}

	return (
		<section className="p-10">
			<h1 className="mb-4 text-3xl font-bold underline">
				Start Wars character finder
			</h1>
			<input
				id="search-value"
				className="bg-gray-100 h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
				type="search"
				name="search"
				placeholder="Enter your search"
				onChange={handleChange}
				aria-label="Enter your search"
			/>
			<ul>
				{characters.map((character) => (
					<li key={character}>{character}</li>
				))}
			</ul>
			<Footer />
		</section>
	);
}
