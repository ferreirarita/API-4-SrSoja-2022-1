import { PaperSelect } from "react-native-paper-select";
import React, { useState } from "react";
import { Text } from "react-native";
import { Box, Row } from "./styles";

const SelectEstadoMunicipio = () => {
    const [form, setForm] = useState({estado: '', municipio: ''});
    const [estado, setEstado] = useState([
        { _id: "1", value: "SP" },
        { _id: "2", value: "MG" },
      ]);
    const [municipio, setMunicipio] = useState([
        { _id: "1", value: "São José dos Campos" },
        { _id: "2", value: "Pedralva" },
      ]);

    return (
        <Row>
            <Box>
            <Text>Estado: </Text>
            <PaperSelect
                textInputHeight={20}
                textInputMode="flat"
                label="Selecione Estado"
                value={form.estado}
                onSelection={(value) => {
                    setForm({
                        estado: value
                    });
                }}
                arrayList={estado}
                selectedArrayList={[]}
                multiEnable={false}
            />;
            </Box>

            <Box>
            <Text>Municipio: </Text>
            <PaperSelect
                textInputHeight={20}
                textInputMode="flat"
                label="Selecione Municipio"
                value={form.municipio}
                onSelection={(value) => {
                    setForm({
                        municipio: value
                    });
                }}
                arrayList={municipio}
                selectedArrayList={[]}
                multiEnable={false}
            />; 
            </Box>
        </Row>

    )
}
export default SelectEstadoMunicipio;