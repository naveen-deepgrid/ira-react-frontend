import React, { useId } from 'react'
import Heading from './Heading';
import Card from './Card';
import "./styles.css"
import IRA from '../../../assets/ira.png';
import img2 from '../../../assets/img2.png';
import img3 from '../../../assets/img3.png';
import img4 from '../../../assets/img4.png';

const cardList = [{
  title: "Explore Assets",
  image: IRA,
  desc: `IRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with theIRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with the`
}, 
{
  title: "Select the Asset",
  image: img2,
  desc: `IRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with theIRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with the`
},
{
  title: "Choose Investment model & Pay",
  image: img3,
  desc: `IRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with theIRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with the`
},
{
  title: "Track Progress & Returns",
  image: img4,
  desc: `IRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with theIRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with the`
},
{
  title: "Understand settlement process",
  image: img2,
  desc: `IRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with theIRA Street is a marketplace for real estate investors and real estate companies,
  where a real estate company can post a project they require funding for, and an
  investor can simply invest either for appreciation or for rental income, through the
  website. The person responsible from the company's end(anchor) would create a
  shell private limited company for the project with the ability to issue & distribute
  Stock Appreciation Rights scheme (SARS) of the company to all the investors. The
  investor will get a certificate on the investor name against the investment with the`
},
]

const HowIRAworks = () => {
  const id = useId();
  return (
        <section className="content">
            <div className="heading">
              <p>CMS/HOW IRA STREET WORKS</p>
              <h1>HOW IRA-STREET WORKS</h1>
            </div>

            {/* <div className="title">
              <p>Title</p>
                <section className="my-section">
          
                 <p>How IRA-Street Works</p>
       
                </section>

            </div> */}

<section className='heading'>
            <Heading title="How IRA-Street Works"/>
</section>
            {
              cardList.map((data, i) => {
                return <Card {...data} key={`${id}-img-${i}`}/>
              })
            }
        </section>
    )
}

export default HowIRAworks