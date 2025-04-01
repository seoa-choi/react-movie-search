import Radio from '@/components/Radio';

export default function RadioGroup({ options, name, onChange }) {
  return (
    <div>
      {options.map((option) => (
        <Radio
          key={option.value}
          value={option.value}
          label={option.label}
          name={name}
          defaultChecked={option.defaultChecked}
          onChange={onChange}
        />
      ))}
    </div>
  );
}
