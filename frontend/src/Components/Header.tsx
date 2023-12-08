import { Avatar, ButtonGroup } from "@mui/material";
import styled from "styled-components";
import SearchIcon from "@mui/icons-material/Search";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

const Header: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <Logo>
          <img src="/img/baixados.png" alt="Logotipo da empresa" />
        </Logo>
        <InputContainer>
          <SearchContainer>
            <ButtonGroup>
              <SearchIcon />
            </ButtonGroup>
            <input
              type="text"
              name="searchInput"
              id="searchInput"
              placeholder="Buscar no Drive"
            />
          </SearchContainer>
        </InputContainer>

        <RightContainer>
          <LeftSelection>
            <HelpOutlineIcon />
            <SettingsOutlinedIcon />
          </LeftSelection>
          <RightSelection>
            <AppsOutlinedIcon className="app" />
            <Avatar />
          </RightSelection>
        </RightContainer>
      </Wrapper>
    </Container>
  );
};

export default Header;

const Container = styled.div`
  position: sticky;
  top: 0;
  z-index: 999;
  background-color: #ffffff;
  padding: 2px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.2);
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 10px 20px;
`;
const Logo = styled.div`
  display: flex;
  align-items: center;

  img {
    /* width: 100%; */
    height: 40px;
  }
`;
const InputContainer = styled.div`
  flex: 1;
`;
const RightContainer = styled.div`
  display: flex;
  align-items: center;
`;

const SearchContainer = styled.div`
  width: 64%;
  height: 50px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.09);
  border-radius: 8px;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  svg {
    margin-left: 8px;
    color: #5f6368;
  }

  input {
    width: 90%;
    height: 80%;
    font-family: sans-serif;
    margin: 0 auto;
    background-color: transparent;
    &:focus {
      outline: none;
    }

    border: none;
  }
`;
const RightSelection = styled.div`
  display: flex;
  align-items: center;

  svg {
    color: #5f6368;
    padding: 5px;
    cursor: pointer;
    border-radius: 50%;
    transition: all 200ms ease-out;
    &:hover {
      background-color: rgba(0, 0, 0, 0.09);
    }
  }

  .app {
    margin-right: 15px;
  }
`;

const LeftSelection = styled(RightSelection)`
  margin-right: 40px;

  svg {
    margin: 0px 10px;
  }
`;
