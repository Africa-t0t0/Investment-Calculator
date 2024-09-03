import { useState } from 'react';
import UserInputBox from './UserInputBox';
import ResultTable from './ResultTable';

export default function HandleLogic() {
    const [initialInvestmentValue, setInitialInvestment] = useState(10000);
    const [annualInvestmentValue, setAnnualInvestment] = useState(1200);
    const [expectedReturnValue, setExpectedReturn] = useState(6);
    const [durationValue, setDuration] = useState(10);
    /*
    another way of doing this, is by setting a object that has all the variables, like this:

     and then handling the logic for the object.
    */
     const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 6
    });
     // then we should use a function to handle all the changes

     function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
     }

     // that's the other way of handling the logic of user changes!

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