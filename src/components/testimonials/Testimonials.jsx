import "./testimonials.scss";

export default function Testimonials() {
  const data = [
    {
      id: 1,
      name: "Kristiyan Ivanov",
      title: "Technical Trainer at Software University (softuni.bg)",
      img: "assets/kris.jfif",
      icon: "assets/twitter.png",
      desc: "My interests include MVC Web with ASP.NET and Spring Boot MVC. C# Co-Lecturer. Recently started learning Automotive Electronics.",
    },
    {
      id: 2,
      name: "Nikolay Kostov",
      title:
        "Microsoft Certified Trainer, Solutions Architect at ZenCodeo, Nikolay.IT",
      img: "assets/niki.jfif",
      icon: "assets/youtube.png",
      desc: "Experienced and quick-learning software engineer with leadership skills, programming and architectural skills, solid experience in technical training, web development with ASP.NET MVC, ASP.NET Core, NodeJS, PHP, SQL Server, MySQL and very good knowledge in application development",
      featured: true,
    },
    {
      id: 3,
      name: "Radi Atanassov",
      title: "CEO of OneBit Software",
      img: "assets/radi.jfif",
      icon: "assets/linkedin.png",
      desc: "I am one of the small amount of people in the world holding the Microsoft Certified Master for SharePoint 2010 certificate and the Microsoft Certified Solutions Master – Charter SharePoint certificate.",
    },
  ];
  return (
    <div className="testimonials" id="testimonials">
      <h1>Testimonials</h1>
      <div className="container">
        {data.map((d) => (
          <div className={d.featured ? "card featured" : "card"}>
            <div className="top">
              <img src="assets/right-arrow.png" className="left" alt="" />
              <img className="user" src={d.img} alt="" />
              <img className="right" src={d.icon} alt="" />
            </div>
            <div className="center">{d.desc}</div>
            <div className="bottom">
              <h3>{d.name}</h3>
              <h4>{d.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
