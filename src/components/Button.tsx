import React from 'react';
import { Button } from '../components/styles_components'; 
import { FaArrowRight } from 'react-icons/fa'; 

interface ContinueButtonProps {
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void; 
    type?: 'button' | 'submit' | 'reset';
    children: React.ReactNode;
}

const ContinueButton: React.FC<ContinueButtonProps> = ({ onClick, children }) => {
    return (
        <Button type="submit" onClick={onClick}>
            <span style={{ display: 'flex', alignItems: 'center' }}>
                {children}
                <FaArrowRight /> 
            </span>
        </Button>
    );
};

export default ContinueButton;
