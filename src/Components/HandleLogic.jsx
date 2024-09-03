import { useState } from 'react';
// import UserInputBox from './UserInputBox';
import DynamicUserInput from './DynamicChange';
import ResultTable from './ResultTable';

export default function HandleLogic() {
    // const [initialInvestmentValue, setInitialInvestment] = useState(10000);
    // const [annualInvestmentValue, setAnnualInvestment] = useState(1200);
    // const [expectedReturnValue, setExpectedReturn] = useState(6);
    // const [durationValue, setDuration] = useState(10);
    const [userInput, setUserInput] = useState({
        initialInvestment: 10000,
        annualInvestment: 1200,
        expectedReturn: 6,
        duration: 6
    });
    /*
    another way of doing this, is by setting a object that has all the variables, like this:

     and then handling the logic for the object.
    */

     function handleChange(inputIdentifier, newValue) {
        setUserInput(prevUserInput => {
            return {
                ...prevUserInput,
                [inputIdentifier]: newValue
            }
        })
     }


     // then we should use a function to handle all the changes


    // const areAllValuesFilled = () => {
    //     return (
    //         initialInvestmentValue !== '' &&
    //         annualInvestmentValue !== '' &&
    //         expectedReturnValue !== '' &&
    //         durationValue !== ''
    //     );
    // }

    const areAllValuesFilled2 = () => {
        return (
            useState.initialInvestment !== '' &
            useState.annualInvestment !== '' &
            useState.expectedReturn !== '' &
            useState.duration !== ''
        );
    }

    return (
        <>
            {/* <UserInputBox
                initialInvestmentValue={initialInvestmentValue}
                setInitialInvestment={setInitialInvestment}
                annualInvestmentValue={annualInvestmentValue}
                setAnnualInvestment={setAnnualInvestment}
                expectedReturnValue={expectedReturnValue}
                setExpectedReturn={setExpectedReturn}
                durationValue={durationValue}
                setDuration={setDuration}
            /> */}
            <DynamicUserInput
                userInput={userInput}
                handleChange={handleChange}
            />

            {areAllValuesFilled2() &&
            <ResultTable
                initialInvestmentValue={userInput.initialInvestment}
                annualInvestmentValue={userInput.annualInvestment}
                expectedReturnValue={userInput.expectedReturn}
                durationValue={userInput.duration}
            />}
        </>
    )
}