import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
    const postId = params.postId;

    const LoadingJSX = (
        <div>
            <h1>loading...</h1>
        </div>
    )

    return (
        <div style={{ padding: "20px" }}>
            <h1>Post details page</h1>

            <Suspense fallback={LoadingJSX}>
                <PostDetails postId={postId} />
            </Suspense>


        </div>
    )
}
