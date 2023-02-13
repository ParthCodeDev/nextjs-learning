function UserProfile(props) {
    return <h1>{props.username}</h1>;
}

export default UserProfile;

export async function getServerSideProps(context) {
    const {parms,req,res} = context;
    console.log('context', context, req, res);
    return {
        props: {
            username: "Parth",
        },
    };
}
