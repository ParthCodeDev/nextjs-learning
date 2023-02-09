import path from "path";
import fs from "fs/promises";
import { Fragment } from "react";

function ProductDetail(props) {
    const { loadedProduct } = props;
    console.log('loadedProduct', loadedProduct);

    return (
        <Fragment>
            <h1>{loadedProduct.title}</h1>
            <p>{loadedProduct.description}</p>
        </Fragment>
    );
}

export async function getStaticProps(context) {
    const { params } = context;

    console.log(params.pid);

    const filePath = path.join(process.cwd(), "data", "dummy-backend.json");
    const fileData = await fs.readFile(filePath);
    const data = JSON.parse(fileData);

    const productList = data.products.find((item) => item.id === params.pid);

    return {
        props: {
            loadedProduct: productList,
        },
    };
}

export async function getStaticPaths() {
    const pathsIds = ['p1', 'p2', 'p3']
    return {
        paths: 
            pathsIds.map(item =>(
                { 'params': { pid: item } }
            ))
            // { params: { pid: "p2" } },
            // { params: { pid: "p3" } },
        ,
        fallback: false, // Values ares false,true & blocking
    };
}

export default ProductDetail;
