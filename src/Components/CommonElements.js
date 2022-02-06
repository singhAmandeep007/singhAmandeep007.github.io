import styled from 'styled-components';
import { RiExternalLinkFill } from 'react-icons/ri';

export const ExternalLink = styled.a`
  text-decoration: underline;
  text-decoration-color: var(--color-primary);
  text-decoration-thickness: 0.1rem;
  font-size: ${({ $fontSize }) => $fontSize};
  white-space: nowrap;
  svg {
    vertical-align: super;
    font-size: 75%;
  }
`;
export const ExternalLinkWithIcon = ({ href, fontSize = '1rem', children }) => {
  return (
    <ExternalLink
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      $fontSize={fontSize}
    >
      {children} <RiExternalLinkFill />
    </ExternalLink>
  );
};
