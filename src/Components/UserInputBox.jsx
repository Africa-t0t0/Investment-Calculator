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

    return (
        <section id="user-input">
            <div
                className='input-group'
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
        </div>
        <div
            className='input-group'
        >
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
        </section>
    )
}