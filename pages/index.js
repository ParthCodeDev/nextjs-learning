import path from "path";
import fs from "fs/promises";
import Link from "next/link";

function HomePage(props) {
  const {products} = props;
  return (
    <ul>
      {products.map(item => (
        <li key={item.id}>
          <Link href={`/${item.id}`}>
            {item.title}
          </Link>
        </li> 
      ))}
    </ul>
  );
}


export async function getStaticProps(context) {
  console.log('context', context);
  const filePath = path.join(process.cwd(), 'data', 'dummy-backend.json');
  const fileData = await fs.readFile(filePath);
  const data = JSON.parse(fileData);
  return {
    props: {
      products: data.products
    },
    revalidate: 6
    // notFound:false, // based on value 404 page 
    // redirect: {
    //   destination: '/no-data'
    // }
  }
}
export default HomePage;
