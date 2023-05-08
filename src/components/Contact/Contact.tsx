
import * as Styles from './Contact.styles';
import Heading from '../Typography/Heading';
import Description from '../Typography/Description';

const mockInfos = [
  {
    id: 1,
    title: 'Whatsapp',
    description: 'Fale comigo pelo whatsapp',
    icon: '/icons/whatsapp.png',
    qr: 'qrwhatsapp.png'
  },
  {
    id: 2,
    title: 'Email',
    description: 'Fale comigo pelo email',
    icon: '/icons/gmail.png',
    qr: 'qrwhatsapp.png'
  },
  {
    id: 3,
    title: 'Instagram',
    description: 'Fale comigo pelo instagram',
    icon: '/icons/instagram.png',
    qr: 'qrwhatsapp.png'
  },
]

const Contact = () => {
  return (
    <Styles.Container>
      <Styles.Heading>
        <Heading size={'Display'} label='Entre em contato comigo ;)' />
        <Description label='Abaixo as formas que você pode entar em contato comigo' />
      </Styles.Heading>
      <Styles.Infos>
        {mockInfos.map((info) => (
          <Styles.Info key={info.id}>
            <Styles.Icon src={info.icon}/>
            <Styles.Title>{info.title}</Styles.Title>
            <Styles.Description>{info.description}</Styles.Description>
            <Styles.QrCode src={`/images/${info.qr}`} alt={info.title} />
          </Styles.Info>     
        ))}
      </Styles.Infos>
    </Styles.Container>
    );
  }


export default Contact;
