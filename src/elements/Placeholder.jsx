const Placeholder = (props) => {
    const { type, url, id, placeholder, onClick, customClass, name, value, onChange, numberOfPeople } = props;
    const numberOfPeopleToNumber = parseInt(numberOfPeople)
    const errorClass =  numberOfPeopleToNumber === 0 ? 'error' : '';
    const inputClass = `input-placeholder ${customClass || errorClass || ""}`;
    const backgroundUrl = {
                backgroundImage: `url('${url}')`
            };

    return (
        <input
            className={inputClass}
            style={backgroundUrl}
            type={type}
            id={id}
            placeholder={placeholder}
            onClick={onClick}
            onChange={onChange}
            name={name}
            value={value}
        />
    );
};

export default Placeholder;