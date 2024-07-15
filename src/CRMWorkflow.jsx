
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f8f9fa;
  height: 100vh;
  padding: 20px;
  font-family: Arial, sans-serif;
`;

const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.5em;
  font-weight: bold;
`;

const Nav = styled.nav`
  display: flex;
  gap: 20px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #000;
  font-size: 1em;

  &:hover {
    text-decoration: underline;
  }
`;

const Main = styled.main`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1200px;
  margin-top: 40px;
`;

const LeftSection = styled.div`
  flex: 1;
`;

const RightSection = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 3em;
  margin-bottom: 20px;
`;

const Subtitle = styled.p`
  font-size: 1.2em;
  margin-bottom: 40px;
`;

const ButtonGetting = styled.button`
  padding: 10px 10px;
  font-size: 1em;
  color: white;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const ButtonNew = styled.button`
  padding: 10px 10px;
  font-size: 1em;
  color: black;
  background-color:yellow;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const ButtonNewTop = styled.button`
  padding: 10px 10px;
  font-size: 1em;
  color: black;
  background-color:white;
  border: black;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const Button = styled.button`
  padding: 10px 500px;
  font-size: 3em;
  color: white;
  background-color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;

  &:hover {
    background-color: #333;
  }
`;

const Partners = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-width: 800px;
  margin-top: 60px;
  font-size: 0.8em;
  color: #666;
`;

// Main component
const CRMWorkflow = () => {
  return (
    <Container>
      <Header>
        <Logo>Bridge</Logo>
        <Nav>
          <NavLink href="#use-cases">Use cases</NavLink>
          <NavLink href="#company">Company</NavLink>
          <NavLink href="#news">News</NavLink>
          <NavLink href="#careers">Careers</NavLink>
          <NavLink href="#pricing">Pricing</NavLink>
        </Nav>
        <div>
          <NavLink href="#login">Log in</NavLink>
          <ButtonGetting>Get started</ButtonGetting>
        </div>
      </Header>
      <Main>
        <LeftSection>
        <ButtonNewTop><ButtonNew>New</ButtonNew>How Monobank uses Bridge to power their growth</ButtonNewTop>
          <Title>Build customer relationship in a flexible way</Title>
          <Subtitle>
            Powerful, flexible and data-driven, Bridge makes it easy to build the exact CRM your business needs.
          </Subtitle>
          <Button>Open Bridge for free</Button>
        </LeftSection>
        <RightSection>
          <img src="image1.jpg" alt="CRM Workflow" />
        </RightSection>
      </Main>
      <Partners>
        <div>We helped to improve such companies as</div>
        <div>HYPERLINE</div>
        <div>OpenAI</div>
        <div>Plain</div>
        <div>On Deck</div>
        <div>Pallet</div>
        <div>Beacons</div>
      </Partners>
    </Container>
  );
}; 

export default CRMWorkflow;
