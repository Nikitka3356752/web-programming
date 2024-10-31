import womanVrData from '../mockData/womanVrData';

const WomanVr = () => {
  return (
    <section className="woman__vr">
      <div className="woman__vr-left">
        <img src={womanVrData.imageSrc} alt={womanVrData.altText} />
      </div>
      <div className="woman__vr-right">
        <h2 className="cont2">{womanVrData.title}</h2>
        <p className="cont3">{womanVrData.description}</p>
        <a href="." className="cont4">{womanVrData.buttonText}</a>
      </div>
    </section>
  );
};

export default WomanVr;

