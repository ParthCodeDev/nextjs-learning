import Link from "next/link";

function ProductList() {
    const listProject = [
        { id: 1, name: "parth" },
        { id: 2, name: "smith" },
    ];
    return (
        <div>
            <h1>Product List page</h1>
            {listProject.map((item, index) => (
                <li key={index}>
                    <Link href={`/product/${item.id}`} key={index}>
                        {item.name}
                    </Link>
                </li>
            ))}
        </div>
    );
}

export default ProductList;
