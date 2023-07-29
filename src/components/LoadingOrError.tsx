interface Properties {
	error?: Error;
}

export default function LoadingOrError({ error }: Properties) {
	return (
		<div>
			<h1>
				{error ? error.message : "Loading..."}
			</h1>
		</div>
	);
}