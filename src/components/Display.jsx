import Button from '../elements/Button';
import TotalAmount from './TotalAmount';
import { useTipContext } from "../contexts/TipContext";
import { useInputDataContext } from '../contexts/InputDataContext';

const Display = (props) => {
    const { tipAmount, setTipAmount, total, setTotal } = useTipContext();
    const { data, setData } = useInputDataContext();
    const { setTipSelect } = props;

    // Check values in order to active reset button
    const valuesToCheck = [data.bill, data.tip, data.customTip, data.numberOfPeople, tipAmount, total];
    const hasPositiveValue = valuesToCheck.some(value => value > 0);
    const variantClass = hasPositiveValue ? "button-reset-active" : "button-reset";

    // Reset all data
    const handleResetClick = () => {
        setData(prevData => ({
            ...prevData,
            bill: '',
            numberOfPeople: '',
            customTip: '',
            tip: '',
        }));
        setTipAmount(prevData => prevData = 0.00.toFixed(2));
        setTotal(prevData => prevData = 0.00.toFixed(2));
        setTipSelect(prevState => prevState = false)
    };

    return (
        <div className="display">
            <TotalAmount
                label='Tip Amount'
                value={tipAmount}
            />
            <TotalAmount
                label='Total'
                value={total}
            />
            <Button
                variantClass={variantClass}
                value='reset'
                onClick={handleResetClick}
            >
                RESET
            </Button>
        </div>
    );
};

export default Display;