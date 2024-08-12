export default function UserInput({labelValue, inputValue, handleChange}) {

    return (
        <>
            <div
                className='input-group'
            >
                <label
                    id='user-input'
                >
                    {labelValue}
                </label>
                <input
                    id='user-input'
                    value={inputValue}
                    onChange={handleChange}
                />
            </div>
        </>
    );
}