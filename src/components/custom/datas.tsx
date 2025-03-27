import pr1 from "@/../public/assets/product/IMG_0667-min.jpg";
import pr2 from "@/../public/assets/product/IMG_0671-min.jpg";
import pr3 from "@/../public/assets/product/IMG_0673-min.jpg";
import pr4 from "@/../public/assets/product/IMG_0675-min.jpg";
import pr5 from "@/../public/assets/product/IMG_0693-min.jpg";

import bl1 from "@/../public/assets/blogs/blg1.png";
import bl2 from "@/../public/assets/blogs/blg2.png";
import bl3 from "@/../public/assets/blogs/blg3.png";

export interface PI {
  tag: string;
  img: any;
  group: string;
}
// "Tote bag"
const products: PI[] = [
  {
    img: pr1,
    tag: "Polo",
    group: "Branded Apparels",
  },
  {
    img: pr2,
    tag: "T-shirt",
    group: "Branded Apparels",
  },
  {
    img: pr3,
    tag: "T-shirt",
    group: "Branded Apparels",
  },
  {
    img: pr4,
    tag: "T-shirt",
    group: "Branded Apparels",
  },
  {
    img: pr5,
    tag: "Tote bag",
    group: "Branded Apparels",
  },
];

export interface BI {
  topic: string;
  desc: string;
  content: string;
  link: string;
  img: any;
}

