// components/TextInput.js
const TextInput = ({ name, onChange, placeholder }) => {
  return (
    <input
      type="text"
      name={name}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-[rgba(22,54,61,.08)] w-full border-0 rounded-[8px] h-[60px] flex items-center pl-6 text-[22px] text-[#16363D] 
      leading-[120%] tracking-[-0.03em] !font-Archivo font-medium"
    />
  );
};

export default TextInput;
