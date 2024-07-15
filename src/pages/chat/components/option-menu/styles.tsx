import styled from "styled-components";

export const Container = styled.div`
  position: relative;
`;

export const Button = styled.button`
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;

  &.btn-pressed {
    border-radius: 50%;
    background: ${(props) => props.theme.options.bg};
  }
`;

export const Options = styled.div`
  position: fixed;
  top: 0;
  left: 0; /* Change this to left */
  width: 300px;
  height: 100%;
  background-color: ${(props) => props.theme.common.secondaryColor};
  box-shadow: ${(props) => props.theme.options.boxShadow};
  transition: transform 0.3s ease;
  transform: translateX(-100%); /* Change this to translateX(-100%) */
  display: flex;
  flex-direction: column;
  z-index: 1000;

  &.active {
    transform: translateX(0);
  }

  &.right {
    left: 0; /* Remove right property and set left to 0 */
  }
`;

export const Option = styled.div`
  padding: 15px 20px;
  color: ${(props) => props.theme.common.mainHeadingColor};
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    background: ${(props) => props.theme.common.primaryColor};
  }
`;

export const ImgSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0px;
  
`;

export const Profile = styled.div`
   border-bottom: 1px solid ${(props) => props.theme.common.borderColor};
   padding: 10px;
   `;

export const ImageWrapper = styled.div`
  margin-right: 10px;
`;

export const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;
`;

export const ThemeIconContainer = styled.div`
  cursor: pointer;
  margin-left: 10px;
`;
