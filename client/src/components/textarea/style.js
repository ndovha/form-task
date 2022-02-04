import styled from 'styled-components';

export const WrapperTextarea =styled.div`
    margin-bottom: 24px;`

export const TextareaFild = styled.textarea`
  position: relative;
  width: 100%;
  font-size: 18px;
  line-height: 32px;
  color: #2d2d2d;
  border: 1px solid #dcdcdc;
  border-radius: 10px;
  padding: 30px 46px;
  resize: none;
  height: 190px;
  font-weight: normal;
  &::placeholder {
    color: #2d2d2d;
  }
`;

export const Error = styled.div`
    position: absolute;
    left: 0;
    font-size: 13px;
    border-color: red;
    color: red;
`