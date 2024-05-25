import { useNavigate } from "react-router-dom";
import Button from "src/atoms/button/Button";
import Icons from "src/atoms/icon/Icon";
import Image from "src/atoms/image/Image";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";
import styled from "styled-components";

import Edu from "./assets/Edu3.png";
import Paths from "src/types/paths";
const SectionContainerCol = styled.div`
  width: 100%;
  min-height: calc(100vh - 64px); // 전체화면시 약 700px?
  background-color: #fffff0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
interface Roll1Props {
  innerRefArr: React.MutableRefObject<HTMLElement[]>;
}
const Roll2 = ({ innerRefArr }: Roll1Props) => {
  const animatedItem = {
    0: useScrollFadeIn("left", 2.3, 0),
    1: useScrollFadeIn("leftUp", 2.3, 0.5),
    2: useScrollFadeIn("left", 2.3, 1),
    3: useScrollFadeIn("right", 2.3, 1.5),
    4: useScrollFadeIn("right", 2.3, 2),
  };
  const navigate = useNavigate();
  return (
    <SectionContainerCol
      style={{
        paddingBlock: "0px",
        minHeight: "70vh",
      }}
      ref={(el: HTMLDivElement | null) => {
        if (el !== null) {
          innerRefArr.current[2] = el;
        }
      }}
    >
      <Icons.Stars size={50} />
      <Spacer height={"100px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem[0].ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem[0].style}
      >
        친구들과의 관계에 상처가 없을 순 없지만
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem[1].ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem[1].style}
      >
        그럼에도 친구들의 응원과 격려가 있어
      </Text>
      <Spacer height={"50px"} />
      <Text
        font={Font.Mapo}
        size={"1.2rem"}
        ref={animatedItem[2].ref as React.RefObject<HTMLParagraphElement>}
        style={animatedItem[2].style}
      >
        인간관계가 이제는 마냥 두렵지 않다는 것이다.
      </Text>
      <Spacer height={"100px"} />
      <Image
        src={Edu}
        width="450px"
        ref={animatedItem[3].ref as React.RefObject<HTMLImageElement>}
        style={animatedItem[3].style}
      />
      <Spacer height={"100px"} />
      <Button onClick={() => navigate(Paths.booklist)}>
        <Text
          font={Font.Mapo}
          size="1.3rem"
          color="gray"
          ref={animatedItem[4].ref as React.RefObject<HTMLParagraphElement>}
          style={animatedItem[4].style}
        >
          목록으로 →
        </Text>
      </Button>
    </SectionContainerCol>
  );
};
export default Roll2;