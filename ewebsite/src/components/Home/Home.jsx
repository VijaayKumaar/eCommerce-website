
import Navbr from './Navbr';
import Banner from './banner';
import MidSection from './MidSection';
import Product2 from '../../redux/action/reducers/constants/Product2';


export default function Home() {
  return (
    <div>
       <Navbr/>
       <Banner/>
      <Product2/>
      <Product2/>
      < MidSection/>
      <Product2/>
      < MidSection/>
      
    </div>
  )
}
