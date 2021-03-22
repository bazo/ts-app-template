import "./index.css";

import App from "app/App";
import ErrorFallback from "components/ErrorFallback";
import { StrictMode } from "react";
import { render } from "react-dom";
import { ErrorBoundary } from "react-error-boundary";

render(
	<StrictMode>
		<ErrorBoundary FallbackComponent={ErrorFallback}>
			<App />
		</ErrorBoundary>
	</StrictMode>,
	document.getElementById("root")
);
