import React from "react";

import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import Button from "../../styles/GlobalComponents/Button";
import { LeftSection } from "./HeroStyles";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hello there! <br />
        I'm Beena Pal
      </SectionTitle>
      <SectionText>
        A full-stack web developer, learner and coding enthusiast!
      </SectionText>
      <Button
        onClick={() =>
          (window.location =
            "https://drive.google.com/file/d/1QYi23N9cOKLoJC6p8DUGA-COdUXuPEfM/view")
        }
      >
        My resume
      </Button>
    </LeftSection>
  </Section>
);

export default Hero;
