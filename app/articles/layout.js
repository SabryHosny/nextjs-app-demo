export const metadata = {
    title: "articles page"
}

export default function ({ children }) {
    return (
        <div>
            <h1>Articles</h1>

            <div style={{ marginTop: "50px", padding: "10px", background: "purple", borderRadius: "10px" }}>
                {children}
            </div>
        </div>

    )
}