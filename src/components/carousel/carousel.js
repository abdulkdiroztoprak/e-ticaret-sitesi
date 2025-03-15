import Carousel from 'react-bootstrap/Carousel';

export const BANNERDATA = [
  {
    id: 1,
    bannerImage: "/images/banner.png",
    imageAlt: "First slide",
  },
  {
    id: 2,
    bannerImage: "/images/banner1.png",
    imageAlt: "Second slide",
  },
  {
    id: 3,
    bannerImage: "/images/banner3.png",
    imageAlt: "Third slide",
  },
  {
    id: 4,
    bannerImage: "/images/banner4.png",
    imageAlt: "Fourth slide",
  },
];

function UncontrolledExample() {
  return (
    <div
      style={{
        width: "100%", // Tam genişlikte olması için
        maxWidth: "1200px", // Çok büyük ekranlarda taşmaması için
        margin: "20px auto", // Sayfanın tam ortasında durmasını sağlar
        padding: "0", // Ekstra boşluğu kaldır
        borderRadius: "10px",
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
        backgroundColor: "#fff",
      }}
    >
      <Carousel>
        {BANNERDATA.map((item) => (
          <Carousel.Item key={item.id}>
            <img
              className="d-block w-100"
              src={item.bannerImage}
              alt={item.imageAlt}
              style={{
                maxHeight: "450px",
                objectFit: "cover",
                borderRadius: "5px",
              }}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default UncontrolledExample;
