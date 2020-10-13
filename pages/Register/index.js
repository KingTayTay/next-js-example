import 'typeface-montserrat';
import 'typeface-raleway';
import styled from '@emotion/styled';
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

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

const RegisterFormPrimaryButton = styled(motion.button)`
  padding: 1rem;
  margin-top: 2rem;
  border: none;
  border-radius: 5px;
  outline: none;
  background-color: #6b46c1;
  color: #ffffff;
  font-size: 18px;
`;

const RegisterFormSecondaryButton = styled(motion.button)`
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #6b46c1;
`;

const AsideImage = styled(motion.img)`
  height: 100%;
  width: 400px;
`;

const AsideList = styled.ol`
  margin-top: auto;
  padding-left: 0;
  margin-bottom: 1rem;
  text-align: center;
  list-style: none;
`;

const AsideListItem = styled(motion.li)`
  display: inline-block;
  width: 1rem;
  height: 1rem;
  margin: 0 1rem;
  text-indent: -999px;
  cursor: pointer;
  background-color: ${props => (props.active ? '#ffffff' : 'rgba(0, 0, 0, 0)')};
  border: 1px solid #fff;
  border-radius: 10px;
`;

const variants = {
  enter: () => {
    return {
      type: 'spring',
      opacity: 0,
      scale: 0,
      duration: 0.4
    };
  },
  center: {
    type: 'spring',
    opacity: 1,
    scale: 1,
    duration: 0.4
  },
  exit: () => {
    return {
      opacity: 0,
      x: '0%',
      duration: 0.6
    };
  }
};

const imageSrcs = [
  '/undraw_wizard.svg',
  '/undraw_mobile.svg',
  '/undraw_happy.svg'
];

export const Register = () => {
  const [page, setPage] = useState(0);

  return (
    <PageContainer>
      <MainContainer>
        <FormContainer>
          <RegisterFormHeader>Create an account</RegisterFormHeader>
          <RegisterFormInput placeholder="Enter your email" />
          <RegisterFormInput placeholder="Enter your password" />
          <RegisterFormPrimaryButton
            type="submit"
            onClick={() => {}}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.95 }}
          >
            Sign Up
          </RegisterFormPrimaryButton>
          <RegisterFormSecondaryButton
            type="button"
            onClick={() => setPage((page + 1) % 3)}
            whileHover={{
              scale: 1.05,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.95 }}
          >
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
        <AnimatePresence initial={false} exitBeforeEnter>
          <AsideImage
            key={page}
            src={imageSrcs[page]}
            variants={variants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              opacity: { duration: 0.6 }
            }}
          />
        </AnimatePresence>
        <AsideList>
          <AsideListItem
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.9 }}
            active={page === 0}
            onClick={() => setPage(0)}
          />
          <AsideListItem
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.9 }}
            active={page === 1}
            onClick={() => setPage(1)}
          />
          <AsideListItem
            whileHover={{
              scale: 1.2,
              transition: { duration: 0.4 }
            }}
            whileTap={{ scale: 0.9 }}
            active={page === 2}
            onClick={() => setPage(2)}
          />
        </AsideList>
      </AsideContainer>
    </PageContainer>
  );
};

export default Register;
