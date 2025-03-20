export default function File({ className }: { className?: string }) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 16 16"
                className={className}
            >
                <path
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    d="M7.563 1.545H2.5v10.91h9V5.364M7.563 1.545L11.5 5.364M7.563 1.545v3.819H11.5m-7 9.136h9v-7M4 7.5h6M4 5h2m-2 5h6"
                    strokeWidth={1}
                ></path>
            </svg>
        </>
    );
}
