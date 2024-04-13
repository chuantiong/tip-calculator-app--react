import React,  { useState } from 'react';
import Control from './Control';
import Display from './Display';
import { TipProvider } from '../contexts/TipContext';
import { InputDataProvider } from '../contexts/InputDataContext';

const Section = () => {
    const [tipSelect, setTipSelect] = useState(false);

    return (
        <InputDataProvider>
            <TipProvider>
                <section className='container'>
                    <Control
                        tipSelect={tipSelect}
                        setTipSelect={setTipSelect}
                    />
                    <Display
                        setTipSelect={setTipSelect}
                    />
                </section>
            </TipProvider>
        </InputDataProvider>
    );
};

export default Section;