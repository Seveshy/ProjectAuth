import styled from 'styled-components';

export const Container = styled.div`

      display: grid;
      background-color:var(--gray-light-color);
      grid-template-rows: 70px auto ;
      grid-template-areas:
      'Navbar'
      'Content';
      
      height:100vh;
`;
export const Content = styled.div`
     
     grid-area:Content;
     width:70%;
     justify-self: center;
`;
export const Register = styled.div`
     background-color:white;
     padding:20px;
     margin:15px;
`;
export const ContentTitle = styled.div`
     
     
`;
export const ContentBody = styled.div`
     
     
`;
export const EditIcon = styled.div`
     
     
`;


export const Title = styled.div`
     
     
`;
export const Header = styled.div`
     
     
`;
export const CompanyIcon = styled.div`
     
     
`;