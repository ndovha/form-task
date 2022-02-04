import styled from 'styled-components';
import map from '../../assets/images/map2.png';

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    padding: 180px 145px;
    background: transparent url(${map}) right center/contain no-repeat;
`

export const WrapperForm = styled.div`
    position: relative;
    width: 100%;
    max-width: 570px;
`

export const Div = styled.div`
   position: relative;
   z-index: 1;
`

export const Title = styled.h2`
    font-size: 40px;
    font-weight: 400;
    line-height: 1.3;
    color: #3E3E3E;
    margin-bottom: 30px;
`

export const Smile1 = styled.div`
    position: absolute;
    top: 40px;
    left: 46px;

`

export const CloudForm = styled.div`
    position: absolute;
    left: 35%;
    bottom: -34px;
    z-index: -1;
`
export const CloudWrapper1 = styled.div`
    position: absolute;
    left: -95px;
    top: 50%;
    transform: translate(0, -50%);
`

export const RedCartoon = styled.div`
    right: -64%;
    position: absolute;
    bottom: -100px;
`

export const Smile2 = styled.div`
    right: -34%;
    position: absolute;
    bottom: 115px;
    z-index: 2;
`