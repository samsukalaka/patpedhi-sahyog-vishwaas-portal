import React, { createContext, useContext, useState, useEffect } from 'react';

export type UserRole = 'member' | 'staff';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  memberId?: string;
  staffId?: string;
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string, role: UserRole) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Dummy credentials
const DUMMY_USERS = {
  member: {
    email: 'member@patpedhi.com',
    password: 'member123',
    user: {
      id: 'mem_001',
      name: 'राम शर्मा',
      email: 'member@patpedhi.com',
      role: 'member' as UserRole,
      memberId: 'MP001'
    }
  },
  staff: {
    email: 'staff@patpedhi.com',
    password: 'staff123',
    user: {
      id: 'staff_001',
      name: 'अमित पटेल',
      email: 'staff@patpedhi.com',
      role: 'staff' as UserRole,
      staffId: 'ST001'
    }
  }
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check for stored user on load
    const storedUser = localStorage.getItem('patpedhi_user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  const login = async (email: string, password: string, role: UserRole): Promise<boolean> => {
    setIsLoading(true);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const credentials = DUMMY_USERS[role];
    
    if (email === credentials.email && password === credentials.password) {
      setUser(credentials.user);
      localStorage.setItem('patpedhi_user', JSON.stringify(credentials.user));
      setIsLoading(false);
      return true;
    }
    
    setIsLoading(false);
    return false;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('patpedhi_user');
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};