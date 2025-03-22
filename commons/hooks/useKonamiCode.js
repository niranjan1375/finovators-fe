import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const konamiCode = [
    "ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown",
    "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight",
    "b", "a"
];
  
const useKonamiCode = () => {
  const router = useRouter();
  const [keySequence, setKeySequence] = useState([]);
  


  useEffect(() => {
    const handleKeyPress = (event) => {
      setKeySequence((prevKeys) => [...prevKeys, event.key].slice(-konamiCode.length));
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  useEffect(() => {
    if (keySequence.join() === konamiCode.join()) {
      router.push("/onepiece");
    }
  }, [keySequence, router]);
};

export default useKonamiCode;
