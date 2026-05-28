import bowImg from '../assets/bow.png';

export default function Bow({ delay = '0s', className = '' }) {
  return (
    <img
      src={bowImg}
      alt=""
      aria-hidden="true"
      className={`bow ${className}`.trim()}
      style={{ animationDelay: delay }}
    />
  );
}
