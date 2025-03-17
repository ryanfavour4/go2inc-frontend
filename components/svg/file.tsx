export default function File({ className }: { className?: string }) {
    return (
        <>
            <svg
                xmlns="http://www.w3.org/2000/svg"
                width="1em"
                height="1em"
                viewBox="0 0 24 24"
                className={className}
            >
                <g fill="none" stroke="currentColor">
                    <path d="M5.5 5.9c0-.84 0-1.26.163-1.581a1.5 1.5 0 0 1 .656-.656c.32-.163.74-.163 1.581-.163h4.606c.367 0 .55 0 .723.041q.232.056.433.18c.152.093.281.223.54.482l3.595 3.594c.26.26.39.39.482.54q.124.204.18.434c.041.173.041.356.041.723V18.1c0 .84 0 1.26-.163 1.581a1.5 1.5 0 0 1-.656.656c-.32.163-.74.163-1.581.163H7.9c-.84 0-1.26 0-1.581-.163a1.5 1.5 0 0 1-.656-.656c-.163-.32-.163-.74-.163-1.581z"></path>
                    <path d="M12.5 3.5v3.6c0 .84 0 1.26.164 1.581a1.5 1.5 0 0 0 .655.656c.32.163.74.163 1.581.163h3.6"></path>
                </g>
            </svg>
        </>
    );
}
