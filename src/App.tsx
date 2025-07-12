
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

// Protected Route Component for Staff Only
const StaffProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!user || user.role !== 'staff') {
    return <Navigate to="/login" replace />;
  }
  
  return <>{children}</>;
};

// Protected Route Component for Members Only
const MemberProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { user, isLoading } = useAuth();
  
  if (isLoading) {
    return <div className="flex items-center justify-center min-h-screen">Loading...</div>;
  }
  
  if (!user || user.role !== 'member') {
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
  
  if (user && user.role === 'staff') {
    // Only redirect staff to dashboard, let members access public routes
    return <Navigate to="/staff-dashboard" replace />;
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
            {/* Public routes with layout - accessible to everyone including logged-in members */}
            <Route path="/" element={<MainLayout><Index /></MainLayout>} />
            <Route path="/about" element={<MainLayout><About /></MainLayout>} />
            <Route path="/deposits" element={<MainLayout><Deposits /></MainLayout>} />
            <Route path="/loans" element={<MainLayout><Loans /></MainLayout>} />
            <Route path="/services" element={<MainLayout><Services /></MainLayout>} />
            <Route path="/contact" element={<MainLayout><Contact /></MainLayout>} />
            <Route path="/book-appointment" element={<MainLayout><BookAppointment /></MainLayout>} />
            
            {/* Routes that redirect non-members to membership application */}
            <Route path="/open-account" element={<MainLayout><OpenAccount /></MainLayout>} />
            <Route path="/apply-deposit" element={<MainLayout><ApplyDeposit /></MainLayout>} />
            <Route path="/apply-loan" element={<MainLayout><ApplyLoan /></MainLayout>} />
            <Route path="/apply-membership" element={<MainLayout><ApplyMembership /></MainLayout>} />
            
            {/* Login route - redirects staff to dashboard but allows members to access */}
            <Route path="/login" element={<PublicRoute><Login /></PublicRoute>} />
            
            {/* Member dashboard - only accessible to members */}
            <Route path="/member-dashboard" element={
              <MemberProtectedRoute>
                <MemberDashboard />
              </MemberProtectedRoute>
            } />
            
            {/* Staff dashboard - only accessible to staff */}
            <Route path="/staff-dashboard" element={
              <StaffProtectedRoute>
                <StaffDashboard />
              </StaffProtectedRoute>
            } />
            
            <Route path="*" element={<MainLayout><NotFound /></MainLayout>} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
