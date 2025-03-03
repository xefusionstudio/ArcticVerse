// LoginBtn.tsx
import React from 'react';
import Button from '@mui/material/Button';
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import styles from './LoginBtn.module.scss';

interface LoginBtnProps {
  onClick?: () => void;
  className?: string;
}

const LoginBtn: React.FC<LoginBtnProps> = ({ 
  onClick, 
  className = ''
}) => {
  return (
    <Button
      variant="contained"
      className={`${styles.loginButton} ${className}`}
      onClick={onClick}
    >
      <span className={styles.pixelText}>Login</span>
      <ArrowOutwardIcon className={styles.arrowIcon} />
    </Button>
  );
};

export default LoginBtn;