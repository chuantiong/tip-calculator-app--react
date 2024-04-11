const TotalAmount = (props) => {
    return (
        <div className="total-amount">
            <div className="total-amount-label">{props.label}
                <span className='sm-label'>/ person</span>
            </div>
            <div className='total-amount-number'>$0.00</div>
        </div>
    );
};

export default TotalAmount;