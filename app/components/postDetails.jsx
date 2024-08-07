export default async function PostDetails({ postId }) {

    await new Promise((resolve) => {
        setTimeout(() => {
            resolve()
        }, 2000)
    })

    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
            next: {
                revalidate: 120, // ISR
            }
        }
    );
    const post = await response.json();

    return (
        <div style={{
            width: "100%",
            backgroundColor: "white",
            borderRadius: "10px",
            padding: "10px",
            marginTop: "20px"

        }}>
            <h1>{post.title}</h1>
            <hr />
            <p>{post.body}</p>
        </div>
    )
}