const blogs: BI[] = [
  {
    topic:
      "Jennet Lemma – A Visionary Entrepreneur Empowering Women Through Fashion",
    desc: "Jennet Lemma, founder and CEO of Gaber Wear, has built an impactful brand that goes beyond fashion. With a mission to create dignified employment and empower women, her entrepreneurial journey is a testament to resilience, leadership, and community impact.",
    content: `
   <p>Jennet Lemma's entrepreneurial journey is a story of ambition, determination, and purpose.</p>
    <p>Born and raised in Addis Ababa, she moved to the U.S. to pursue a degree in accounting. After spending over a decade in America, she returned home in 2016 to follow her true passion—entrepreneurship.</p>
    <p>Driven by values of integrity, hard work, and leading by example, she founded Gaber Wear, a fashion brand that blends contemporary style with cultural heritage.</p>
    <p>Beyond fashion, Jennet's vision extends to empowering women and fostering community growth. At Gaber Wear, 85% of the workforce consists of women, from sewing artisans to managerial leaders.</p>
    <p>Her goal is to provide dignified employment and a safe space for women to thrive in the industry.</p>
    <p>Through her leadership, Jennet continues to inspire the next generation of entrepreneurs while making a lasting impact on the fashion landscape in Ethiopia.</p>
    `,
    img: bl1,
    link: "Jennet-Lemma–A-Visionary-Entrepreneur-Empowering-Women-Through-Fashion",
  },
  {
    topic: "Small local business perseveres rain or shine",
    desc: "Jennet Lemma, who is among the 50 African innovators highlighted in the September online edition of UNDP Regional Bureau for Africa's magazine, was born and raised in the capital. The second eldest of five siblings, Jennet grew up in a hardworking family of businesspeople and related that she began working and earning her keep from a young age.",
    content: `
  <p>Jennet Lemma, who is among the 50 African innovators highlighted in the September online edition of UNDP Regional Bureau for Africa's magazine, was born and raised in the capital. The second eldest of five siblings, Jennet grew up in a hardworking family of businesspeople and related that she began working and earning her keep from a young age.</p>

  <p>An entrepreneur who is engaged in the local textile manufacturing industry, Jennet graduated from high school at Lycée Guebre-Mariam and went on to attend university in the United States. She enrolled at Georgia State University in Atlanta, Georgia and matriculated with a bachelor's of business administration in accounting.</p>

  <p>Before returning to Addis, she spent 12 years in the United States and gained valuable experience as an employee of a financial institution there. Ultimately, she decided to come back to Ethiopia, stating that she felt out of place in the United States and wanted to use her knowledge and experience to make an impact here in her home country.</p>

  <p>“It's my dream and will always be my dream to find happiness in positively changing the lives of people both socially and financially," she said. "While I was working in the United States, what killed me every day was finding myself in a place where I didn’t belong."</p>

  <p>In 2016, Jennet founded Gaber Garment, a textile company with a focus on empowering women. With the “Sewed with Passion for You” motto, Gaber Garment employs about 102 workers -- 77 of whom are permanent and 25 temporary. Almost all employees are women.</p>

  <p>Gaber Garment, which is located in Kebena near Sandford International School, has been engaged in the production of a variety of textile products, including casual clothing, uniforms and recyclable shopping bags, when the global Novel Coronavirus (COVID-19) pandemic hit.</p>

  <p>“It has always been my interest to be engaged in something that has a social impact,” says Jennet, who adds that in the first months of COVID-19, she had the idea of manufacturing personal protective equipment (PPE) in the form of face masks.</p>

  <p>She discussed the idea with her colleagues before jumping into the production of PPE.</p>

  <p>After the discussion, the first thing she and her colleagues did was carry out market research and make plans on reaching out to the Ministry of Health for support in receiving a license to produce face masks and PPE to fight COVID-19, according to Jennet.</p>

  <p>After assessing these things, her company wrote a letter to the Ministry of Health, inviting them to come and visit her workshop and, afterwards, to permit them to manufacture PPE.</p>

  <p>Gaber Garment was able to secure a production license after fulfilling standards set by the Ethiopian Food & Drugs Authority for the certification process for the production and sale of cloth face masks.</p>

  <p>The company now produces 5,000 to 10,000 uniquely embroidered face masks a day. Though the price for the masks varies depending on the design, the average price for one mask is 25 Br. Most of their customers are banks, insurance companies and private companies.</p>

  <p>“We participate in charity through different associations and organisations by donating face masks to the vulnerable members of the community who can’t afford to buy them,” Jennet said.</p>

  <p>COVID-19 is something Jennet takes very seriously, stating that she takes great care to follow all instructions put forward by the Ministry of Health.</p>

  <p>“Of course I'm afraid of COVID-19," she said. "It's an easily transmissible virus that can take a life in just a matter of days."</p>

  <p>Gaber Garment is among the 12 small and mid-sized enterprises (SMEs) in Ethiopia with which the Mastercard Foundation has partnered. The Foundation has pledged to provide 3.2 million dollars in financial support to help the enterprises hold on to their employees. The Foundation also aims to aid these businesses in the repurposing of factories and in renting unused equipment and basic textile machines to be used in the manufacturing of PPE.</p>

  <p>Mastercard Foundation supports Gaber Garment as part of its COVID-19 Recovery & Resilience Programme that assists institutions and communities in Africa to withstand and respond to the short-term impacts of the pandemic while strengthening their resilience in the long run, according to Alemayehu Konde Koria, country head for Mastercard Foundation Ethiopia.</p>

  <p>"We assisted her to repurpose the production of her factory," Alemayehu said.</p>

  <p>The support project aims to help the businesses cope with the situation, retain employees, and sustain female-owned enterprises during the pandemic.</p>

  <p>Kelemoa Tekele, a 24-year-old mother of two who has been working in Gaber Garment for the past four years, is one of the employees who felt insecure about her job after the onset of the virus.</p>

  <p>Kelemoa joined the company after she saw a vacancy posted on a pole while she was walking around her village. The posting stated that the company needed a garment operator, and she found it fitting for her since she went to a technical college to study how to make garments. After going through the recruitment process, she was given a 2,500 Br salary as an operator. But after four years she is working as a quality supervisor earning 3,000 Br.</p>

  <p>Kelemoa wakes up early in the morning, makes breakfast for her family, and washes her nine-month-old daughter's clothing.</p>

  <p>"I prepare lunch boxes for my husband and myself before I leave my home at 6:30am. The service picks her up at 6:45am to reach the workplace, which operates from 8:00am to 4:30pm.</p>

  <p>"Worrying about losing my job was my biggest headache," she said, adding that they are still working at the plant by employing the necessary care such as wearing face masks and using sanitiser.</p>

  <p>Beyond retaining their employees and remaining in production, Mastercard Foundation's support tries to enable these businesses to sell their products online via e-commerce platforms. For this, the Foundation has partnered with Kifiya Financial Technologies.</p>

  <p>Kifiya partners with Mastercard to create market access for small enterprises as well as providing training. Now Kifiya is working with them to create an e-commerce market for these businesses, which are now facing challenges to sell their products.</p>

  <p>"We're promoting them on social media by creating a market chain," said Munir Nuri, CEO of Kifiya.</p>

  <p>One programme manager and two assistants are provided to these enterprises, and the former is paid by the Foundation. The programme manager will manage the activities of the businesses, while the two assistants work on finding a market for the products by the enterprises.</p>

  <p>“We are lucky to be selected," Jennet said.</p>

  <p>Abraham Destaw, a lecturer on textile production at Bahir Dar University's Ethiopian Institute of Textile & Fashion Technology, appreciates the moves to support small businesses that are affected by the pandemic.</p>

  <p>"But the small enterprises should also work on their previous market at the same time while they are producing face masks," he said. "The demand for the masks may not be sustainable, and focusing on one product will not be helpful for the enterprises."</p>

  <p>Her project granted Jennet recognition from the UNDP Regional Bureau for Africa, where she was prominently featured in a special edition of their online magazine. Africa Innovates chose to feature young African innovators who are committed to finding homegrown solutions to the pandemic despite facing limited access to resources and other significant social challenges.</p>

  <p>"It's so surprising and unexpected to find myself on such a big stage,” said Jennet. “It's a big success for me to see my name on the list along with the young influential Africans who are striving to help their community by innovating."</p>

`,
    img: bl2,
    link: "small-local-business-perseveres-rain-or-shine",
  },
  {
    topic: "From passion to business: Meet Jennet Lemma of Gaber Garment",
    desc: "Gaber Garment is a garment manufacturing company based in Ethiopia’s capital, Addis Ababa. Birthed from a passion for fashion, the business is divided into three segments: uniform solutions, branded garments and retail with their main customers ranging between the ages of 18 to 35. However, Gaber Garment is no ordinary business, they have distinguished themselves as a social enterprise with a notable social impact on empowering women. Jennet believes that their social impact, quality products, attention to details and adaptation of market trends keeps Gaber Garments ahead of competitors.",
    content: `
  <p>After living in the USA for 12 years, Jennet began contemplating moving back to Ethiopia. At the same time, she wanted to set up a social impact-driven business in her home country. After thorough research, she knew that she wanted to get into manufacturing since it’s one industry that creates numerous opportunities. Her undeniable passion for clothing and fashion led her to start a garment manufacturing business.</p>

<p>In 2016, Gaber Garment was established with the help of her parents, who are also shareholders. “Empowering women together” then became Gaber Garment’s motto, and to live up to this, 95% of their 100 employees on payroll are women. Of the 95%, some are in managerial positions. To ensure that they build strong internal capacity, they focus on promoting from within and providing internal opportunities for growth through continuous training.</p>

<p>They also partner with non-profit organizations to teach young women on different topics. Currently, they have partnered with Noble Cup, which offers menstrual education, and textile training institutes, which provide quality training.</p>

<p>Jennet admits that she is proud of the speed of growth for the business. In less than three years, they have achieved major milestones as a company. Within six months, they were able to hire and establish different departments from scratch. She is also proud of the management staff, who have been with her almost since the company’s inception.</p>

<h2>Challenges in Growth and Expansion</h2>
<p>“The most significant challenge in my entrepreneurship journey was getting the business up and running at the implementation or beginning phase. After living in the USA for 12 years, I got used to things getting done quickly, so it was very challenging to adjust to the speed of doing business in Ethiopia. For example, getting our machinery and equipment delivered took much longer than expected because of a simple documentation error by the supplier,” Jennet mentioned.</p>

<h2>Advice to Other Entrepreneurs</h2>
<p>Her advice to other entrepreneurs is to have a network of fellow entrepreneurs with whom they can discuss business challenges. Having this network makes it easier to overcome obstacles. She added that entrepreneurs should not be easily discouraged because sometimes it will feel like the odds are against them, especially in a growing economy.</p>

<h2>Why I Joined the GrowthAfrica Accelerator</h2>
<p>Jennet joined the acceleration program because she believes that “the time for scaling Gaber is now.” She explained, “We have been in operation for the last three years, and our core team is solid and ready to take things to the next level. So far, I have learned how important it is for me to step away from daily operations and take time to strategize and see the big picture.”</p>

<h2>Future Plans for Gaber Garment</h2>
<p>In the next three years, she envisions Gaber becoming a recognizable garment brand locally and expanding to other countries in Africa. They plan to open more branches locally and build export partnerships.</p>
`,
    img: bl3,
    link: "From-passion-to-business-Meet-Jennet-Lemma-of-Gaber-Garment",
  },
];

export { products, blogs };
