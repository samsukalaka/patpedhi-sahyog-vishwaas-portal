
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <div className="min-h-screen bg-white flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/about" element={<About />} />
              <Route path="/deposits" element={<Deposits />} />
              <Route path="/loans" element={<Loans />} />
              <Route path="/services" element={<Services />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/apply-membership" element={<ApplyMembership />} />
              <Route path="/open-account" element={<OpenAccount />} />
              <Route path="/apply-deposit" element={<ApplyDeposit />} />
              <Route path="/apply-loan" element={<ApplyLoan />} />
              <Route path="/book-appointment" element={<BookAppointment />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
