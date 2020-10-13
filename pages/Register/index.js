import 'typeface-montserrat';
import 'typeface-raleway';
import styled from '@emotion/styled';

const PageContainer = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr;
  width: 100vw;
  height: 100vh;
`;

const MainContainer = styled.main`
  display: flex;
  flex-direction: column;
`;

const FormContainer = styled.section`
  display: flex;
  flex-direction: column;
  padding: 6rem;
  color: #2d3748;
`;

const RegisterFormHeader = styled.h1`
  font-family: 'Montserrat';
  font-weight: 600;
  font-size: 36px;
`;

const RegisterFormInput = styled.input`
  padding: 1rem;
  margin-top: 1rem;
  border-style: solid;
  border-color: #c9c9d2;
  border-radius: 8px;
  font-size: 18px;

  ::placeholder {
    /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: #c9c9d2;
    opacity: 1; /* Firefox */
  }
`;

const RegisterFormPrimaryButton = styled.button`
  padding: 1rem;
  margin-top: 2rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #6b46c1;
  color: #ffffff;
  font-size: 18px;
`;

const RegisterFormSecondaryButton = styled.button`
  padding: 1rem;
  margin-top: 1rem;
  border-style: solid;
  border-color: #c9c9d2;
  border-radius: 8px;
  outline: none;
  background-color: #ffffff;
  color: #6b46c1;
  font-size: 18px;
`;

const RegisterFormFooterText = styled.p`
  margin-top: 2rem;
  font-family: 'Raleway';
  font-size: 16px;
  color: #718096;
`;

const MainFooterContainer = styled.footer`
  margin-top: auto;
  margin-bottom: 1rem;
  padding-left: 6rem;
`;

const RegisterFormFooterLink = styled.a`
  color: #6b46c1;
`;

const MainFooterText = styled.p`
  font-family: 'Raleway';
  font-size: 16px;
  color: #718096;
`;

const MainFooterLink = styled.a`
  text-decoration: underline;
`;

const AsideContainer = styled.aside`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #6b46c1;
`;

const AsideImage = styled.img`
  height: 400px;
  width: 400px;
`;

export const Register = () => {
  return (
    <PageContainer>
      <MainContainer>
        <FormContainer>
          <RegisterFormHeader>Create an account</RegisterFormHeader>
          <RegisterFormInput placeholder="Enter your email" />
          <RegisterFormInput placeholder="Enter your password" />
          <RegisterFormPrimaryButton type="submit" onClick={() => {}}>
            Sign Up
          </RegisterFormPrimaryButton>
          <RegisterFormSecondaryButton type="button">
            Sign up with Google
          </RegisterFormSecondaryButton>
          <RegisterFormFooterText>
            Already have an account?{' '}
            <RegisterFormFooterLink href="#">Sign In</RegisterFormFooterLink>
          </RegisterFormFooterText>
        </FormContainer>
        <MainFooterContainer>
          <MainFooterText>
            <MainFooterLink href="#">Privacy Policy</MainFooterLink> and{' '}
            <MainFooterLink href="#">Terms of Service</MainFooterLink>
          </MainFooterText>
        </MainFooterContainer>
      </MainContainer>
      <AsideContainer>
        <AsideImage src="/undraw_wizard.svg" alt="UI Wizard" />
      </AsideContainer>
    </PageContainer>
  );
};

export default Register;
