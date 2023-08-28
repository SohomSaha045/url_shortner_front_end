
import { Stack } from 'react-bootstrap';
import './App.css';
import NavScrollExample from './components/nav_bar';
import { Input,InputGroup,InputLeftElement,InputRightElement,Button } from '@chakra-ui/react'
function App() {
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
      children='#'
      margin='3px'

      />
      <Input type='tel' placeholder='Enter the Link Here' border='2px' borderColor='#353C4A' borderRadius='25px' size='lg'/>
      <InputRightElement alignItems='center' margin='4px'>
      <Button color='#144EE3' padding='2px' fontSize='15px' borderRadius='25px' alignItems='center'>
      GO
      </Button>
      </InputRightElement>
      </InputGroup>
      </div>
      </Stack>
      </div>
      
    </div>
  );
}

export default App;
