import { useState } from 'react';
import UserInputBox from './UserInputBox';
import ResultTable from './ResultTable';

export default function HandleLogic() {
    const [initialInvestmentValue, setInitialInvestment] = useState('');
    const [annualInvestmentValue, setAnnualInvestment] = useState('');
    const [expectedReturnValue, setExpectedReturn] = useState('');
    const [durationValue, setDuration] = useState('');

    const areAllValuesFilled = () => {
        return (
            initialInvestmentValue !== '' &&
            annualInvestmentValue !== '' &&
            expectedReturnValue !== '' &&
            durationValue !== ''
        )
    }

    return (
        <>
            <UserInputBox
                initialInvestmentValue={initialInvestmentValue}
                setInitialInvestment={setInitialInvestment}
                annualInvestmentValue={annualInvestmentValue}
                setAnnualInvestment={setAnnualInvestment}
                expectedReturnValue={expectedReturnValue}
                setExpectedReturn={setExpectedReturn}
                durationValue={durationValue}
                setDuration={setDuration}
            />

            {areAllValuesFilled() &&
            <ResultTable
                initialInvestmentValue={initialInvestmentValue}
                annualInvestmentValue={annualInvestmentValue}
                expectedReturnValue={expectedReturnValue}
                durationValue={durationValue}
            />}
        </>
    )
}