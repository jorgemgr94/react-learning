import { lazy, Suspense } from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

import LoadingOrError from './components/LoadingOrError';
import ErrorBoundary from './components/ErrorBoundary';
import ErrorPage from './components/ErrorPage';
import Template from './components/Template';

import { LoadingProvider } from './contexts/LoadingContext';

const Debounce = lazy(async () => import('./pages/Debounce'));
const UploadFile = lazy(async () => import('./pages/UploadFile'));
const Memoization = lazy(async () => import('./pages/Memoization'));
const FormValidation = lazy(async () => import('./pages/FormValidation'));

export default function App() {
	return (
		<BrowserRouter>
			<ErrorBoundary fallback={<ErrorPage />}>
				<Suspense fallback={<LoadingOrError />}>
					<LoadingProvider>
						<Template>
							<Routes>
								<Route path="/debounce" element={<Debounce />} />
								<Route path="/upload-file" element={<UploadFile />} />
								<Route path="/memoization" element={<Memoization />} />
								<Route path="/form-validation" element={<FormValidation />} />

								{/* Navigate to /debounce as default route */}
								<Route
									path="*"
									element={<Navigate to="/debounce" replace={true} />}
								/>
							</Routes>
						</Template>
					</LoadingProvider>
				</Suspense>
			</ErrorBoundary>
		</BrowserRouter>
	);
}
