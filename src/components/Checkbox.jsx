export default function Checkbox({
  label,
  checked,
  onChange,
  name,
  className,
  children,
}) {
  return (
    <label className={`checkbox ${className}`}>
      <input
        type="checkbox"
        className="sr-only"
        checked={checked}
        onChange={onChange}
        name={name}
      />
      {children ? (
        children
      ) : (
        // whitespace-pre-wrap 빈칸, 줄바꿈 그대로 보이게
        <span className="whitespace-pre-line">{label}</span>
      )}
      {/* <span className=" line-clamp-2">{label}</span> */}
      {/* {children} */}
    </label>
  );
}

// 체크박스만 value가 없음
