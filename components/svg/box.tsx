export default function Box({ className }: { className?: string }) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className={className}
            >
                <path
                    fill="currentColor"
                    d="M5 8v11h14V8h-3v8l-4-2l-4 2V8zm0 13q-.825 0-1.412-.587T3 19V6.525q0-.35.113-.675t.337-.6L4.7 3.725q.275-.35.687-.538T6.25 3h11.5q.45 0 .863.188t.687.537l1.25 1.525q.225.275.338.6t.112.675V19q0 .825-.587 1.413T19 21zm.4-15h13.2l-.85-1H6.25zM10 8v4.75l2-1l2 1V8zM5 8h14z"
                ></path>
            </svg>
        </>
    );
}
