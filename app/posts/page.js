import Link from "next/link";
import Todo from "../components/todo";

export default async function PostsPage() {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts',
        {
            next: {
                revalidate: 120, // ISR
            }
        }
    );
    const posts = await response.json();

    const postsJSX = posts.map((post) => {
        return (
            <Link href={`/posts/${post.id}`} style={{ width: "70%" }}>
                <div style={{
                    width: "100%",
                    backgroundColor: "white",
                    borderRadius: "10px",
                    padding: "10px",
                    marginTop: "20px"

                }}>
                    <h1>{post.title}</h1>
                    <p>{post.body}</p>
                </div>
            </Link>
        )
    })

    console.log(posts)

    return (
        <div>
            <h1>Posts Page</h1>

            {/* POSTS */}
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column" }}>
                {postsJSX}
            </div>
            {/* === POSTS ==== */}
        </div>
    )
}