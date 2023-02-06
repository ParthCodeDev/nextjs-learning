import Link from 'next/link';

function HomePage() {
    return(
        <div>
            <h1>Here is our mainPages</h1>
            <li>
                <Link href={'/blog/3'} >Blog</Link>
            </li>
            <li>
                <Link href={'/product'} >Product</Link>
            </li>
        </div>
    )
}

export default HomePage;
