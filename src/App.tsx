import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import LoadingOrError from './components/LoadingOrError';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';

const Debounce = lazy(async () => import('./pages/Debounce'));
const UploadFile = lazy(async () => import('./pages/UploadFile'));
const Memoization = lazy(async () => import('./pages/Memoization'));

export default function App() {
	return (
		<BrowserRouter>
			<ErrorBoundary fallback={<ErrorPage />}>
				<Suspense fallback={<LoadingOrError />}>
					<Routes>
						<Route path="/debounce" element={<Debounce />} />
						<Route path="/upload-file" element={<UploadFile />} />
						<Route path="/memoization" element={<Memoization />} />

						{/* Navigate to /debounce as default route */}
						<Route
							path="*"
							element={<Navigate to="/debounce" replace={true} />}
						/>
					</Routes>
				</Suspense>
			</ErrorBoundary>
		</BrowserRouter>
	);
}
