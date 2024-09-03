export default function DynamicUserInput({userInput, handleChange}) {



     // that's the other way of handling the logic of user changes!

    return (
        <section id="user-input">
            <div
                className='input-group'
            >
                <p>
                    <label>Initial Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.initialInvestment}
                        onChange={(event) => {handleChange('initialInvestment', event.target.value)}}
                    />
                </p>
                <p>
                    <label>Annual Investment</label>
                    <input
                        type="number"
                        required
                        value={userInput.annualInvestment}
                        onChange={(event) => {handleChange('annualInvestment', event.target.value)}}
                    />
                </p>
            </div>
            <div
                className='input-group'
            >
                <p>
                    <label>Expected Return</label>
                    <input
                        type="number"
                        required
                        value={userInput.expectedReturn}
                        onChange={(event) => {handleChange('expectedReturn', event.target.value)}}
                    />
                </p>
                <p>
                    <label>Duration</label>
                    <input
                        type="number"
                        required
                        value={userInput.duration}
                        onChange={(event) => {handleChange('duration', event.target.value)}}
                    />
                </p>
            </div>
        </section>
    )
}