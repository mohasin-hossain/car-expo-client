const Slider = ({ photo, idx }) => {

  return (
    <div id={`item${idx + 1}`} className="carousel-item w-full">
      <img src={photo} className="w-full" />
    </div>
  );
};

export default Slider;
