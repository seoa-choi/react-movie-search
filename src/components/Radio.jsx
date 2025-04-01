export default function Radio({ label, ...rest }) {
  return (
    <label className="radio">
      <input type="radio" className="sr-only" {...rest} />
      {label}
    </label>
  );
}
