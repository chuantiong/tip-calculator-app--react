const Button = ({ children, onClick, style }) => {
    return (
        <button
            className="button"
            onClick={onClick}
            style={style}
        >
            {children}%
        </button>
    );
};

export default Button;