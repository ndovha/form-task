import styled from 'styled-components';
import map from '../../assets/images/map.png';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 90%;
    `

export const WrapperForm = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 100%;
    height: 90%;
    `

export const Div = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    height: 70%;
    justify-content: space-around;
`;

export const Title = styled.h2`
    width: 563px;
    height: 58px;
    font-size: 40px;
    line-height: 130%;
    color: #3E3E3E;
    `
export const WrapperMap = styled.div`
    display: flex;
    justify-content: end;
    width: 100%;
    height: 100%;
`

export const ImageMap = styled.div`
    display: flex;
    /* justify-content: end; */
    background: no-repeat center/80% url(${map});
    background-size: cover;
    /* background: url('../../'); */
    width: 100%;
    /* height: 100%; */
  /* border-radius: 50%; */
  /* border-top-left-radius: 100%;  */
 /* border-bottom-left-radius: 100%; */
  /* overflow: hidden; */
    /* top: -52px; */
        
`
export const Image = styled.img`
/* position: absolute;
border-bottom-left-radius: 90%;
border-top-left-radius: 90%;
height: 90%;
width: 45%; */
/* width:50%;
height: 100%; */
/* transform: translate(20%, 0%); */
/* border-radius: 100% 0 0 100%; */
/* margin-top: -5%; */
/* border-radius: 50%; */
/* border-radius: 100%  0 0 100%; */
/* transform: translate(-50%, -50%); */
/* border-bottom-left-radius: 100%; */
/* border-radius: 50% 0% 0% 50%; */
`