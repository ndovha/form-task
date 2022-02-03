import React, { useState } from 'react';
import axios from 'axios';
import Input from '../../components/input';
import Button from '../../components/button';
import { Wrapper, WrapperForm, Title, Form, WrapperMap, ImageMap, Div } from './style.components';

export default function FormComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
    const handleSend = async() => { 
      try{
      const response = await axios.post('http://localhost:5000/api/feedback', {
        name: name,
        email: email,
        message: message,
      });
        window.location = '/';
      } catch(err) {
        console.error(err.message)
      }   
  }
    
    return (
      <Wrapper>
        <WrapperForm>
          <Title>Reach out to us!</Title>
          <Div>
            <Input 
            type="text"
            placeholder='Your name*'
            value={name}
            onChange={event => setName(event)}
            />
            <Input
            type="text" 
            placeholder='Your e-mail*'
            value={email}
            onChange={event => setEmail(event)}
            />
            <Input 
            type="text"
            placeholder='Your message*'
            value={message}
            onChange={event => setMessage(event)}
            />
            <Button
            text='Send message' 
            type='submit'
            onClick={handleSend}/>
          </Div>
        </WrapperForm>
        <WrapperMap>
            <ImageMap>
                
            </ImageMap>            
        </WrapperMap>
      </Wrapper>
    );
} 