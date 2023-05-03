import { useState } from "react";
import "./services-component.css";

const Services = () => {
  const [sliderVal, setSliderVal] = useState(1);

  const handleSliderChange = e => {
    setSliderVal(parseInt(e.target.value));
  };

  const renderText = () => {
    switch (sliderVal) {
      case 1:
        return (
          <div>
            <p>Diseño web</p>
          </div>
        );
      case 2:
        return (
          <div>
            <p>Consultoría</p>
          </div>
        );
      case 3:
        return (
          <div>
            <p>Desarollo de software a medida</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div>
      {renderText()}
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </p>
      <input
        type="range"
        min="1"
        max="3"
        value={sliderVal}
        onChange={handleSliderChange}
      />
    </div>
  );
};

export default Services;
