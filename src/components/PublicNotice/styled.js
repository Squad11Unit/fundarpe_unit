import styled from "styled-components";

export const Container = styled.div`
    width: 100wv;
    margin: 0;
    padding: 100px;
    font-family: 'Open Sans';
`;

export const SectionOne = styled.div`
    display: flex;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
    justify-content:space-between;
`;

export const Title = styled.div`
    display: flex;
    flex-direction: column;
    > p {
        font-weight: 600;
        line-height: 1.3;
        width: 240px;
        word-break: break-word;
        word-spacing: 4px;
        font-style: italic;
    }
`;

export const Image = styled.div`
    width: 45%;
    > img{
        width: 100%;
        height: 300px;
    }

`;

export const FileIcon = styled.div`
    color: #A0A0A0;
    display: flex;
    gap: 0.4rem;
    line-height: 1.3;
`;

export const LampIcon = styled.div`
    color: #FFA500;
    display: flex;
    gap: 0.4rem;
`;

export const SectionTwo = styled.div`
    display: flex;   
    font-style: italic;
`;
