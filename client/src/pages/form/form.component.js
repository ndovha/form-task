import React from 'react';
import Input from '../../components/input';
import Button from '../../components/button';
import { REQUIRED, IS_EMAIL, validate } from './form-validation';
import { Wrapper, WrapperForm, Title, Form, WrapperMap, ImageMap, Div } from './style.components';
import axios from 'axios';

export default class FormComponent extends React.Component {
    state = {
      name: {
        value: '',
        error: '',
        validationList: [REQUIRED]
      },
      email: {
        value: '',
        error: '',
        validationList: [REQUIRED, IS_EMAIL]
      },
      message: {
        value: '',
        error: '',
        validationList: [REQUIRED]
      }
    }

 
  handleNameChange = evt => {
    this.setState((state) => ({ name: {...state.name,value: evt.target.value} }));
  };
  handleEmailChange = evt => {
    this.setState((state) => ({ email: {...state.name,value: evt.target.value} }));
  };
  handleMessageChange = evt => {
    this.setState((state) => ({ message: {...state.name,value: evt.target.value} }));
  };



  handleSend = async() => { 
    const { name, email, message } = this.state;

    const nameErrorKey = validate(name.value, name.validationList);    
    const emailErrorKey = validate(email.value, email.validationList);
    const messageErrorKey = validate(message.value, message.validationList);
       if (nameErrorKey || emailErrorKey || messageErrorKey) {      
         return this.setState((state) => ({
           name: {
             ...state.name,
             error: nameErrorKey,
           },
           email: {
             ...state.email,
             error: emailErrorKey,
           },
           message: {
             ...state.message,
             error: messageErrorKey,
           },
         }));      
       }
      try{
        await axios.post('http://localhost:5000/api/feedback', {
        name: name.value,
        email: email.value,
        message: message.value,
      });
        window.location = '/';
      } catch(err) {
        console.error(err.message)
      }   
  }



  render() {
    const { name, email, message } = this.state;
      
    return (
      <Wrapper>
        <WrapperForm>
          <Title>Reach out to us!</Title>
          <Div>
            <Input
              // className={name.error ? 'std-field__input--error' : 'std-field__input'}
              type='text'
              placeholder='Your name*'
              value={name.value}
              onChange={this.handleNameChange}
              error={name.error}
            />
            <Input
              // className={password.error ? 'std-field__input--error' : 'std-field__input'}
              type='text'
              placeholder='Your e-mail*'
              value={email.value}
              onChange={this.handleEmailChange}
              error={email.error}
            />
            <Input
              type='text'
              placeholder='Your message*'
              value={message.value}
              onChange={this.handleMessageChange}
              error={message.error}
            />
            <Button
              text='Send message'
              type='submit'
              onClick={this.handleSend}
            />
          </Div>
        </WrapperForm>
        <WrapperMap>
          <ImageMap></ImageMap>
        </WrapperMap>
      </Wrapper>
    );
} }