
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Eye, EyeOff, Lock, Mail, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [memberData, setMemberData] = useState({
    email: '',
    password: '',
    remember: false
  });
  const [staffData, setStaffData] = useState({
    staffId: '',
    password: ''
  });
  const [activeTab, setActiveTab] = useState('member');
  
  const { login, isLoading } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleMemberSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(memberData.email, memberData.password, 'member');
    
    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome to Patpedhi Member Portal",
      });
      navigate('/'); // Redirect to homepage instead of dashboard
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try: member@patpedhi.com / member123",
        variant: "destructive",
      });
    }
  };

  const handleStaffSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const success = await login(staffData.staffId, staffData.password, 'staff');
    
    if (success) {
      toast({
        title: "Login Successful",
        description: "Welcome to Patpedhi Staff Dashboard",
      });
      navigate('/staff-dashboard');
    } else {
      toast({
        title: "Login Failed",
        description: "Invalid credentials. Try: staff@patpedhi.com / staff123",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-12 px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <div className="bg-gold p-3 rounded-full">
              <span className="text-primary-blue font-bold text-2xl">पत</span>
            </div>
            <div>
              <h1 className="font-bold text-2xl text-primary-blue">Patpedhi</h1>
              <p className="text-sm text-gray-600 font-marathi">सहकारी पतसंस्था</p>
            </div>
          </div>
          <h2 className="text-xl font-semibold text-gray-800">Welcome Back</h2>
          <p className="text-gray-600 font-marathi">आपले स्वागत आहे</p>
        </div>

        <Tabs defaultValue="member" className="w-full" onValueChange={setActiveTab}>
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="member">Member Login</TabsTrigger>
            <TabsTrigger value="staff">Staff Login</TabsTrigger>
          </TabsList>
          
          {/* Demo Credentials Info */}
          <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded-md">
            <p className="text-sm text-blue-800 font-medium mb-1">Demo Credentials:</p>
            {activeTab === 'member' ? (
              <p className="text-xs text-blue-600">Email: member@patpedhi.com | Password: member123</p>
            ) : (
              <p className="text-xs text-blue-600">Email: staff@patpedhi.com | Password: staff123</p>
            )}
          </div>

          <TabsContent value="member">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-primary-blue">Member Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleMemberSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email / Member ID</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="email"
                        type="email"
                        placeholder="Enter your email or member ID"
                        className="pl-10"
                        value={memberData.email}
                        onChange={(e) => setMemberData({...memberData, email: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        value={memberData.password}
                        onChange={(e) => setMemberData({...memberData, password: e.target.value})}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <label className="flex items-center space-x-2 text-sm">
                      <input 
                        type="checkbox" 
                        className="rounded border-gray-300"
                        checked={memberData.remember}
                        onChange={(e) => setMemberData({...memberData, remember: e.target.checked})}
                      />
                      <span>Remember me</span>
                    </label>
                    <Link to="/forgot-password" className="text-sm text-primary-blue hover:underline">
                      Forgot Password?
                    </Link>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-primary-blue hover:bg-primary-blue/90"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Signing In...' : 'Sign In'}
                  </Button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-sm text-gray-600">
                    Don't have an account? {' '}
                    <Link to="/apply-membership" className="text-primary-blue hover:underline font-semibold">
                      Apply for Membership
                    </Link>
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="staff">
            <Card>
              <CardHeader>
                <CardTitle className="text-center text-primary-blue">Staff Portal</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleStaffSubmit} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="staff-id">Staff ID</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="staff-id"
                        type="text"
                        placeholder="Enter your staff ID"
                        className="pl-10"
                        value={staffData.staffId}
                        onChange={(e) => setStaffData({...staffData, staffId: e.target.value})}
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="staff-password">Password</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                      <Input
                        id="staff-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Enter your password"
                        className="pl-10 pr-10"
                        value={staffData.password}
                        onChange={(e) => setStaffData({...staffData, password: e.target.value})}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <Button 
                    type="submit" 
                    className="w-full bg-gold text-primary-blue hover:bg-gold/90"
                    disabled={isLoading}
                  >
                    {isLoading ? 'Logging In...' : 'Staff Login'}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Login;
