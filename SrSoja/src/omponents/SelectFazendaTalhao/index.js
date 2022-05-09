import { PaperSelect } from "react-native-paper-select";
import React, { useState } from "react";
import { Text } from "react-native";
import { Box, Row } from "./styles";

const SelectFarmAndPlot = () => {
  const [form, setForm] = useState({ fazenda: "", talhao: "" });
  const [fazendas, setFazendas] = useState([
    { _id: "1", value: "Fazenda 1" },
    { _id: "2", value: "Fazenda 2" },
  ]);

  const [talhoes, setTalhoes] = useState([
    { _id: "1", value: "Talhão 1" },
    { _id: "2", value: "Talhão 2" },
  ]);

  return (
    <Row>
      <Box>
        <Text>Fazenda: </Text>
        <PaperSelect
          textInputHeight={20}
          textInputMode="flat"
          label="Fazenda"
          value={form.fazenda}
          onSelection={(value) => {
            setForm({
              fazenda: value,
            });
          }}
          arrayList={fazendas}
          selectedArrayList={[]}
          multiEnable={false}
        />
      </Box>

      <Box>
        <Text>Talhão: </Text>
        <PaperSelect
          textInputHeight={20}
          textInputMode="flat"
          label="Talhão"
          value={form.talhao}
          onSelection={(value) => {
            setForm({
              talhao: value,
            });
          }}
          arrayList={talhoes}
          selectedArrayList={[]}
          multiEnable={false}
        />
      </Box>
    </Row>
  );
};

export default SelectFarmAndPlot;