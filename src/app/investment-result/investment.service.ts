

export class InvestmentService {

    private initialInvestment: number;
    private annualInvestment: number;
    private expectedReturn: number;
    private duration: number;

    public annualData: any[] = [];

    constructor(
        initialInvestment: number = 0, annualInvestment: number = 0, expectedReturn: number = 0, duration: number = 0
    ) {
        this.initialInvestment = initialInvestment;
        this.annualInvestment = annualInvestment;
        this.expectedReturn = expectedReturn;
        this.duration = duration;
    }

    calculateInvestmentResults() {
        const annualData = [];
        let investmentValue = this.initialInvestment;
      
        for (let i = 0; i < this.duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (this.expectedReturn / 100);
            investmentValue += interestEarnedInYear + this.annualInvestment;
            const totalInterest = investmentValue - this.annualInvestment * year - this.initialInvestment;
          
            annualData.push({
                year: year,
                interest: interestEarnedInYear,
                valueEndOfYear: investmentValue,
                annualInvestment: this.annualInvestment,
                totalInterest: totalInterest,
                totalAmountInvested: this.initialInvestment + this.annualInvestment * year,
            });
        }
        this.annualData = annualData;
        return annualData;
      }


}