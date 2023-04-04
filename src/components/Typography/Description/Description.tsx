import React from 'react';
import { Content } from './Description.styles';
import { IDescription } from './IDescription';

const Description: React.FC<IDescription> = ({
   label,
   inverse,
}) => (
    <Content
      inverse={inverse}
    >
      {label}
    </Content>
)



;

export default Description;
