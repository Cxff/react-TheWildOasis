import styled from "styled-components";
import GlobalStyles from "./styles/GlobalStyles.js";
import Button from "./ui/Button.jsx";
import Input from "./ui/Input.jsx";
import Heading from "./ui/Heading.jsx";

const StyledApp = styled.div`
  background-color: var(--color-yellow-700);
  padding: 20px;
`

const App = () => {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <Heading>这个是styled的用法</Heading>
        <Button>This btn</Button>
        <Input placeholder={'Number of guests'} />
      </StyledApp>
    </>
  );
};

export default App;