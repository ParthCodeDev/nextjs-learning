import {useRouter} from "next/router";

function CartName() {
    const route = useRouter();
    console.log(route);
    console.log({'pathname': route.pathname, 'queryparam': route.query.name})

    return(<div>
        <h1>Cart Name Page</h1>
    </div>)
}

export default CartName;