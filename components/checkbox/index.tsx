export default function Checkbox({
    className,
    ...rest
}: { className?: string } & React.InputHTMLAttributes<HTMLInputElement>) {
    return (
        <>
            <label
                className="relative inline-flex w-fit cursor-pointer items-center rounded-full p-1"
                htmlFor="ripple-on"
            >
                <input
                    id="ripple-on"
                    type="checkbox"
                    className={`before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border-2 border-primary ring-primary/50 transition-all before:absolute before:left-2/4 before:top-2/4 before:block before:h-12 before:w-12 before:-translate-x-2/4 before:-translate-y-2/4 before:rounded-full before:bg-primary/25 before:opacity-0 before:transition-opacity checked:bg-primary/70 checked:before:bg-primary/50 hover:ring-2 hover:before:opacity-10 ${className}`}
                    {...rest}
                />
                <div className="pointer-events-none absolute left-2/4 top-2/4 -translate-x-2/4 -translate-y-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                    >
                        <path
                            fillRule="evenodd"
                            d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                            clipRule="evenodd"
                        ></path>
                    </svg>
                </div>
            </label>
        </>
    );
}
