const InputField = (props) => {
    const { url, id } = props;

    return (
        <input
            className='input-field'
            style={{
                backgroundImage: `url('${url}')`
            }}
            type="text"
            id={id}
        />
    );
};

export default InputField;