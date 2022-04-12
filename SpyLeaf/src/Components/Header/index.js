import { Header as HeaderComponent } from "./styles";
import { Button } from "react-native-paper";
import styles from "../../styles/light";

const Header = () => {
  return (
    <HeaderComponent>
      <Button labelStyle={styles.icon} icon="bell" />
      <Button labelStyle={styles.icon} icon="menu" />
    </HeaderComponent>
  );
};

export default Header;