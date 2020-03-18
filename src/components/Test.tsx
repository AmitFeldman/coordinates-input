import * as React from 'react';

export interface TestProps {
  text: string;
}

const Test: React.FC<TestProps> = ({text}) => {
  const fullText = `${text}!!!!`;

  return <div>{fullText}</div>;
};

export default Test;
