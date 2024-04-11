const Button = ({ children, activeClass, resetBtnClass, onClick, style }) => {

    return (
        <button
            className={`button ${resetBtnClass || activeClass || ""}`}
            onClick={onClick}
            style={style}
        >
            {children}{typeof(children) === "number" ? "%" : ""}
        </button>
    );
};

export default Button;