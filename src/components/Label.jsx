const Label = (props) => {
    return (
        <label
            className='input-label'
            htmlFor={props.for}>{props.text}
        </label>
    );
};

export default Label;