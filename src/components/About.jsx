import React from "react";

const About = () => {
  return (
    <div>
      <AboutData />
    </div>
  );
};

function AboutData() {
  return (
    <div className="">
      <div className="container m-auto">
        <div className="grid grid-cols-2 gap-12 py-8 ">
          <div className="">
            <Title
              text1={`At TrendyHub, we believe in more than just providing quality
                fashion; we believe in creating a style statement. Our journey
                began in 2010 with a passion for the latest trends and
                fashion-forward accessories. Since then, we have been dedicated to
                bringing chic, trendy, and affordable styles to your wardrobe.`}
              text={`Welcome to TrendyHub!`}
            />
            <br />
            <Title
              text={"Our Story"}
              text1={`Founded in the heart of the fashion capital, TrendyHub started as a small online boutique, driven by the desire to offer unique and handpicked accessories to our customers. Over the years, we've grown, learned, and expanded our offerings while staying true to our commitment to style and quality.`}
            />

            <Title
              text={" Our Mission"}
              text1={`Our mission at TrendyHub is to inspire confidence through fashion. We aim to empower individuals to express their unique style with our curated selection of accessories that are both trendy and timeless.`}
            />

            <Title
              text={"Connect With Us"}
              text1={`We love hearing from our customers! Feel free to reach out to us with any questions, feedback, or just to say hello. Follow us on Instagram and Facebook to stay updated on our latest products, promotions, and behind-the-scenes moments.
                `}
            />
            <Title
              text1={`Thank you for being a part of the TrendyHub family. We look forward to helping you make a statement with your style.`}
            />
            <p className="text-gray-600 ">Happy Shopping</p>
            <br />
            <p className="text-gray-600 ">The Trendyhub Team</p>
          </div>

          <div className="">
            <img src="https://images.unsplash.com/photo-1534960680480-ca9853707e10?q=80&w=2127&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="image" className="w-full pb-16 rounded-sm h-screen" />
          </div>
        </div>
      </div>
    </div>
  );
}

function Title({ text, text1 }) {
  return (
    <div className="py-4">
      <h2 className="text-5xl font-semibold pb-2 text-gray-800">{text}</h2>
      <p className="text-gray-600">{text1}</p>
    </div>
  );
}
export default About;
