import Link from "next/link";

export default function ArticlesPage() {
    return (
        <div>
            <h1>Articles Page</h1>

            <Link href='/posts'>
                <button>Take me to posts page</button>
            </Link>
        </div>
    )
}
