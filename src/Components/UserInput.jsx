export default function UserInput({labelValue, inputValue, handleChange}) {

    return (
        <>
            <p>
                <label
                >
                    {labelValue}
                </label>
                <input
                    value={inputValue}
                    onChange={handleChange}
                    type='number'
                    required
                />
            </p>
        </>
    );
}