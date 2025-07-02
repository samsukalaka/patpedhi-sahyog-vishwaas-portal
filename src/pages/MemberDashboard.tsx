import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { User, LogOut, CreditCard, PiggyBank, FileText, Calendar } from 'lucide-react';

const MemberDashboard = () => {
  const { user, logout } = useAuth();

  // Dummy member data
  const memberData = {
    balance: 75000,
    deposits: [
      { id: 'D001', type: 'Fixed Deposit', amount: 50000, rate: 8.5, maturityDate: '2024-12-31' },
      { id: 'D002', type: 'Recurring Deposit', amount: 25000, rate: 7.5, maturityDate: '2025-06-30' }
    ],
    loans: [
      { id: 'L001', type: 'Personal Loan', amount: 100000, outstanding: 45000, emi: 5500, nextDue: '2024-08-15' }
    ],
    transactions: [
      { id: 'T001', type: 'Deposit', amount: 5000, date: '2024-07-01', description: 'Monthly RD' },
      { id: 'T002', type: 'Withdrawal', amount: -2000, date: '2024-06-28', description: 'ATM Withdrawal' },
      { id: 'T003', type: 'Interest', amount: 350, date: '2024-06-30', description: 'FD Interest Credit' }
    ],
    applications: [
      { id: 'A001', type: 'Loan Application', status: 'Under Review', date: '2024-07-02' },
      { id: 'A002', type: 'New Deposit', status: 'Approved', date: '2024-06-25' }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary-blue text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <User className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">स्वागत आहे, {user?.name}</h1>
              <p className="text-sm opacity-80">Member ID: {user?.memberId}</p>
            </div>
          </div>
          <Button 
            onClick={logout}
            variant="outline"
            className="border-white text-white hover:bg-white hover:text-primary-blue"
          >
            <LogOut className="h-4 w-4 mr-2" />
            Logout
          </Button>
        </div>
      </header>

      <div className="container mx-auto p-6">
        {/* Balance Card */}
        <Card className="mb-6 bg-gold text-primary-blue">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-lg font-semibold">Total Balance</p>
                <p className="text-3xl font-bold">₹{memberData.balance.toLocaleString()}</p>
              </div>
              <CreditCard className="h-12 w-12" />
            </div>
          </CardContent>
        </Card>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="deposits">Deposits</TabsTrigger>
            <TabsTrigger value="loans">Loans</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-primary-blue">
                    <PiggyBank className="h-5 w-5 mr-2" />
                    Total Deposits
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">₹{memberData.deposits.reduce((sum, d) => sum + d.amount, 0).toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{memberData.deposits.length} Active Deposits</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-primary-blue">
                    <FileText className="h-5 w-5 mr-2" />
                    Active Loans
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">₹{memberData.loans.reduce((sum, l) => sum + l.outstanding, 0).toLocaleString()}</p>
                  <p className="text-sm text-gray-600">{memberData.loans.length} Active Loans</p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center text-primary-blue">
                    <Calendar className="h-5 w-5 mr-2" />
                    Next EMI Due
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-2xl font-bold">₹{memberData.loans[0]?.emi.toLocaleString() || '0'}</p>
                  <p className="text-sm text-gray-600">{memberData.loans[0]?.nextDue || 'No EMI Due'}</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="deposits" className="space-y-4">
            {memberData.deposits.map((deposit) => (
              <Card key={deposit.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-primary-blue">{deposit.type}</h3>
                      <p className="text-gray-600">Deposit ID: {deposit.id}</p>
                      <p className="text-2xl font-bold mt-2">₹{deposit.amount.toLocaleString()}</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="secondary">{deposit.rate}% Interest</Badge>
                      <p className="text-sm text-gray-600 mt-2">Maturity: {deposit.maturityDate}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="loans" className="space-y-4">
            {memberData.loans.map((loan) => (
              <Card key={loan.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-primary-blue">{loan.type}</h3>
                      <p className="text-gray-600">Loan ID: {loan.id}</p>
                      <p className="text-2xl font-bold mt-2">₹{loan.outstanding.toLocaleString()}</p>
                      <p className="text-sm text-gray-600">Outstanding Amount</p>
                    </div>
                    <div className="text-right">
                      <Badge variant="outline">₹{loan.emi.toLocaleString()} EMI</Badge>
                      <p className="text-sm text-gray-600 mt-2">Next Due: {loan.nextDue}</p>
                      <p className="text-xs text-gray-500">Original: ₹{loan.amount.toLocaleString()}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            {memberData.transactions.map((transaction) => (
              <Card key={transaction.id}>
                <CardContent className="p-4">
                  <div className="flex justify-between items-center">
                    <div>
                      <h4 className="font-medium">{transaction.description}</h4>
                      <p className="text-sm text-gray-600">{transaction.date}</p>
                    </div>
                    <div className="text-right">
                      <p className={`font-bold ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                        {transaction.amount >= 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                      </p>
                      <Badge variant={transaction.amount >= 0 ? 'default' : 'destructive'}>
                        {transaction.type}
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            {memberData.applications.map((application) => (
              <Card key={application.id}>
                <CardContent className="p-6">
                  <div className="flex justify-between items-center">
                    <div>
                      <h3 className="font-semibold text-primary-blue">{application.type}</h3>
                      <p className="text-gray-600">Application ID: {application.id}</p>
                      <p className="text-sm text-gray-600">Applied on: {application.date}</p>
                    </div>
                    <Badge 
                      variant={application.status === 'Approved' ? 'default' : 'secondary'}
                      className={application.status === 'Approved' ? 'bg-green-100 text-green-800' : ''}
                    >
                      {application.status}
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default MemberDashboard;