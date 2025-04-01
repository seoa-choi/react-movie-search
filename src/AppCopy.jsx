import RadioGroup from '@/components/RadioGroup';
import { useState } from 'react';

const contact = [
  {
    value: 'email',
    label: '이메일',
    defaultChecked: true,
  },
  {
    value: 'Phone',
    label: '전화번호',
  },
];

export default function App() {
  const [cValue, setcValue] = useState(contact[0].value);

  return (
    <div>
      <h2>라디오 사용하기</h2>
      <RadioGroup
        options={contact}
        name="contact"
        onChange={(e) => setcValue(e.target.value)}
      />
      {cValue}
    </div>
  );
}
