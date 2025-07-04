
import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';

interface ConditionalLinkProps {
  to: string;
  memberTo: string;
  children: React.ReactNode;
  className?: string;
}

const ConditionalLink: React.FC<ConditionalLinkProps> = ({ 
  to, 
  memberTo, 
  children, 
  className 
}) => {
  const { user } = useAuth();
  
  // If user is a member, use memberTo, otherwise use the default 'to' (which should be apply-membership for non-members)
  const linkTo = user?.role === 'member' ? memberTo : to;
  
  return (
    <Link to={linkTo} className={className}>
      {children}
    </Link>
  );
};

export default ConditionalLink;
