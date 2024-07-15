// // import { useState } from "react";
// // import Icon from "common/components/icons";
// // import useCloseMenu from "../../hooks/useCloseMenu";
// // import { Container, Button, Options, Option } from "./styles";
// // import Header from "pages/chat/chat-room-page/components/header";
// // import { ThemeIconContainer } from "../sidebar/styles";
// // import { Action } from "../sidebar/styles";
// // import { Actions } from "../sidebar/styles";
// // import { useAppTheme } from "common/theme";
// // import { BsFillMoonFill, BsMoon } from "react-icons/bs";
// // import { ImageWrapper } from "../sidebar/styles";
// // import { Avatar } from "../sidebar/styles";
// // import { Profile } from "./styles";

// // type OptionsMenuProps = {
// //   iconClassName?: string;
// //   className?: string;
// //   iconId: string;
// //   ariaLabel?: string;
// //   options: string[];
// //   position?: string;
// //   showPressed?: boolean;
// //   [x: string]: any;
// // };

// // export default function OptionsMenu(props: OptionsMenuProps) {
// //   const [showOptions, setShowOptions] = useState(false);
// //   const ref = useCloseMenu(() => setShowOptions(false));
// //   const theme = useAppTheme();
// //   const {
// //     iconId,
// //     options,
// //     ariaLabel,
// //     className,
// //     iconClassName,
// //     position = "left",
// //     showPressed = true,
// //   } = props;

// //   const getBtnClassName = (): string => {
// //     let _className = showOptions && showPressed ? "btn-pressed " : "";
// //     _className += className ?? "";

// //     return _className;
// //   };

// //   const getOptionsClassName = (): string => {
// //     let className = showOptions ? "active " : "";
// //     className += position === "right" ? "right" : "";

// //     return className;
// //   };

// //   const handleClick = () => {
// //     setShowOptions(!showOptions);
// //   };
  
// //   const handleChangeThemeMode = () => {
// //     theme.onChangeThemeMode();
// //   };


// //   return (
// //     <Container ref={ref}>
// //       <Button aria-label={ariaLabel} className={getBtnClassName()} onClick={handleClick}>
// //         <Icon id={iconId} className={iconClassName} />
// //       </Button>
      
// //       <Options className={getOptionsClassName()}>
// //       <Profile>
// //          <ImageWrapper>
// //         <Avatar src="/assets/images/profile.png" />
// //         </ImageWrapper>
// //         <Actions>
// //           <ThemeIconContainer onClick={handleChangeThemeMode}>
// //             {theme.mode === "light" ? <BsMoon /> : <BsFillMoonFill />}
// //           </ThemeIconContainer>
        
// //         </Actions>
// //         </Profile>
// //         {options.map((option) => (
// //           <Option key={option}>{option}</Option>
// //         ))}
// //       </Options>
// //     </Container>
// //   );
// // }

// import { useState, useEffect, useRef } from "react";
// import Icon from "common/components/icons";
// import useCloseMenu from "../../hooks/useCloseMenu";
// import {
//   Container,
//   Button,
//   Options,
//   Option,
//   Profile,
//   ImageWrapper,
//   Avatar,
//   Actions,
//   ThemeIconContainer,
// } from "./styles";
// import { BsFillMoonFill, BsMoon } from "react-icons/bs";
// import { useAppTheme } from "common/theme";

// type OptionsMenuProps = {
//   iconClassName?: string;
//   className?: string;
//   iconId: string;
//   ariaLabel?: string;
//   options: string[];
//   position?: string;
//   showPressed?: boolean;
//   [x: string]: any;
// };

// export default function OptionsMenu(props: OptionsMenuProps) {
//   const theme = useAppTheme();
//   const [showOptions, setShowOptions] = useState(false);
//   const [touchStartX, setTouchStartX] = useState(0);
//   const [touchEndX, setTouchEndX] = useState(0);
//   const optionsRef = useRef<HTMLDivElement>(null);
  
//   const {
//     iconId,
//     options,
//     ariaLabel,
//     className,
//     iconClassName,
//     position = "left",
//     showPressed = true,
//   } = props;

//   const getBtnClassName = (): string => {
//     let _className = showOptions && showPressed ? "btn-pressed " : "";
//     _className += className ?? "";

//     return _className;
//   };

//   const getOptionsClassName = (): string => {
//     let className = showOptions ? "active " : "";
//     className += position === "right" ? "right" : "";

//     return className;
//   };

//   const handleClick = () => {
//     setShowOptions(!showOptions);
//   };

