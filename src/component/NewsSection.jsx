

import news1 from "../assets/news-01.jpg";
import news2 from "../assets/news-02.jpg";
import news3 from "../assets/news-03.jpg";

export const NewsCard = ({ image, date, title }) => (
  <div className="d-flex mb-4">
    <img src={image} alt="news" className=" me-3 col-md-6 side-news" />
    <div className="col-md-6 mt-2">
      <div className="news-date mb-1">{date}</div>
      <div className="news-title small">{title}</div>
    </div>
  </div>
);

export const NewsSection = () => {
  const newsItems = [
    {
      image: news2,
      date: "29 Aug, 2023",
      title: "Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group"
    },
    {
      image: news3,
      date: "29 Aug, 2023",
      title: "Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group"
    }
  ];

  return (
    <div className="container my-5">
        <h2 className="display-1 responsive-heading position-relative text-start" style={{ color: "#f0f0f0", fontWeight: 700,fontSize:"10rem", }}>what’s new
              <span className="position-absolute" style={{ top: '80%', left: 0, transform: 'translateY(-50%)', color: '#000', fontSize: '2rem', fontWeight: 600 }}>news, announcements<br/>
               and press releases.</span>
        </h2>
      <div className="row mt-4">
        {/* Main News */}
        <div className="col-md-6">
          <div className="main-news-card position-relative">
            <img src={news1} alt="main news" className="img-fluid w-100" />
            <div className="main-news-date">29 Aug, 2023</div>
            <div className="main-news-title ">
              <strong>Prime Minister Kassim Majaliwa Strengthens Bilateral Ties During Official Visit to Africab Group</strong>
            </div>
          </div>
        </div>

        {/* Side News */}
        <div className="col-md-6 mt-4 mt-md-0">
          {newsItems.map((item, i) => (
            <NewsCard key={i} {...item} />
          ))}
        </div>
      </div>
    </div>
  );
};
