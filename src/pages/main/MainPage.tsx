import React from "react";
import { useNavigate } from "react-router-dom";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";
import Paths from "src/types/paths";

import BookMain from "./assets/book.png";

// Assuming you have these types defined somewhere in your project
type ScrollFadeInProps = {
  ref: React.RefObject<HTMLElement>;
  style: React.CSSProperties;
};

const MainPage: React.FC = () => {
  const animatedItem0: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0);
  const animatedItem1: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.5);
  const animatedItem2: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1);
  const animatedItem3: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1.3);
  const navigate = useNavigate();

  return (
    <>
      <Area backgroundColor="#fffff0">
        <Content>
          <Spacer height="200px" />
          <Flex alignItems="center" justifyContent="center">
            <Flex flexDirection="column">
              <Spacer height="100px" />
              <Text
                font={Font.Mapo}
                size="4rem"
                ref={animatedItem0.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem0.style}
              >
                심수연
              </Text>
              <Spacer height="30px" />
              <Text
                font={Font.Mapo}
                size="1.5rem"
                ref={animatedItem1.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem1.style}
              >
                옳은 길의 반대는 쉬운 길
              </Text>
            </Flex>
            <Spacer width="30px" />
            <Flex flexDirection="column" alignItems="center">
              <Image
                src={BookMain}
                width="350px"
                ref={animatedItem2.ref as React.RefObject<HTMLImageElement>}
                style={animatedItem2.style}
                onClick={() => navigate(Paths.bookTotal)}
              />
              <Spacer height="20px" />
              <Text
                font={Font.Mapo}
                color="gray"
                ref={animatedItem3.ref as React.RefObject<HTMLParagraphElement>}
                style={animatedItem3.style}
              >
                책을 클릭해 보세요 ↑
              </Text>
            </Flex>
          </Flex>
          <Spacer height="200px" />
        </Content>
      </Area>
    </>
  );
};

export default MainPage;
