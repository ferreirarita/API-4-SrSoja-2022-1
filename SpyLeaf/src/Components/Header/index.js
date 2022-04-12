import { Header as HeaderComponent } from "./styles";
import { Button } from "react-native-paper";
import light from "../../styles/light";

const Header = () => {
  return (
    <HeaderComponent>
      <Button labelStyle={light.icon} icon="bell" />
      <Button labelStyle={light.icon} icon="menu" />
    </HeaderComponent>
  );
};

export default Header;