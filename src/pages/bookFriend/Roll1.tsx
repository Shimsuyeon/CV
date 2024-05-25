import Flex from "src/atoms/containers/flex/Flex";
import Icons from "src/atoms/icon/Icon";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";
import styled from "styled-components";

import Edu from "./assets/Edu2.png";
const SectionContainerCol = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px); // 전체화면시 약 700px?
  background-color: #fffff0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
type ScrollFadeInProps = {
  ref: React.RefObject<HTMLElement>;
  style: React.CSSProperties;
};

interface Roll1Props {
  innerRefArr: React.MutableRefObject<HTMLElement[]>;
}
const Edu1 = ({ innerRefArr }: Roll1Props) => {
  const animatedItem0: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0);
  const animatedItem1: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.5);
  const animatedItem2: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1);
  const animatedItem3: ScrollFadeInProps = useScrollFadeIn("left", 1.7, 1.5);

  return (
    <SectionContainerCol
      style={{
        paddingBlock: "0px",
        minHeight: "70vh",
      }}
      ref={(el: HTMLDivElement | null) => {
        if (el !== null) {
          innerRefArr.current[1] = el;
        }
      }}
    >
      <Spacer height={"100px"} />
      <Icons.Stars size={50} />

      <Spacer height={"100px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem0.ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem0.style}
      >
        인간관계가 무섭단 핑계로
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem1.ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem1.style}
      >
        친구들을 믿지 않았던 게 아닌가. 그런 생각이 들었다.
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem2.ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem2.style}
      >
        그로부터 시간이 지나고 하나 느낀 것이 있다.
      </Text>
      <Spacer height={"100px"} />
      <Image
        src={Edu}
        width={300}
        ref={animatedItem3.ref as React.RefObject<HTMLImageElement>}
        style={animatedItem3.style}
      />
      <Spacer height={"150px"} />
    </SectionContainerCol>
  );
};
export default Edu1;
