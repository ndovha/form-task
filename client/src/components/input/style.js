import styled from 'styled-components';

export const WrapperInput =styled.div`
    margin-bottom: 8px;`

export const InputFild = styled.input`
    position: relative;
    width: 100%;
    font-size: 18px;
    line-height: 32px;
    color: #2D2D2D;
    border: 1px solid #DCDCDC;
    border-radius: 10px;
    padding: 0 46px; 
    height: 93px;
    font-weight: normal;
    &::placeholder {
        color: #2D2D2D;
    }
`

export const Error = styled.div`
    position: relative;
    left: 0;
    font-size: 13px;
    color: #F47272;
`