import { VFC } from "react";
import { FallbackProps } from "react-error-boundary";

const ErrorFallback: VFC<FallbackProps> = ({ error, resetErrorBoundary }) => {
	return (
		<div role="alert">
			<p>Something went wrong:</p>
			<pre>{error.message}</pre>
			<button onClick={resetErrorBoundary}>Try again</button>
		</div>
	);
};

export default ErrorFallback;
