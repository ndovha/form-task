import React from 'react';

import { Wrapper, WrapperForm, Title, Form } from './style.components';
import map from '../../assets/images/map.png'


export default function FormComponent() {
    
    return (
      <Wrapper>
        <WrapperForm>
          <Title>Reach out to us!</Title>
          <Form>
            <input placeholder='Your name*'></input>
            <input placeholder='Your e-mail*'></input>
            <input placeholder='Your message*'></input>
            <button>Send message</button>
          </Form>
        </WrapperForm>
        <div>
            <img src={map}></img>
        </div>
      </Wrapper>
    );
} 