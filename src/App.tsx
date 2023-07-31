import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import LoadingOrError from './components/LoadingOrError';
const Debounce = lazy(async () => import('./pages/Debounce'));
const UploadFile = lazy(async () => import('./pages/UploadFile'));
const Callback = lazy(async () => import('./pages/Callback'));

export default function App() {
	return (
		<BrowserRouter>
			<Suspense fallback={<LoadingOrError />}>
				<Routes>
					<Route path="/debounce" element={<Debounce />} />
					<Route path="/upload-file" element={<UploadFile />} />
					<Route path="/callback" element={<Callback />} />

					{/* Navigate to /debounce as default route */}
					<Route
						path="*"
						element={<Navigate to="/debounce" replace={true} />}
					/>
				</Routes>
			</Suspense>
		</BrowserRouter>
	);
}
