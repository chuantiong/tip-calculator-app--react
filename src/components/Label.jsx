const Label = ({ children, htmlFor }) => {
    return (
        <label
            className='input-label'
            htmlFor={htmlFor}
        >
            {children}
        </label>
    );
};

export default Label;