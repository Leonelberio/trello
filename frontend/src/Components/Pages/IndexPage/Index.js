import React, { useEffect } from "react";
import IndexNav from "../../IndexNav";
import { useHistory } from "react-router-dom";
import tof from './TrelloUICollage_4x.webp'
import {
  Container,
  Content,
  LeftSide,
  RightSide,
  LeftWrapper,
  Title,
  Text,
  Button,
  SvgItem,
} from "./Styled";

const Index = () => {
  let history = useHistory();
  useEffect(() => {
    document.title = "Planning"
  }, [])
  return (
    <>
      <IndexNav />
      <Container>
        <Content>
          <LeftSide>
            <SvgItem src={tof} />
            {/*  <SvgItem src="https://images.ctfassets.net/rz1oowkt5gyp/75rDABL8fyMtNLlUAtBxrg/c5e145977a86c41c47e17c69410c64f7/TrelloUICollage_4x.png?w=1140&fm=webp" />*/}
            {/* <SvgItem src="https://images.ctfassets.net/rz1oowkt5gyp/5QIzYxue6b7raOnVFtMyQs/113acb8633ee8f0c9cb305d3a228823c/hero.png?w=1200&fm=webp" /> */}
            
          </LeftSide>
          <RightSide>
            <LeftWrapper>
              <Title>Planning aide les équipes à faire avancer le travail.</Title>
              <Text>
                Planning fixe un processus, après études et réflexion prospective, 
                les objectifs à atteindre, les moyens nécessaires, 
                les étapes de réalisation et les méthodes de suivi de celle-ci. 
                Elle est l'organisation dans le temps de la réalisation d'objectifs : 
                dans un domaine précis, avec différents moyens mis en œuvre et sur une durée précise.
              </Text>
              <Button onClick={() => history.push("/register")}>
                Inscrivez-vous, c'est gratuit
              </Button>
            </LeftWrapper>
          </RightSide>
        </Content>
      </Container>
    </>
  );
};

export default Index;
