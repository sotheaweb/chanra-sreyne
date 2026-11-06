import useInView from "./useInView.js";

// Fade + slide up when the element scrolls into view.
export default function Reveal({ as: Tag = "div", delay = 0, className = "", children, ...rest }) {
  const [ref, seen] = useInView();
  return (
    <Tag ref={ref} style={{ transitionDelay: `${delay}ms` }} {...rest}
      className={`transition duration-700 ease-out motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:translate-y-0 ${seen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"} ${className}`}>
      {children}
    </Tag>
  );
}
