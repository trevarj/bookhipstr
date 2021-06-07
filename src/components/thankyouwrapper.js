import React from "react";
import styled from "styled-components";
import { Title, Text, Column } from "../theme/index";
import CheckMark from "../images/checkMark.png";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  width: 350px;
`;

const StyledColumn = styled(Column)`
  align-items: center;
  margin: 3em auto;
  width: 85%;
  text-align: center;
`;

export default function ThankYouWrapper() {
  return (
    <Wrapper>
      <StyledColumn>
        <Image src={CheckMark} alt="Check mark Hipstr" />
        <Title margin=".5em 0">Thank you!</Title>
        <Text thankyou>
          Your inquiry has been received; we’ll be in touch soon!
        </Text>
        <Text thankyou>
          Make sure to add{" "}
          <a href="mailto:info@bookhipstr.com">
            <span style={{ fontWeight: "600", color: "#4d4d4d" }}>
              info@bookhipstr.com
            </span>
          </a>{" "}
          as a contact so we don’t end up in your Spam Folder!
        </Text>
        <Text thankyou italic>
          If you haven’t heard from us within 24 hours, something may have gone
          terribly wrong. Check your Spam Folder or give us a call!
        </Text>
      </StyledColumn>
    </Wrapper>
  );
}
