import styled, { keyframes } from 'styled-components';

/* Panel de sección: el color de acento se elige con la prop $accent
   (amber = búsqueda, sky = resultados, teal = biblioteca) */
export const Panel = styled.section`
  border: 1px solid ${({ theme }) => theme.colors.line};
  border-top: 3px solid
    ${({ theme, $accent }) => theme.colors[$accent] || theme.colors.line};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1.5rem;
`;

export const SectionTitle = styled.h2`
  font-family: ${({ theme }) => theme.fonts.serif};
  font-weight: 600;
  font-size: 1.35rem;
  margin: 0 0 1rem;
  color: ${({ theme }) => theme.colors.paper};
`;

export const CountBadge = styled.span`
  display: inline-block;
  margin-left: 0.5rem;
  padding: 0.1rem 0.55rem;
  border-radius: 999px;
  font-family: ${({ theme }) => theme.fonts.sans};
  font-size: 0.75rem;
  font-weight: 500;
  vertical-align: middle;
  background: ${({ theme, $color }) => theme.colors[$color] || theme.colors.line};
  color: ${({ theme }) => theme.colors.ink};
`;

export const SongList = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

export const StatusMessage = styled.p`
  color: ${({ theme }) => theme.colors.muted};
  font-size: 0.9rem;
  margin: 0;
`;

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

export const Spinner = styled.span`
  display: inline-block;
  flex-shrink: 0;
  width: ${({ $size }) => $size || '1rem'};
  height: ${({ $size }) => $size || '1rem'};
  border: 2px solid
    ${({ theme, $color }) => theme.colors[$color] || theme.colors.amber};
  border-right-color: transparent;
  border-radius: 50%;
  animation: ${spin} 0.8s linear infinite;
`;

export const LoadingMessage = styled.p`
  display: flex;
  align-items: center;
  gap: 0.6rem;
  margin: 0;
  padding: 0.9rem 1rem;
  border-radius: ${({ theme }) => theme.radii.md};
  background: rgba(227, 168, 87, 0.1);
  color: ${({ theme }) => theme.colors.amber};
  font-size: 0.95rem;
  font-weight: 500;
`;

export const StatusError = styled.div`
  color: ${({ theme }) => theme.colors.error};
  background: rgba(224, 122, 95, 0.08);
  border: 1px solid ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.radii.md};
  padding: 1rem 1.25rem;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  align-items: flex-start;

  p {
    margin: 0;
  }
`;

export const RetryButton = styled.button`
  background: transparent;
  border: 1px solid ${({ theme }) => theme.colors.error};
  color: ${({ theme }) => theme.colors.error};
  border-radius: ${({ theme }) => theme.radii.sm};
  padding: 0.4rem 0.9rem;
  font-size: 0.85rem;
  cursor: pointer;

  &:hover {
    background: ${({ theme }) => theme.colors.error};
    color: ${({ theme }) => theme.colors.ink};
  }
`;
