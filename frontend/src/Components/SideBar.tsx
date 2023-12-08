import React from "react";
import styled from "styled-components";
import AddIcon from "@mui/icons-material/Add";
import SideBarList from "./SideBarList";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";
import DevicesIcon from "@mui/icons-material/Devices";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import HistoryIcon from "@mui/icons-material/History";
import GradeIcon from "@mui/icons-material/Grade";
import DeleteIcon from "@mui/icons-material/Delete";
import CloudIcon from "@mui/icons-material/Cloud";

const SideBar: React.FC = () => {
  return (
    <Container>
      <Wrapper>
        <NewChannel>
          <span>
            <AddIcon />
            Novo
          </span>
        </NewChannel>
        <div>
          <SideBarList icon={<PhoneAndroidIcon />} title="Meu Drive" />
          <SideBarList icon={<DevicesIcon />} title="Computador" />
          <SideBarList icon={<PeopleAltIcon />} title="Compartilhado comigo" />
          <SideBarList icon={<HistoryIcon />} title="Recente" />
          <SideBarList icon={<GradeIcon />} title="Favorito" />
          <SideBarList icon={<DeleteIcon />} title="Lixeira" />
          <Underline />
          <SideBarList icon={<CloudIcon />} title="Armazenamento" />
        </div>
      </Wrapper>
    </Container>
  );
};

export default SideBar;

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  padding: 10px;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const NewChannel = styled.div`
  width: 118px;
  height: 48px;
  background-color: white;
  border-radius: 24px;
  padding: 2px;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  transition: all 200ms ease-out;

  &:hover {
    box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  }

  span {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100%;

    svg {
      height: 36px;
    }
  }
`;
const Underline = styled.div`
  border-bottom: 1px solid rgb(0 0 0 / 0.1);
`;
