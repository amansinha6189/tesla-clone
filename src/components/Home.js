import React from "react";
import styled from "styled-components";
import Section from "./Section";

function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        backgroundImage="model-s.jpg"
        description=" Order online for touchless delivery"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model Y"
        backgroundImage="model-y.jpg"
        description=" Order online for touchless delivery"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model 3"
        backgroundImage="model-3.jpg"
        description=" Order online for touchless delivery"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Model X"
        backgroundImage="model-x.jpg"
        description=" Order online for touchless delivery"
        leftBtnText="CUSTOM ORDER"
        rightBtnText="EXISTING INVENTORY"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        backgroundImage="solar-panel.jpg"
        description="Money back gaurantee"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar for new roofs"
        backgroundImage="solar-roof.jpg"
        description="Solar Roof Costs Less than a New Roof Plus Solar Panel"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        backgroundImage="accessories.jpg"
        description=""
        leftBtnText="Shop Now"
      />
    </Container>
  );
}

export default Home;

const Container = styled.div`
  height: 100vh;
`;
