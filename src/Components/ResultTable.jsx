import { calculateInvestmentResults, formatter } from "../util/investment";

export default function ResultTable({
    initialInvestmentValue,
    annualInvestmentValue,
    expectedReturnValue,
    durationValue,
}) {

    const investmentResults = calculateInvestmentResults(
        {initialInvestment: initialInvestmentValue, annualInvestment: annualInvestmentValue, expectedReturn: expectedReturnValue, duration: durationValue}
    );
    console.log('result', investmentResults)
    return (
        <>
            <table id='result'>
                <thead id='result'>
                    <tr>
                        <th scope='col'>Year</th>
                        <th scope='col'>Investment Value</th>
                        <th scope='col'>Interest (Year)</th>
                        <th scope='col'>Total Interest</th>
                        <th scope='col'>Invested Capital</th>
                    </tr>
                </thead>
                <tbody id='result'>
                    {investmentResults.map((result, index) => (
                        <tr key={index}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{result.interest}</td>
                            <td>{result.year}</td>
                            <td>{result.year}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );
}