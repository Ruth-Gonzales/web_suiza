import { useEffect } from 'react';

const CLASS_NAME = 'institutional-texture-active';

export default function useInstitutionalTexture() {
  useEffect(() => {
    document.body.classList.add(CLASS_NAME);
    return () => {
      document.body.classList.remove(CLASS_NAME);
    };
  }, []);
}
