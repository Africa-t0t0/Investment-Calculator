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
    const initialInvestmentValueColumn = investmentResults[0].valueEndOfYear - investmentResults[0].interest - investmentResults[0].annualInvestment

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
                    {investmentResults.map((result, index) => {
                    const totalInterest = result.valueEndOfYear - result.annualInvestment * result.year - initialInvestmentValueColumn;
                    const totalAmmountInvested = result.valueEndOfYear - totalInterest;
                    return (
                        <tr key={index}>
                            <td>{result.year}</td>
                            <td>{formatter.format(result.valueEndOfYear)}</td>
                            <td>{formatter.format(result.interest)}</td>
                            <td>{formatter.format(totalInterest)}</td>
                            <td>{formatter.format(totalAmmountInvested)}</td>
                        </tr>
                    )
                    }
                    )}
                </tbody>
            </table>
        </>
    );
}