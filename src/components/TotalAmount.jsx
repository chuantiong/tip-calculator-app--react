const TotalAmount = (props) => {

    return (
        <div className="total-amount">
            <div className="total-amount-label">{props.label}
                <span className='sm-label'>/ person</span>
            </div>
            <div className='total-amount-number'>
                ${props.value}
            </div>
        </div>
    );
};

export default TotalAmount;