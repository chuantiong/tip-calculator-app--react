import React, { useState, useEffect } from 'react';
import dollarIcon from '../assets/icon-dollar.svg';
import personIcon from '../assets/icon-person.svg';
import InputField from '../elements/InputField';
import Label from '../elements/Label';
import Placeholder from '../elements/Placeholder';
import Buttons from './Buttons';
import Button from '../elements/Button';
import HelperText from '../elements/HelperText';
import { buttonData } from '../buttonData';
import { useTipContext } from '../contexts/TipContext';
import { useInputDataContext } from '../contexts/InputDataContext';

const Control = (props) => {
    const { tipAmount, setTipAmount, total, setTotal } = useTipContext();
    const { data, setData } = useInputDataContext();
    const { tipSelect, setTipSelect } = props;

    const handleSelectTipToggle = (id, value) => {
        setTipSelect(id === tipSelect ? true : id);

        // Clear customTip value if custom input is clicked
        if (id === tipSelect) {
            setData(prevData => ({
                ...prevData,
                customTip: '',
                tip: '',
            }));
        } else {
            setData(prevData => ({
                ...prevData,
                customTip: '',
                tip: value,
            }));
        }
    };

    const handleCustomTip = () => {
        setTipSelect(false);

        // Clear tip value if custom input is clicked
        setData(prevData => ({
            ...prevData,
            tip: '',
        }));
    };

    const handleInput = (e) => {
        const { name, value } = e.target;
        // Check if the input has numeric value
        let inputValue = e.target.value.trim(); // Remove leading/trailing spaces
        inputValue = inputValue.replace(/^0+/, '0'); // Replace multiple leading zeros with a single zero
        const numericValue = inputValue.replace(/[^\d.]/g, ''); // Remove non-numeric characters

        setData(prevData => ({
            ...prevData,
            [name]: numericValue,
        }));
    };

    // Calculation
    useEffect(() => {
        // Check the numberOfPeople is division by 0
        if (data.numberOfPeople !== '' && Number(data.numberOfPeople) !== 0) {
            const calcTip = (data.bill * (data.tip || data.customTip)) / 100;
            const calcTipAmountPerPerson = calcTip / data.numberOfPeople;
            const calcTotalPerPerson = (data.bill / data.numberOfPeople) + calcTipAmountPerPerson;

            setTipAmount(prevData => prevData = calcTipAmountPerPerson.toFixed(2));
            setTotal(prevData => prevData = calcTotalPerPerson.toFixed(2));
        } else {
            setTipAmount(prevData => prevData = 0.00.toFixed(2))
            setTotal(prevData => prevData = 0.00.toFixed(2))
        }
    }, [data]);

    return (
        <div className="control">
            <InputField>
                <Label htmlFor="bill">Bill</Label>
                <Placeholder
                    type="text"
                    url={dollarIcon}
                    id="bill"
                    placeholder="0"
                    name="bill"
                    value={data.bill}
                    onChange={handleInput}
                />
            </InputField>
            <InputField>
                <Label htmlFor="select-tip">Select Tip %</Label>
                <Buttons>
                    {buttonData.map((item) => {
                        const { id, value } = item
                        return (
                        <Button
                            key={id}
                            onClick={() => handleSelectTipToggle(id, value)}
                            activeClass={tipSelect === id ? "active" : ""}
                            name="tip"
                            value={value}
                        >
                            {value}
                        </Button>
                        )
                    })}
                    <Placeholder
                        type="text"
                        customClass="input-field-custom"
                        placeholder="Custom"
                        onClick={handleCustomTip}
                        name="customTip"
                        value={data.customTip}
                        onChange={handleInput}
                    />
                </Buttons>
            </InputField>
            <InputField>
                <div className="label-wrapper">
                    <Label htmlFor="number-of-people">Number of People</Label>
                    <HelperText
                        numberOfPeople={data.numberOfPeople}
                    >
                        Can't be zero
                    </HelperText>
                </div>
                <Placeholder
                    type="text"
                    url={personIcon}
                    id="number-of-people"
                    placeholder="0"
                    name="numberOfPeople"
                    value={data.numberOfPeople}
                    onChange={handleInput}
                    numberOfPeople={data.numberOfPeople}
                />
            </InputField>
        </div>
    );
};

export default Control;