import video from "../Asset/Siti Nurulkhadijah & Syed Ikhwan.MP4";

const Contact = () => {
  const imageArray = [
    "https://drive.google.com/uc?export=view&id=1GoRrfAG16u24IdEGxdEEF0CkskhcoPF_",
    "https://drive.google.com/uc?export=view&id=1lqk-bJZ_hBKLqC9RfWpya6M3natBN0cX",
    "https://drive.google.com/uc?export=view&id=1aVFYE_pPuFjv7XHr7fDY6-yJZljE2aLk",
  ];
  return (
    <>
      {imageArray.map((item) => (
        <section>
          <img src={item} alt="wedding" className="imageClass" />
        </section>
      ))}
      <div className="imageText">
        <div>Ikhwan and Nurul</div>
      </div>
    </>
  );
};
export default Contact;
