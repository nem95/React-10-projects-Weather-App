import styled from 'styled-components';
import PropTypes from 'prop-types';

const IconContainer = styled.span`
  font-family: 'fonticon' !important;

  &:before {
    content: '\\e${props => props.code}';
    color: ${props => props.color ? props.theme[props.color] : props.color};
    font-size: ${props => props.size}px;
  }
`;

const Icon = (props) => {
  const { code, color, size } = props;

  return(
    <IconContainer code={code} color={color} size={size}/>
  );
};

Icon.propTypes = {
  code: PropTypes.string.isRequired,
  color: PropTypes.string,
  size: PropTypes.number,
};

Icon.defaultProps = {
  color: 'primaryWhite',
  size: 16,
};

export default Icon;