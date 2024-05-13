import Button from "src/atoms/button/Button";
import Area from "src/atoms/containers/area/Area";
import Content from "src/atoms/containers/content/Content";
import Flex from "src/atoms/containers/flex/Flex";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import { useScrollFadeIn } from "src/hooks/useScrollFade";
import Font from "src/styles/fonts";
type ScrollFadeInProps = {
  ref: React.RefObject<HTMLElement>;
  style: React.CSSProperties;
};

const BookListPage = () => {
  const animatedItem0: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0);
  const animatedItem1: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 0.5);
  const animatedItem2: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1);
  const animatedItem3: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1.3);
  const animatedItem4: ScrollFadeInProps = useScrollFadeIn("up", 1.7, 1.6);
  return (
    <Area backgroundColor="#fffff0">
      <Content>
        <Spacer height={"200px"} />
        <Flex
          flexDirection="column"
          gap="20px"
          justifyContent="start"
          alignItems="start"
        >
          <Text
            font={Font.Mapo}
            size="4rem"
            ref={animatedItem0.ref as React.RefObject<HTMLParagraphElement>}
            style={animatedItem0.style}
          >
            목차
          </Text>
          <Spacer height={"30px"} />
          <Button>
            <Text
              font={Font.Mapo}
              size="2rem"
              ref={animatedItem1.ref as React.RefObject<HTMLParagraphElement>}
              style={animatedItem1.style}
            >
              1. 책 소개_지스트의 온도
            </Text>
          </Button>
          <Button>
            <Text
              font={Font.Mapo}
              size="2rem"
              ref={animatedItem2.ref as React.RefObject<HTMLParagraphElement>}
              style={animatedItem2.style}
            >
              2. 앞구르기_김현아
            </Text>
          </Button>
          <Button>
            <Text
              font={Font.Mapo}
              size="2rem"
              ref={animatedItem3.ref as React.RefObject<HTMLParagraphElement>}
              style={animatedItem3.style}
            >
              3. 당신이 교육봉사를 해야 하는 이유_심수연
            </Text>
          </Button>
          <Button>
            <Text
              font={Font.Mapo}
              size="2rem"
              ref={animatedItem4.ref as React.RefObject<HTMLParagraphElement>}
              style={animatedItem4.style}
            >
              4. 학교생활 많이 힘들어요?_심수연
            </Text>
          </Button>
        </Flex>
        <Spacer height={"2000px"} />
      </Content>
    </Area>
  );
};
export default BookListPage;
