import { useState } from "react";
import Icon from "common/components/icons";
import { AlertContainer, IconWrapper, TextContainer, Text, CloseIcon } from "./styles";

export default function SidebarAlert() {
  const [isClose, setIsClose] = useState(false);

  if (isClose) return <></>;

  return (
    <>
      <AlertContainer>
        <CloseIcon onClick={() => setIsClose(true)} />
        <IconWrapper>
          <Icon id="noWifi" className="icon" />
        </IconWrapper>
        <TextContainer>
          <Text> Add your birthday! </Text>
          <Text>
            Let your contacts know when you're celebrating{" "}
           
          </Text>
        </TextContainer>
      </AlertContainer>
    </>
  );
}
