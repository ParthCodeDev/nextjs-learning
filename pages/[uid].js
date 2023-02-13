function UserId(props) {
    const { userId } = props;

    return <h1>{userId}</h1>;
}

export async function getServerSideProps(context) {
    const { params } = context;

    return {
        props: {
            userId: "UserId-" + params.uid,
        },
    };
}

export default UserId;
