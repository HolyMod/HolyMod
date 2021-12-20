import DiscordModules, {promise} from "@modules/discord";
import {fromPromise} from "./asynccomponent";
console.log("abc");

const ErrorBoundary = fromPromise(promise.then(() => {
    console.log("Load..");
    return class ErrorBoundary extends DiscordModules.React.Component {
        state = {hasError: false, error: null}

        static getDerivedStateFromError(error) {
            return {
                hasError: true,
                error: error.message
            };
        }

        componentDidCatch(error, errorInfo) {
            console.error(error, errorInfo);
        }

        render() {
            if (this.state.hasError) {
                return (
                    <p>Component Error: {this.state.error}</p>
                );
            }

            return this.props.children;
        }
    }
}), void 0, {displayName: "Holy(ErrorBoundary)"});

export default ErrorBoundary;