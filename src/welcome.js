export default function Welcome(props) {
    return <h1>{props.children}</h1>;
}

export function Welcome2(props) {
    return <h2>{props.children}</h2>
}


export function Welcome3(props) {
    return <h3>{props.children}</h3>
}


export function Button(props) {
    return <button className="btn">{props.children}</button>;
}