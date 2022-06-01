import {useState} from 'react'
import logo from './logo.svg'
import './App.css'
import {FormLabel, FormControl, Input,FormHelperText} from '@chakra-ui/react'

function App() {
    const [count, setCount] = useState(0)

    return (
        <div className="App">
            myApp
            <FormControl width="md" mt="20" >
                <FormLabel >Name</FormLabel>
                <Input  type='text'/>
                <FormLabel>Email address</FormLabel>
                <Input type='email'/>
                <FormLabel >Salary</FormLabel>
                <Input  type='number'/>
                
            </FormControl>

        </div>
    )
}

export default App
