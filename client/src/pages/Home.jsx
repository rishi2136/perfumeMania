import  {useOutletContext} from "react-router-dom";
import Card from "../components/Card/Card";
import Banner from "../components/Banner/Banner"


const Home = () => {
const products = useOutletContext()
  return (
    <>
    <Banner />
     <div className="card-container">
      {products !== null && products.map((product, idx)=>  <Card product={product} key={idx}/>)}
    </div>
    </>
   
  )
}

export default Home;
