export default function HorizontalLine({ className }: { className?: string }) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 20 20"
                className={className}
            >
                <path
                    fill="currentColor"
                    fillRule="evenodd"
                    d="M.5 10a.5.5 0 0 1 .5-.5h18a.5.5 0 0 1 0 1H1a.5.5 0 0 1-.5-.5"
                    clipRule="evenodd"
                ></path>
            </svg>
        </>
    );
}
