import React from 'react';
import { FiAlertCircle, FiCheck, FiInfo, FiXCircle } from 'react-icons/fi';

import { ToastMessage } from '../../../hooks/toast';
import { Container } from './styles';

interface ToastProps {
  message: ToastMessage;
}

const icons = {
  info: <FiInfo />,
  error: <FiCheck />,
  success: <FiAlertCircle />,
};

const Toast: React.FC<ToastProps> = ({ message }) => {
  return (
    <Container type={message.type} hasDescription={!!message.description}>
      {icons[message.type || 'info']}
      <div>
        <strong>{message.title}</strong>
        {message.description && <p>{message.description}</p>}
      </div>

      <button type="button">
        <FiXCircle />
      </button>
    </Container>
  );
};

export default Toast;
