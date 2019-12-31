"use strict";
exports.__esModule = true;
var IncomeStatement_1 = require("../enums/IncomeStatement");
var IncomeStatement = /** @class */ (function () {
    function IncomeStatement(Statement) {
        this.Revenue = {
            sign: true,
            name: IncomeStatement_1.IS.Revenue
        };
        this.CostOfGoodsSold = {
            sign: false,
            name: IncomeStatement_1.IS.CostOfGoodsSold
        };
        this.GrossProfit = {
            name: IncomeStatement_1.IS.GrossProfit,
            values: [
                { sign: true, name: IncomeStatement_1.IS.Revenue },
                { sign: false, name: IncomeStatement_1.IS.CostOfGoodsSold }
            ]
        };
        this.SalariesAndBenefits = {
            sign: false,
            name: IncomeStatement_1.IS.SalariesAndBenefits
        };
        this.RentAndOverhead = {
            sign: false,
            name: IncomeStatement_1.IS.RentAndOverhead
        };
        this.DepreciationAndAmortization = {
            sign: false,
            name: IncomeStatement_1.IS.DepreciationAndAmortization
        };
        this.Interest = {
            sign: false,
            name: IncomeStatement_1.IS.Interest
        };
        this.Other = {
            sign: false,
            name: IncomeStatement_1.IS.Other
        };
        this.TotalExpenses = {
            name: IncomeStatement_1.IS.TotalExpenses,
            values: [
                { sign: false, name: IncomeStatement_1.IS.SalariesAndBenefits },
                { sign: false, name: IncomeStatement_1.IS.RentAndOverhead },
                { sign: false, name: IncomeStatement_1.IS.DepreciationAndAmortization },
                { sign: false, name: IncomeStatement_1.IS.Interest },
                { sign: false, name: IncomeStatement_1.IS.Other },
            ]
        };
        this.EarningsBeforeTax = {
            name: IncomeStatement_1.IS.EarningsBeforeTax,
            values: [
                { sign: true, name: IncomeStatement_1.IS.GrossProfit },
                { sign: false, name: IncomeStatement_1.IS.TotalExpenses },
            ]
        };
        this.Taxes = {
            sign: false,
            name: IncomeStatement_1.IS.Taxes
        };
        this.NetEarnings = {
            name: IncomeStatement_1.IS.NetEarnings,
            values: [
                { sign: true, name: IncomeStatement_1.IS.Taxes },
                { sign: false, name: IncomeStatement_1.IS.EarningsBeforeTax },
            ]
        };
        this.EBITDA = {
            name: IncomeStatement_1.IS.EBITDA,
            values: [
                { sign: false, name: IncomeStatement_1.IS.EarningsBeforeTax },
                { sign: false, name: IncomeStatement_1.IS.DepreciationAndAmortization }
            ]
        };
        this.Statement = Statement;
    }
    IncomeStatement.describe = function (instance) {
        return Object.getOwnPropertyNames(instance);
    };
    IncomeStatement.toObject = function (instance) {
        var properties = IncomeStatement.describe(instance);
        return properties.map(function (p) {
            var _a;
            return _a = {}, _a[p] = instance.get(p), _a;
        });
    };
    /**
     * Returns the computed value for a name
     * @param name
     * @returns computed aggregate value for name
     */
    IncomeStatement.prototype.get = function (name) {
        return 0;
    };
    /**
     * Computes the aggregate
     * @param aggregate
     * @returns computed aggregate value
     */
    IncomeStatement.prototype.compute = function (aggregate) {
        return 0;
    };
    return IncomeStatement;
}());
exports["default"] = IncomeStatement;
