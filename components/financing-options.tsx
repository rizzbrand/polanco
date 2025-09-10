"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Calculator, CreditCard, Banknote } from "lucide-react"

interface FinancingOptionsProps {
  carPrice: number
}

export function FinancingOptions({ carPrice }: FinancingOptionsProps) {
  const [downPayment, setDownPayment] = useState(carPrice * 0.2)
  const [loanTerm, setLoanTerm] = useState(60)
  const [interestRate, setInterestRate] = useState(4.5)

  const calculateMonthlyPayment = () => {
    const principal = carPrice - downPayment
    const monthlyRate = interestRate / 100 / 12
    const numPayments = loanTerm

    if (monthlyRate === 0) return principal / numPayments

    const monthlyPayment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, numPayments))) /
      (Math.pow(1 + monthlyRate, numPayments) - 1)

    return monthlyPayment
  }

  const monthlyPayment = calculateMonthlyPayment()

  return (
    <Card className="glass-gold">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-foreground">
          <Calculator className="w-5 h-5 text-primary" />
          Financing Options
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Financing Calculator */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="downPayment" className="text-foreground">
              Down Payment
            </Label>
            <Input
              id="downPayment"
              type="number"
              value={downPayment}
              onChange={(e) => setDownPayment(Number(e.target.value))}
              className="glass mt-1"
            />
          </div>
          <div>
            <Label htmlFor="loanTerm" className="text-foreground">
              Loan Term (months)
            </Label>
            <Select value={loanTerm.toString()} onValueChange={(value) => setLoanTerm(Number(value))}>
              <SelectTrigger className="glass mt-1">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="36">36 months</SelectItem>
                <SelectItem value="48">48 months</SelectItem>
                <SelectItem value="60">60 months</SelectItem>
                <SelectItem value="72">72 months</SelectItem>
                <SelectItem value="84">84 months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        <div>
          <Label htmlFor="interestRate" className="text-foreground">
            Interest Rate (%)
          </Label>
          <Input
            id="interestRate"
            type="number"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="glass mt-1"
          />
        </div>

        {/* Payment Summary */}
        <div className="glass p-4 rounded-lg">
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <p className="text-sm text-muted-foreground">Monthly Payment</p>
              <p className="text-2xl font-bold text-primary">
                ${monthlyPayment.toLocaleString("en-US", { maximumFractionDigits: 0 })}
              </p>
            </div>
            <div>
              <p className="text-sm text-muted-foreground">Total Interest</p>
              <p className="text-2xl font-bold text-foreground">
                $
                {(monthlyPayment * loanTerm - (carPrice - downPayment)).toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })}
              </p>
            </div>
          </div>
        </div>

        {/* Financing Options */}
        <div className="space-y-3">
          <div className="flex items-center justify-between p-3 glass rounded-lg">
            <div className="flex items-center gap-3">
              <CreditCard className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Bank Financing</p>
                <p className="text-sm text-muted-foreground">Competitive rates from 3.9% APR</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="glass bg-transparent">
              Apply
            </Button>
          </div>

          <div className="flex items-center justify-between p-3 glass rounded-lg">
            <div className="flex items-center gap-3">
              <Banknote className="w-5 h-5 text-primary" />
              <div>
                <p className="font-medium text-foreground">Cash Purchase</p>
                <p className="text-sm text-muted-foreground">5% discount for full payment</p>
              </div>
            </div>
            <Button size="sm" variant="outline" className="glass bg-transparent">
              Inquire
            </Button>
          </div>
        </div>

        <Button className="w-full bg-primary text-primary-foreground hover:bg-primary/90">Get Pre-Approved</Button>
      </CardContent>
    </Card>
  )
}
