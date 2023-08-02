import { useState } from 'react';

const useSubmit = (submitFunction: () => Promise<Response>) => {
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState<Error | null>(null);

	const handleSubmit = async () => {
		try {
			setLoading(true);
			setError(null);
			const response = await submitFunction();
			if (!response.ok) throw new Error(response.statusText);
		} catch (error) {
			if (error instanceof Error) setError(error);
		} finally {
			setLoading(false);
		}
	};
	return { handleSubmit, loading, error };
};

export default useSubmit;
