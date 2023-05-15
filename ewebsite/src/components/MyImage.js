
import { styled } from '@mui/material';

const Image = styled('img')(({ theme }) => ({
  width: '50%',

 
}));



const MyImage = ({ imgs=[{url:""}]  }) => {

  console.log(imgs);

return (
<div className="images">
  {
    imgs.map((cumElm,index)=>{
     return(
      <figure>
        <Image src={cumElm.url} alt={cumElm.filename}/>
      </figure>
     )
    })
  }
</div>
)
};

export default MyImage;

  