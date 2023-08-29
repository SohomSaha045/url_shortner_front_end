
import { Stack } from 'react-bootstrap';
import {useState} from 'react';
import axios from 'axios';
import './App.css';
import NavScrollExample from './components/nav_bar';
import { Input,InputGroup,InputLeftElement,InputRightElement,Button } from '@chakra-ui/react';
import {CopyToClipboard} from 'react-copy-to-clipboard';
import { FaPaperclip } from 'react-icons/fa';
import { BsLink45Deg } from "react-icons/bs";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
// function copy(){
//   console.log("tap");
//   alert(
//     "Copied to CLipboard"
//   )
// }

function App() {
  const[url,setUrl]=useState('');
  const[isLoading,setLoading]=useState(false);
  const[vTable,set]=useState('hidden');
  const[shortUrl,setShortUrl]=useState('');
  const head="https://url-shortner-self.vercel.app/";
  const click=()=>{
    alert(url); 
    setLoading(true);
  }
  const postName = async(e) => {
    // e.preventDefault()
    setLoading(true);
    try {
       console.log(url);
       var endPoint= await axios.post('https://url-shortner-self.vercel.app/url', {
            "url": url
        });
        console.log(endPoint.data.id);
        setShortUrl(endPoint.data.id);
        set('');
  
    } catch (error) {
        console.log(error);
    }
    setLoading(false);
  }
  return (
    <div className="App">
      <div className='nav_style'>
      <NavScrollExample ></NavScrollExample>
      </div>
      <div className='header'>
       <text className='h_text'>Shorten Your Loooong Links :)</text>
      </div>
      <div>
      <text className="subheading">Linkly is an efficient and easy-to-use URL shortening service that streamlines your<br></br> online experience.</text>
      </div>
      <div>
      <Stack>
      <div className='input_box'>
      <InputGroup className='input_item' border='0px'>
      <InputLeftElement
      pointerEvents='none'
      color='#353C4A'
      fontSize='1.2em'
      border='0px'
      // children='#'
      margin='3px'
      >
      <BsLink45Deg/>
      </InputLeftElement>

      
      <Input type='tel' placeholder='Enter the Link Here' border='2px' borderColor='#353C4A' borderRadius='25px' size='lg' value={url}
      onChange={event =>{
        setUrl(event.target.value);
      }}/>
      <InputRightElement alignItems='center' margin='4px'>
      <Button color='#144EE3' padding='2px' fontSize='15px' borderRadius='25px' alignItems='center' onClick={postName} isLoading={isLoading}>
      GO
      </Button>
      </InputRightElement>
      </InputGroup>
      </div>
      <div className='table_div' >
      <TableContainer visibility={vTable}>
     <Table variant='simple'>
    <TableCaption>URL to shortURL conversion </TableCaption>
    <Thead>
      <Tr>
        <Th>Short URL</Th>
        <Th isNumeric>STATUS</Th>
        <Th isNumeric>COPY</Th>
      </Tr>
    </Thead>
    <Tbody>
      <Tr>
        <Td maxWidth='350px' value={head+shortUrl}><a  target="__blank" href={head+shortUrl}>{head+shortUrl}</a></Td>
    
        <Td isNumeric><div className='active'>Active</div></Td>
        <Td isNumeric><CopyToClipboard text={head+shortUrl} onCopy={()=>{
          toast('Copied to Clipboard')
        }}><div>
        <button><FaPaperclip color='#144EE3'/></button>
        <ToastContainer position='bottom-center' type='success' theme='dark' />
        </div>
        </CopyToClipboard></Td>
      </Tr>
    </Tbody>
      </Table>
      </TableContainer>
      </div>
      </Stack>
      </div>
      
    </div>
  );
}

export default App;
