const SelectStateAndCity = () => {
    const estados = ['SP']
     
    const [form, setForm] = useState({estado: '', municipio: ''});

    return (
        <>
        <Text>Estado: </Text>
        <PaperSelect
            label="Selecione Estado"
            value={form.estado}
            onSelection={(value) => {
            setForm({
                estado: value
            });
            }}
            arrayList={[...estados]}
            errorText="Erro"
            multiEnable={false}
            selectedArrayList={[]}
        />;

        <Text>Municipio: </Text>
        <PaperSelect
            label="Selecione Municipio"
            value={form.municipio}
            onSelection={(value) => {
            setForm({
                municipio: value
            });
            }}
            arrayList={[...estados]}
            errorText="Erro"
            multiEnable={false}
            selectedArrayList={[]}
        />;
    </>
    )
}