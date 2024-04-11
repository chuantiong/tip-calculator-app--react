const InputField = (props) => {
    const { url, id, placeholder, onClick } = props;

    return (
        <input
            className='input-field'
            style={{
                backgroundImage: `url('${url}')`
            }}
            type="text"
            id={id}
            placeholder={placeholder}
            onClick={onClick}
        />
    );
};

export default InputField;