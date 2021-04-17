import styled from 'styled-components/macro';

export const Container = styled.div`
    display: flex;
    padding: 70px 0;
    margin: auto;
    max-width: 1000px;
    flex-direction: column;

    @media (max-width: 1000px) {
        padding: 70px 30px;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    text-align: left;
`;

export const Row = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
    grid-gap: 15px;

    @media (max-width: 1000px) {
        grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
`;

export const Link = styled.a`
    color: #757575;
    margin-bottom: 20px;
    font-size: 13px;
    text-decoration: none;
`;

export const Title = styled.p`
    font-size: 16px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Text = styled.p`
    font-size: 13px;
    color: #757575;
    margin-bottom: 40px;
`;

export const Break = styled.div`
    flex-basis: 100%;
    height: 0;
`;

export const Lang = styled.div`
    & div {
        position: relative;
        display: inline-block;
    }
    &  select{
        background-color:  #000000;
        color: #999;
        appearance:none;
        padding: 10px 40px;
        line-height: 1.7;
        font-size: 16px;
        border: 1px solid #999;
        text-align: right; 
    }
    & select.lang-header{
        color: #fff;
        padding: 7px 25px;
        border: 1px solid #fff;
        line-height: 1.3;
        font-size: .875rem;
    }
    & div:after{
        content: '';
        background-image: url("images/icons/selectlang.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: cover;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        right: 10px;
        width: 25px;
        height: 10px;
        display: inline-block;
    }
    & div:before{
        content: '';
        background-image: url("images/icons/langIcon.png");
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        left: 5px;
        width: 25px;
        height: 25px;
        display: inline-block;
    }

    & div.lang-header{
        margin-right: 30px 
    }

    & div.lang-header:after{
        right: 7px;
        width: 18px;
        height: 18px;
    }

    & div.lang-header:before{
        width: 20px;
        height: 20px;
    }
`;