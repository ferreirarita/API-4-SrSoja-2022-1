import React from "react";
import Header from "../../Components/Header";
import RoundButton from "../../Components/RoundButton";
import { Title, Row } from "./styles";
import light from "../../styles/light";
import SelectFarmAndPlot from "../../Components/SelectFazendaTalhao";
import { View } from "react-native";

const Relatorio = () => {
  return (
    <>
      <Header />

      <Title style={light.TitlePrimary}>Relatorio de Produtividade</Title>
      <SelectFarmAndPlot />
      <Row>
        <RoundButton label="Área"></RoundButton>
        <RoundButton label="Previsão de Produção"></RoundButton>
        <RoundButton label="Calculo de Produção"></RoundButton>
      </Row>
      <View
        style={{
          width: "90%",
          height: 205,
          borderColor: "#888",
          borderWidth: 1,
          alignSelf: "center",
          marginTop: 5,
        }}
      />
    </>
  );
};

export default Relatorio;