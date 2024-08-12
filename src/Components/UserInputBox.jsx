import UserInput from "./UserInput";

export default function UserInputBox({
    initialInvestmentValue,
    setInitialInvestment,
    annualInvestmentValue,
    setAnnualInvestment,
    expectedReturnValue,
    setExpectedReturn,
    durationValue,
    setDuration
    })

    {

    const handleInputChange = (event, setValueFunction) => {
        let value = event.target.value
        setValueFunction(value)
    }
    console.log("initialInvestment", initialInvestmentValue)


    return (
        <>
            <div
                className=''
                id='user-input'
            >
                <UserInput
                    labelValue={'Initial Investment'}
                    inputValue={initialInvestmentValue}
                    handleChange={(event) => handleInputChange(event, setInitialInvestment)}
                />
                <UserInput
                    labelValue={'Annual Investment'}
                    inputValue={annualInvestmentValue}
                    handleChange={(event) => handleInputChange(event, setAnnualInvestment)}
                />
                <UserInput
                    labelValue={'Expected Return'}
                    inputValue={expectedReturnValue}
                    handleChange={(event) => handleInputChange(event, setExpectedReturn)}
                />
                <UserInput
                    labelValue={'Duration'}
                    inputValue={durationValue}
                    handleChange={(event) => handleInputChange(event, setDuration)}
                />
            </div>
        </>
    )
}