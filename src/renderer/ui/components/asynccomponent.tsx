import DiscordModules from "@modules/discord";

export default function AsyncComponent({_provider, _fallback, ...props}) {
    const [Component, setComponent] = DiscordModules.React.useState(() => (_fallback ?? (() => null)));

    DiscordModules.React.useEffect(() => {
        _provider().then(comp => setComponent(() => comp));
    }, [_provider, _fallback]);
    
    return (
        <Component {...props} />
    );
};

export function from(promise: Promise<any>, fallback?: any, options?: any) {
    const value = {resolved: false, component: null};

    promise.then((component) => {
        Object.assign(value, {component, resolved: true});
    });

    return Object.assign(props => {
        if (value.resolved) return React.createElement(value.component, props);

        return DiscordModules.React.createElement(AsyncComponent, {
            _provider: () => promise,
            _fallback: fallback,
            ...props
        });
    }, options);
};
export const fromPromise = from; // Alias

Object.assign(AsyncComponent, {from});