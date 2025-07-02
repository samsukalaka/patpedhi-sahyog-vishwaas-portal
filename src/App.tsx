
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/contexts/AuthContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import About from "./pages/About";
import Deposits from "./pages/Deposits";
import Loans from "./pages/Loans";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import ApplyMembership from "./pages/ApplyMembership";
import OpenAccount from "./pages/OpenAccount";
import ApplyDeposit from "./pages/ApplyDeposit";
import ApplyLoan from "./pages/ApplyLoan";
import BookAppointment from "./pages/BookAppointment";
import MemberDashboard from "./pages/MemberDashboard";
import StaffDashboard from "./pages/StaffDashboard";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

// Protected Route Component
const ProtectedRoute = ({ children, requiredRole }: { children: React.ReactNode; requiredRole?: 'member' | 'staff' }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!user) {
    return <Navigate to="/login" replace />;
  }
  
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Public Route Component (only accessible when not logged in)
const PublicRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (user) {
    // Redirect to appropriate dashboard based on role
    return <Navigate to={user.role === 'staff' ? '/staff-dashboard' : '/member-dashboard'} replace />;
  }
  
  return <>{children}</>;
};

// Main Layout Component
const MainLayout = ({ children }: { children: React.ReactNode }) => (
  <div className="min-h-screen bg-white flex flex-col">
    <Navbar />
    <main className="flex-grow">
      {children}
    </main>
    <Footer />
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            {/* Public routes with layout */}
            <Route path="/" element={<MainLayout><Index /></MainLayout>} />
            <Route path="/about" element={<MainLayout><About /></MainLayout>} />
            <Route path="/deposits" element={<MainLayout><Deposits /></MainLayout>} />
            <Route path="/loans" element={<MainLayout><Loans /></MainLayout>} />
            <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="/apply-membership" element={<MainLayout><ApplyMembership /></MainLayout>} />
            <Route path="/open-account" element={<MainLayout><OpenAccount /></MainLayout>} />
            <Route path="/apply-deposit" element={<MainLayout><ApplyDeposit /></MainLayout>} />
            <Route path="/apply-loan" element={<MainLayout><ApplyLoan /></MainLayout>} />
            <Route path="/book-appointment" element={<MainLayout><BookAppointment /></MainLayout>} />
            
            {/* Login route - only accessible when not logged in */}
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            
            {/* Protected routes - no layout */}
            <Route path="/member-dashboard" element={
              <ProtectedRoute requiredRole="member">
                <MemberDashboard />
              </ProtectedRoute>
            } />
            <Route path="/staff-dashboard" element={
              <ProtectedRoute requiredRole="staff">
                <StaffDashboard />
              </ProtectedRoute>
            } />
            
            <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
