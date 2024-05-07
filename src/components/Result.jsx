import { calculateInvestmentResults } from "../util/investment.js";

export default function Result({result}) {
  console.log(result)
  const resultData = calculateInvestmentResults({
    initialInvestment:result?.input,
    annualInvestment:result?.annualInvest,
    expectedReturn:result?.expectReturn,
    duration:result?.duration,
  });
  console.log(resultData)
  return (
    <table id="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Investment value</th>
          <th>interest(Year)</th>
          <th>Total Interest</th>
          <th>Invested capital</th>
        </tr>
      </thead>
      <tbody>
        {resultData.map((data) => {
          return (
            <tr key={data.year}>
              <td>{data.year}</td>
              <td>{data.valueEndOfYear}</td>
              <td>{data.interest ||0 }</td>
              <td>{data.annualInvestment}</td>
              <td>2</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
