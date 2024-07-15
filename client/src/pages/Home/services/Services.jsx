import './services.css'
import { BiCheck } from 'react-icons/bi'
import { useSelector } from 'react-redux';


const Services = () => {
  const { portfolioData } = useSelector((state) => state.root);
  const { servie } = portfolioData;
  return (
    <section id='services'>
      <h4>What I Offer</h4>
      <h2>Services</h2>
      <div className="container services_container">
        {servie.map((serviceItem) => (
          <article className="service">
            <div className="service_head">
              <h3>{serviceItem.title}</h3>
            </div>

            <ul className="service_list">
              {serviceItem.service.map((serviceDetail) => (

                <li>
                  <BiCheck className='service_list-icon' />
                  <p>{serviceDetail.description}</p>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section >
  )
}

export default Services