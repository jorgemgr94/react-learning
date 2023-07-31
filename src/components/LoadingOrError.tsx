import { Alert, Skeleton, CircularProgress } from '@mui/material';

interface Properties {
	error?: Error;
}

export default function LoadingOrError({ error }: Properties) {
	return (
		<div>
			<CircularProgress />
			<Skeleton variant="circular" width={40} height={40} />
			<Skeleton variant="rectangular" width={210} height={60} />
			<Skeleton variant="rounded" width={210} height={60} />
			{error && <Alert severity="error">{error.message}</Alert>}
		</div>
	);
}
