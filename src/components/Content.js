import React from "react";

const ThemeContainer = styled.div`
  background: ${({ Theme }) => Theme.bgColor};
  color: ${({ Theme }) => Theme.textColor};
`;

const Content = () => {
  return (
    <div>
      <ThemeContainer>{`Current Mode is ${mode}`}</ThemeContainer>
    </div>
  );
};

export default Content;
