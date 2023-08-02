import { Alert, Button } from '@mui/material';
import useSubmit from '@src/hooks/useSubmit';

const submitButton = async () => {
	const rnd = Math.random() * 10;
	const statusCode = rnd <= 5 ? 404 : 200;

	return await fetch(`https://httpstat.us/${statusCode}`);
};

export default function CarsSuspense() {
	const { handleSubmit, loading, error } = useSubmit(submitButton);

	return (
		<>
			<Button
				onClick={handleSubmit}
				disabled={loading}
				variant="contained"
				sx={{ marginBottom: '1em' }}
			>
				{loading ? 'Loading...' : 'Click me'}
			</Button>
			{error && <Alert severity="error">{error.message}</Alert>}
		</>
	);
}