//   const handleChangeThemeMode = () => {
//     theme.onChangeThemeMode();
//   };

//   const handleTouchStart = (e: TouchEvent) => {
//     setTouchStartX(e.targetTouches[0].clientX);
//   };

//   const handleTouchMove = (e: TouchEvent) => {
//     setTouchEndX(e.targetTouches[0].clientX);
//   };

//   const handleTouchEnd = () => {
//     if (touchStartX - touchEndX > 50) {
//       setShowOptions(false);
//     }
//     if (touchEndX - touchStartX > 50) {
//       setShowOptions(true);
//     }
//   };

//   useEffect(() => {
//     const optionsElement = optionsRef.current;
//     if (optionsElement) {
//       optionsElement.addEventListener("touchstart", handleTouchStart);
//       optionsElement.addEventListener("touchmove", handleTouchMove);
//       optionsElement.addEventListener("touchend", handleTouchEnd);

//       return () => {
//         optionsElement.removeEventListener("touchstart", handleTouchStart);
//         optionsElement.removeEventListener("touchmove", handleTouchMove);
//         optionsElement.removeEventListener("touchend", handleTouchEnd);
//       };
//     }
//   }, [touchStartX, touchEndX]);

//   return (
//     <Container>
//       <Button aria-label={ariaLabel} className={getBtnClassName()} onClick={handleClick}>
//         <Icon id={iconId} className={iconClassName} />
//       </Button>
      
//       <Options className={getOptionsClassName()} ref={optionsRef}>
//         <Profile>
//           <ImageWrapper>
//             <Avatar src="/assets/images/profile.png" />
//           </ImageWrapper>
//           <Actions>
//             <ThemeIconContainer onClick={handleChangeThemeMode}>
//               {theme.mode === "light" ? <BsMoon /> : <BsFillMoonFill />}
//             </ThemeIconContainer>
//           </Actions>
//         </Profile>
//         {options.map((option) => (
//           <Option key={option}>{option}</Option>
//         ))}
//       </Options>
//     </Container>
//   );
// }

import React, { useState, useRef } from 'react';
import Icon from "common/components/icons";
import useCloseMenu from "../../hooks/useCloseMenu";
import { Container, Button, Options, Option, ImgSection, ImageWrapper, Profile, Avatar, Actions, ThemeIconContainer } from "./styles";
import { BsFillMoonFill, BsMoon } from "react-icons/bs";
import { useAppTheme } from "common/theme";
import { Text } from '../sidebar/alert/styles';

type OptionsMenuProps = {
  iconClassName?: string;
  className?: string;
  iconId: string;
  ariaLabel?: string;
  options: string[];
  position?: string;
  showPressed?: boolean;
  [x: string]: any;
};

export default function OptionsMenu(props: OptionsMenuProps) {
  const [showOptions, setShowOptions] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);
  const ref = useCloseMenu(() => setShowOptions(false));
  const theme = useAppTheme();

  const {
    iconId,
    options,
    ariaLabel,
    className,
    iconClassName,
    position = "left",
    showPressed = true,
  } = props;

  const getBtnClassName = (): string => {
    let _className = showOptions && showPressed ? "btn-pressed " : "";
    _className += className ?? "";

    return _className;
  };

  const getOptionsClassName = (): string => {
    let className = showOptions ? "active " : "";
    className += position === "right" ? "right" : "";

    return className;
  };

  const handleClick = () => {
    setShowOptions(!showOptions);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStartX - touchEndX > 50) {
      setShowOptions(false); // swipe left to close
    }
    if (touchEndX - touchStartX > 50) {
      setShowOptions(true); // swipe right to open
    }
  };

  return (
    <Container ref={ref}>
      <Button aria-label={ariaLabel} className={getBtnClassName()} onClick={handleClick}>
        <Icon id={iconId} className={iconClassName} />
      </Button>
      
      <Options
        className={getOptionsClassName()}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
       
        <Profile>
          <ImgSection>
          <ImageWrapper>
            <Avatar src="/assets/images/boy1.webp" />
          </ImageWrapper>
          <Actions>
            <ThemeIconContainer onClick={theme.onChangeThemeMode}>
              {theme.mode === "light" ? <BsMoon /> : <BsFillMoonFill />}
            </ThemeIconContainer>
          </Actions>
          </ImgSection>
          <Text>Priti Sahani</Text>
          <Text style={{ fontSize: "12px" }}>+919695295703</Text>

        </Profile>
         
        
        
        {options.map((option) => (
          <Option key={option}>{option}</Option>
        ))}
      </Options>
    </Container>
  );
}

