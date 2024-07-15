import styled, { css } from "styled-components";

export const Container = styled.div`
  background: ${(props) => props.theme.splash.bg};
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    left: -100px;
    bottom: 0;
    top: 0;
    width: 100px;
    background: ${(props) => props.theme.splash.gradient};
    animation: glisten 2s ease-in 0.8s infinite;
  }

  @keyframes glisten {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(150px);
    }
  }
`;

export const Logo = styled.img`
  z-index: 3;
  width: 60px;
  height: 60px;
`;

export const Progress = styled.div<{ progress: number }>`
  width: 200px;
  max-width: 400px;
  height: 4px;
  width: 90%;
  margin: 20px auto 30px;
  background: ${(props) => props.theme.splash.progressBg};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    height: 100%;
    background: ${(props) => props.theme.splash.progressAfterBg};
    transition: width 2s linear;

    ${(props) => css`
      width: ${props.progress}%;
    `};
  }
`;

export const Title = styled.h1`
  color: ${(props) => props.theme.splash.titleColor};
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 10px;
`;

export const SubTitle = styled.p`
  color: ${(props) => props.theme.splash.subTitleColor};
  font-size: 0.85rem;
`;

export const Link = styled.a`
  text-decoration: revert-layer;

  &:hover {
    text-decoration: revert-layer;
  }
`;
