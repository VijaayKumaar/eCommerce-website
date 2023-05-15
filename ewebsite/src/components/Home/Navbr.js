import { Box ,Typography ,styled } from '@mui/material'

import { navData1 } from '../constants/Data'



const Container = styled(Box)`
    padding: 12px 8px;
    text-align: center
`

const Text = styled(Typography)`
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
`;

const Componet  = styled(Box)(({ theme }) => ({
        display: 'flex',
        margin: '55px 135px 0 135px',
        justifyContent: 'space-between',
        overflow: 'overlay',
         [theme.breakpoints.down('lg')]: {
             margin: 0
         }
     }))

function Navbr()  {
    return (
        <Componet>
            {
                navData1.map(temp => (
                    <Container>
                        <img src={temp.url}  />
                        <Text>{temp.text}</Text>
                    </Container>
                ))
            }
        </Componet>
    )
}







export default Navbr;