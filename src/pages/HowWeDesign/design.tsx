import React from "react";
import styled from "styled-components";

// Styled components
const Section = styled.section`
  padding: 60px 0;
`;

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
`;

const LeftColumn = styled.div`
  flex: 1;
  max-width: 40%;
  padding: 0 20px;
`;

const RightColumn = styled.div`
  flex: 1;
  max-width: 60%;
  padding: 0 20px;
`;

const SectionTitle = styled.h2`
  font-size: 34px;
  font-weight: bold;
  color: #212121;
`;

const Highlight = styled.span`
  color: #4fa3a2;
  display: inline-block;
  border-bottom: 2px solid #4fa3a2;
`;

const Subtitle = styled.p`
  color: #455a64;
  font-size: 16px;
  margin-top: 7px;
`;

const StepsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

const Step = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 20px;
  position: relative;
`;

const StepNumber = styled.div`
  content: "0" counter(process-counter);
  font-size: 33px;
  line-height: 1;
  font-weight: 700;
  color: #fbc02d;
  margin-right: 40px;
  position: absolute;
  top: 0;
  left: -73px;

  &:after {
    content: "step";
    position: absolute;
    top: 35px;
    left: 6px;
    font-size: 12px;
    font-weight: 400;
    color: #c4c4c4;
    text-transform: uppercase;
  }
`;

const StepContent = styled.div`
  flex: 1;
`;

const StepTitle = styled.h3`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 5px;
  color: #212121;
`;

const StepDescription = styled.p`
  font-size: 14px;
  color: #333;
`;

const Button = styled.a`
  display: inline-block;
  background-color: #6dc7d1;
  color: white;
  padding: 12px 24px;
  font-size: 1.1rem;
  text-decoration: none;
  border-radius: 5px;
  text-align: center;
  cursor: pointer;
  margin-top: 10px;
  font-weight: bold;

  &:hover {
    background-color: #218838;
  }
`;

const DesignProcess = () => {
  return (
    <Section>
      <Container>
        <LeftColumn>
          <SectionTitle>
            How We Design <br />
            <Highlight>Book Cover</Highlight>
          </SectionTitle>
          <Subtitle>
            Here are the steps we make <br></br>to create a design that piques
            curiosity.
          </Subtitle>
        </LeftColumn>
        <RightColumn>
          <StepsContainer>
            <Step>
              <StepNumber>01</StepNumber>
              <StepContent>
                <StepTitle>Dig deeper into your book concept</StepTitle>
                <StepDescription>
                  We ask you to fill in the creative brief to grasp your
                  requirements, catch the hook of your{" "}
                  <strong>story, and reflect</strong> it on the book cover.
                </StepDescription>
              </StepContent>
            </Step>
            <Step>
              <StepNumber>02</StepNumber>
              <StepContent>
                <StepTitle>Analyze your genre</StepTitle>
                <StepDescription>
                  We research typography, layouts, and color themes common to
                  your genre to make sure that your book cover design will{" "}
                  <strong>fit the market</strong>.
                </StepDescription>
              </StepContent>
            </Step>
            <Step>
              <StepNumber>03</StepNumber>
              <StepContent>
                <StepTitle>Provide you with the first sketch</StepTitle>
                <StepDescription>
                  You get the first concept in just 9{" "}
                  <strong>business days</strong> for a photo-manipulated cover
                  and 14 business days for an illustrated one.
                </StepDescription>
              </StepContent>
            </Step>
            <Step>
              <StepNumber>04</StepNumber>
              <StepContent>
                <StepTitle>Implement your revisions</StepTitle>
                <StepDescription>
                  We understand how much time you’ve spent mastering your work
                  and want to do the same for the cover. That’s why we{" "}
                  <strong>don’t limit the number of revisions</strong>.
                </StepDescription>
              </StepContent>
            </Step>
          </StepsContainer>
          <Button href="/services">Order Design</Button>
        </RightColumn>
      </Container>
    </Section>
  );
};

export default DesignProcess;
