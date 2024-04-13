const HelperText = ({ children, ...props }) => {
    const numberOfPeople = parseInt(props.numberOfPeople)
    const numberOfPeopleClass = numberOfPeople === 0 ? 'helper-text active' : 'helper-text';

    return (
        <>
            <span className={numberOfPeopleClass}>{children}</span>
        </>
    );
};

export default HelperText;