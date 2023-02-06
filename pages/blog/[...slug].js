import { useRouter } from "next/router";

function BlogPost() {
    const route = useRouter();
    console.log(route);
    console.log(route.query.slug);
    return (
        <div>
            <h1>Blog Post</h1>
        </div>
    );
}

export default BlogPost;
