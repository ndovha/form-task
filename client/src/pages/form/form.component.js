import React from 'react';
import Input from '../../components/input';
import Textarea from '../../components/textarea/insex';
import Button from '../../components/button';
import { REQUIRED, IS_EMAIL, validate } from './form-validation';
import { Wrapper, WrapperForm,CloudForm,Smile2,CloudWrapper1,RedCartoon, Title, Form, WrapperMap, ImageMap, Div, Smile1 } from './style.components';
import axios from 'axios';
import smile1 from '../../assets/images/smile1.svg';
import cloud1 from '../../assets/images/cloud.svg';
import red_cartoon3 from '../../assets/images/red_cartoon3.svg';
import smile2 from '../../assets/images/goodie1.svg';

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
    console.log(emailErrorKey)
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
        <CloudWrapper1>
          <img src={cloud1}></img>
        </CloudWrapper1>
        <Smile1>
          <img src={smile1}></img>
        </Smile1>
        <WrapperForm>
          <RedCartoon>
            <img src={red_cartoon3} />
          </RedCartoon>
          <Smile2>
            <img src={smile2} />
          </Smile2>
          <Title>Reach out to us!</Title>
          <Div>
            <Input
              type='text'
              placeholder='Your name*'
              value={name.value}
              onChange={this.handleNameChange}
              error={name.error}
            />
            <Input
              type='text'
              placeholder='Your e-mail*'
              value={email.value}
              onChange={this.handleEmailChange}
              error={email.error}
            />
            <Textarea
              type='text'
              placeholder='Your message*'
              value={message.value}
              onChange={this.handleMessageChange}
              error={message.error}
              rows={'4'}
              cols={'10'}
            />
            <Button
              text='Send message'
              type='submit'
              onClick={this.handleSend}
            />
          </Div>
          <CloudForm>
            <img src={cloud1}></img>
          </CloudForm>
        </WrapperForm>
      </Wrapper>
    );
} }