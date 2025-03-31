
interface BackgroundProps {
  image: string;
}
function Background({ image }: BackgroundProps) {
  return (
    <div className="absolute z-0 right-0 top-1">
      <img src={image} alt="Background" />
    </div>
  );
}
export default Background;
