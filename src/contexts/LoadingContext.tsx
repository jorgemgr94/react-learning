import { createContext, useContext, useState } from 'react';

interface ContextProps {
	readonly loading: boolean;
	readonly setLoading: (nextValue: boolean) => void;
}

const LoadingContext = createContext<ContextProps>({
	loading: false,
	setLoading: () => null
});

interface LoadingProviderProps {
	children: React.ReactNode;
}
export function LoadingProvider({ children }: LoadingProviderProps) {
	const [loading, setLoading] = useState(false);
	const value = { loading, setLoading };
	return (
		<LoadingContext.Provider value={value}>{children}</LoadingContext.Provider>
	);
}

export function useLoading() {
	const context = useContext(LoadingContext);
	if (!context) {
		throw new Error('useLoading must be used within LoadingProvider');
	}
	return context;
}
