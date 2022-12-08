import React from 'react';
import {Box,Container,Row,Column,FooterLink,Heading,} from '../styled/FooterStyles';
  
const Footer = () => {
  return (
    <Box>
      <h1 style={{ color: '#217074', textAlign: 'center', marginBottom: '20px',fontSize: '23px'}}>
        Lean On: appointment booking for mental health consultation
      </h1>
      <Container>
        <Row>
          <Column>
            <Heading>Services</Heading>
            <FooterLink href='#'>Consultations</FooterLink>
            <FooterLink href='#'>Bookings</FooterLink>
          </Column>
          <Column>
            <Heading>Contact Me</Heading>
            <FooterLink href='#'>macayanwren@gmail.com</FooterLink>
            <FooterLink href='#'>+63 906 006 3919</FooterLink>
          </Column>
          <Column>
            <Heading>Resources From</Heading>
            <FooterLink href='https://www.pexels.com/'>pixels.com</FooterLink>
            <FooterLink href='https://www.canva.com/'>canva.com</FooterLink>
          </Column>
          <Column>
          <Heading>Social Media</Heading>
          <FooterLink href='https://github.com/hnddrx'>
              <span style={{ marginLeft: '10px' }}>
                Github
              </span>
          </FooterLink>
            <FooterLink href='https://www.linkedin.com/in/wrenmcyn/'>
                <span style={{ marginLeft: '10px' }}>
                  Linked In
                </span>
            </FooterLink>
          </Column>
        </Row>
      </Container>
    </Box>
  );
};
export default Footer;