import { mount } from "footer/footer";
import { useRef, useEffect } from "react";

export default () => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    mount(ref.current);
  }, []);

  return <div ref={ref} />;
};
