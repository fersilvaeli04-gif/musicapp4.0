import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
`;

export const Input = styled.input`
  flex: 1 1 200px;
  background: ${({ theme }) => theme.colors.card};
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.65rem 0.85rem;
  color: ${({ theme }) => theme.colors.paper};
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.95rem;

  &::placeholder {
    color: #6d7386;
  }

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.amber};
  }
`;

export const Button = styled.button`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: ${({ theme }) => theme.colors.amber};
  color: ${({ theme }) => theme.colors.ink};
  border: none;
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.65rem 1.25rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-weight: 500;
  font-size: 0.9rem;
  cursor: pointer;
  transition: opacity 0.15s ease;

  &:hover:not(:disabled) {
    opacity: 0.85;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

export const ClearButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.line};
  color: ${({ theme }) => theme.colors.muted};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.65rem 1rem;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.9rem;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.paper};
    border-color: ${({ theme }) => theme.colors.muted};
  }
`;
