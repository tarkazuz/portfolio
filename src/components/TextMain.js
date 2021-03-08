import React from "react";
import TextTransition, { presets } from "react-text-transition";


const TextMain = ({text}) => {
  const [index, setIndex] = React.useState(0);

  React.useEffect(() => {
    const intervalId = setInterval(() =>
      setIndex(index => index + 1),
      3000 // every 3 seconds
    );
    return () => clearTimeout(intervalId);
  }, []);

  return (
    <h1>
      <TextTransition
        text={ text[index % text.length] }
        springConfig={ presets.gentle }
      />
    </h1>
  );
};

export default TextMain;