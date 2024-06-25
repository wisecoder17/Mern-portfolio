import './services.css'
import { services } from './data'
import { BiCheck } from 'react-icons/bi'


const Services = () => {
  return (
    <section id='services'>
      <h4>What I Offer</h4>
      <h2>Services</h2>
      <div className="container services_container">
        {services.map(service => (
          <article className="service">
            <div className="service_head">
              <h3>{service.title}</h3>
            </div>

            <ul className="service_list">
              {service.service.map(list => (
              <li>
                <BiCheck className='service_list-icon' />
                <p>{list.description}</p>
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