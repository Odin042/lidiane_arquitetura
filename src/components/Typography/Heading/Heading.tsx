
import { Content } from './Heading.styles';
import { IHeading } from './iHeading';

const Heading: React.FC<IHeading> = ({
  label,
  inverse,
  size,
}) => {
  return (
    <Content size={size} inverse={inverse}>
      {label}
    </Content>
  );
};


export default Heading;
