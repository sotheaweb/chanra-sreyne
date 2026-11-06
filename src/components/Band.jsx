import useInView from "./useInView.js";

// Gold Kbach line that draws out from the centre.
export default function Band({ className = "" }) {
  const [ref, seen] = useInView(0.5);
  return <div ref={ref} className={`band origin-center transition-transform duration-1000 ease-out motion-reduce:transition-none motion-reduce:scale-x-100 ${seen ? "scale-x-100" : "scale-x-0"} ${className}`} />;
}
