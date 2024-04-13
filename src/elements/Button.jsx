const Button = ({ children, activeClass, variantClass, onClick, name, value }) => {
    const buttonClass = `button ${variantClass || activeClass || ""}`;

    return (
        <button
            className={buttonClass}
            onClick={onClick}
            name={name}
            value={value}
        >
            {children}{typeof(children) === "number" ? "%" : ""}
        </button>
    );
};

export default Button;