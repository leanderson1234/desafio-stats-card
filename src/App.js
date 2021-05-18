import React from 'react';
import CardBody from './components/cardbody';
import CardContainer from './components/cardcontainer';
import Cardimage from './components/cardimage';
import Container from './components/container';
import ContainerText from './components/containertext';
import Title from './components/title';
import Text from './components/text';
import InfoContainer from './components/infocontainer';
import Info from './components/info';
import InfoTitle from './components/infotitle';
import InfoDesc from './components/infodesc';
import Spotlight from './components/spotlight';

function App() {
  return (
    <div className="App">
      <Container>
        <CardContainer>
          <CardBody>
            <Cardimage className="image_mobile" />

            <ContainerText>
              <Title>
                Get <Spotlight>insights </Spotlight>that help your business grow.
              </Title>
              <Text>
                Discover the benefits of data analytics and make better decisions regarding revenue,
                customer experience, and overall efficiency.
              </Text>
              <InfoContainer>
                <Info>
                  <InfoTitle>10k+</InfoTitle>
                  <InfoDesc>COMPANIES</InfoDesc>
                </Info>

                <Info>
                  <InfoTitle>314</InfoTitle>
                  <InfoDesc>TEMPLATES</InfoDesc>
                </Info>
                <Info>
                  <InfoTitle>12M+</InfoTitle>
                  <InfoDesc>QUERIES</InfoDesc>
                </Info>
              </InfoContainer>
            </ContainerText>
          </CardBody>
        </CardContainer>
      </Container>
    </div>
  );
}

export default App;
