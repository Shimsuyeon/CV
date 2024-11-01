import Area from "src/atoms/containers/area/Area";
import Flex from "src/atoms/containers/flex/Flex";
import Spacer from "src/atoms/spacer/Spacer";
import Text from "src/atoms/text/Text";
import Font from "src/styles/fonts";

const ProjectInfoPage = () => {
  return (
    <Area backgroundColor="#ffffff">
      <Text font={Font.Bold} size={"2.5rem"}>
        심수연
      </Text>
      <Spacer height="10px" />
      <Text>010-2234-9008</Text>
      <Flex>
        <Text font={Font.Medium}></Text>
      </Flex>
    </Area>
  );
};
export default ProjectInfoPage;
