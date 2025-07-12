import React, { useState } from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { 
  Users, 
  LogOut, 
  Search, 
  Plus, 
  FileText, 
  PiggyBank, 
  CreditCard, 
  Calendar,
  CheckCircle,
  XCircle,
  Clock
} from 'lucide-react';

const StaffDashboard = () => {
  const { user, logout } = useAuth();
  const [searchTerm, setSearchTerm] = useState('');

  // Dummy data for staff dashboard
  const dashboardStats = {
    totalMembers: 1250,
    totalDeposits: 12500000,
    totalLoans: 8750000,
    pendingApplications: 15
  };

  const recentMembers = [
    { id: 'MP001', name: 'राम शर्मा', email: 'ram@email.com', joinDate: '2024-07-01', status: 'Active' },
    { id: 'MP002', name: 'सीता देवी', email: 'sita@email.com', joinDate: '2024-07-02', status: 'Active' },
    { id: 'MP003', name: 'गीता पटेल', email: 'geeta@email.com', joinDate: '2024-07-03', status: 'Pending' }
  ];

  const pendingApplications = [
    { id: 'LA001', type: 'Loan', applicant: 'अमित कुमार', amount: 500000, date: '2024-07-01', status: 'Pending' },
    { id: 'DA001', type: 'Deposit', applicant: 'सुनीता शर्मा', amount: 100000, date: '2024-07-02', status: 'Under Review' },
    { id: 'MA001', type: 'Membership', applicant: 'विकास गुप्ता', amount: 0, date: '2024-07-03', status: 'Pending' }
  ];

  const recentTransactions = [
    { id: 'T001', member: 'राम शर्मा (MP001)', type: 'Deposit', amount: 50000, date: '2024-07-03' },
    { id: 'T002', member: 'सीता देवी (MP002)', type: 'Withdrawal', amount: -25000, date: '2024-07-03' },
    { id: 'T003', member: 'गीता पटेल (MP003)', type: 'Loan EMI', amount: 15000, date: '2024-07-02' }
  ];

  const upcomingAppointments = [
    { id: 'AP001', member: 'अमित कुमार', purpose: 'Loan Discussion', date: '2024-07-05', time: '10:00 AM' },
    { id: 'AP002', member: 'सुनीता शर्मा', purpose: 'Account Opening', date: '2024-07-05', time: '2:00 PM' },
    { id: 'AP003', member: 'विकास गुप्ता', purpose: 'Investment Advice', date: '2024-07-06', time: '11:00 AM' }
  ];

  const handleApproveApplication = (id: string) => {
    console.log('Approving application:', id);
    // Implementation for approval
  };

  const handleRejectApplication = (id: string) => {
    console.log('Rejecting application:', id);
    // Implementation for rejection
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-primary-blue text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-3">
            <Users className="h-8 w-8" />
            <div>
              <h1 className="text-xl font-bold">Staff Dashboard - {user?.name}</h1>
              <p className="text-sm opacity-80">Staff ID: {user?.staffId}</p>
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
        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-6">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Members</p>
                  <p className="text-2xl font-bold text-primary-blue">{dashboardStats.totalMembers}</p>
                </div>
                <Users className="h-8 w-8 text-primary-blue" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Deposits</p>
                  <p className="text-2xl font-bold text-green-600">₹{(dashboardStats.totalDeposits / 1000000).toFixed(1)}M</p>
                </div>
                <PiggyBank className="h-8 w-8 text-green-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Total Loans</p>
                  <p className="text-2xl font-bold text-orange-600">₹{(dashboardStats.totalLoans / 1000000).toFixed(1)}M</p>
                </div>
                <CreditCard className="h-8 w-8 text-orange-600" />
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-600">Pending Applications</p>
                  <p className="text-2xl font-bold text-red-600">{dashboardStats.pendingApplications}</p>
                </div>
                <Clock className="h-8 w-8 text-red-600" />
              </div>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="members">Members</TabsTrigger>
            <TabsTrigger value="applications">Applications</TabsTrigger>
            <TabsTrigger value="transactions">Transactions</TabsTrigger>
            <TabsTrigger value="appointments">Appointments</TabsTrigger>
            <TabsTrigger value="reports">Reports</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {/* Recent Members */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary-blue">Recent Members</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentMembers.map((member) => (
                      <div key={member.id} className="flex justify-between items-center p-3 border rounded">
                        <div>
                          <p className="font-medium">{member.name}</p>
                          <p className="text-sm text-gray-600">{member.id}</p>
                        </div>
                        <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
                          {member.status}
                        </Badge>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Recent Transactions */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-primary-blue">Recent Transactions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {recentTransactions.map((transaction) => (
                      <div key={transaction.id} className="flex justify-between items-center p-3 border rounded">
                        <div>
                          <p className="font-medium">{transaction.member}</p>
                          <p className="text-sm text-gray-600">{transaction.type}</p>
                        </div>
                        <div className="text-right">
                          <p className={`font-bold ${transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                            {transaction.amount >= 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                          </p>
                          <p className="text-xs text-gray-500">{transaction.date}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="members" className="space-y-4">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-2">
                <Search className="h-4 w-4 text-gray-500" />
                <Input
                  placeholder="Search members..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-64"
                />
              </div>
              <Button className="bg-primary-blue hover:bg-primary-blue/90">
                <Plus className="h-4 w-4 mr-2" />
                Add Member
              </Button>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Member ID</TableHead>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Join Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentMembers.map((member) => (
                      <TableRow key={member.id}>
                        <TableCell>{member.id}</TableCell>
                        <TableCell>{member.name}</TableCell>
                        <TableCell>{member.email}</TableCell>
                        <TableCell>{member.joinDate}</TableCell>
                        <TableCell>
                          <Badge variant={member.status === 'Active' ? 'default' : 'secondary'}>
                            {member.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">View</Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="applications" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary-blue">Pending Applications</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Application ID</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Applicant</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {pendingApplications.map((application) => (
                      <TableRow key={application.id}>
                        <TableCell>{application.id}</TableCell>
                        <TableCell>{application.type}</TableCell>
                        <TableCell>{application.applicant}</TableCell>
                        <TableCell>
                          {application.amount > 0 ? `₹${application.amount.toLocaleString()}` : '-'}
                        </TableCell>
                        <TableCell>{application.date}</TableCell>
                        <TableCell>
                          <Badge variant="secondary">{application.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleApproveApplication(application.id)}
                              className="text-green-600 border-green-600 hover:bg-green-50"
                            >
                              <CheckCircle className="h-3 w-3 mr-1" />
                              Approve
                            </Button>
                            <Button 
                              size="sm" 
                              variant="outline"
                              onClick={() => handleRejectApplication(application.id)}
                              className="text-red-600 border-red-600 hover:bg-red-50"
                            >
                              <XCircle className="h-3 w-3 mr-1" />
                              Reject
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="transactions" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary-blue">Recent Transactions</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Transaction ID</TableHead>
                      <TableHead>Member</TableHead>
                      <TableHead>Type</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Date</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {recentTransactions.map((transaction) => (
                      <TableRow key={transaction.id}>
                        <TableCell>{transaction.id}</TableCell>
                        <TableCell>{transaction.member}</TableCell>
                        <TableCell>{transaction.type}</TableCell>
                        <TableCell className={transaction.amount >= 0 ? 'text-green-600' : 'text-red-600'}>
                          {transaction.amount >= 0 ? '+' : ''}₹{Math.abs(transaction.amount).toLocaleString()}
                        </TableCell>
                        <TableCell>{transaction.date}</TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="appointments" className="space-y-4">
            <Card>
              <CardHeader>
                <CardTitle className="text-primary-blue">Upcoming Appointments</CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Appointment ID</TableHead>
                      <TableHead>Member</TableHead>
                      <TableHead>Purpose</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {upcomingAppointments.map((appointment) => (
                      <TableRow key={appointment.id}>
                        <TableCell>{appointment.id}</TableCell>
                        <TableCell>{appointment.member}</TableCell>
                        <TableCell>{appointment.purpose}</TableCell>
                        <TableCell>{appointment.date}</TableCell>
                        <TableCell>{appointment.time}</TableCell>
                        <TableCell>
                          <Button variant="outline" size="sm">
                            <Calendar className="h-3 w-3 mr-1" />
                            Reschedule
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reports" className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <FileText className="h-12 w-12 text-primary-blue mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Member Report</h3>
                  <p className="text-sm text-gray-600">Generate member statistics and reports</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <PiggyBank className="h-12 w-12 text-green-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Deposits Report</h3>
                  <p className="text-sm text-gray-600">Track deposit trends and performance</p>
                </CardContent>
              </Card>

              <Card className="cursor-pointer hover:shadow-lg transition-shadow">
                <CardContent className="p-6 text-center">
                  <CreditCard className="h-12 w-12 text-orange-600 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Loans Report</h3>
                  <p className="text-sm text-gray-600">Monitor loan portfolio and recovery</p>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default StaffDashboard;