const InputField = (props) => {
    const { url, id, placeholder, onClick, customClass } = props;

    return (
        <input
            className={`input-field ${customClass || ""}`}
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