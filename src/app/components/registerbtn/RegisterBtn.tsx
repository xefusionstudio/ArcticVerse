// RegisterButton.tsx
import React from 'react';
import Button from '@mui/material/Button';
import styles from './RegisterButton.module.scss';

interface RegisterButtonProps {
  onClick?: () => void;
  className?: string;
}

const RegisterButton: React.FC<RegisterButtonProps> = ({ 
  onClick, 
  className = ''
}) => {
  return (
    <Button
      variant="outlined"
      className={`${styles.registerButton} ${className}`}
      onClick={onClick}
    >
      <span className={styles.starIcon}>★</span>
      Register
    </Button>
  );
};

export default RegisterButton;