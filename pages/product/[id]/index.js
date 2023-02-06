import { useRouter } from "next/router";

function CartList() {
    const route = useRouter();
    console.log(route);
    console.log({'pathname': route.pathname, 'queryparam': route.query})

    return(<div>
        <h1>Product Detail Page for</h1>
    </div>)
}

export default CartList;