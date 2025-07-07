import Link from "next/link";

export default function layout({ children }) {
    return (
        <>
            <div>
                <Link href="/about">About</Link>
                <Link href="/about/vision">Vision</Link>
                <Link href="/about/mission">Mission</Link>

            </div>

            {children}

        </>
    )
}
