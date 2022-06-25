import { Footer } from '../components';
import { officeLocations, customerService, usefulLinks } from '../utils/fixtures/footer'

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Container>
                <Footer.Identity>
                    <Footer.Logo src="images/ct-logo-light.svg" alt='carTrawler Logo' data-testid='carTrawler-footer-image' />
                    <Footer.Slogan>Driving successful Partnerships</Footer.Slogan>
                </Footer.Identity>
                <Footer.Row>
                    {officeLocations.map(({ id, officeLocation, officeAddress }) => (
                        <Footer.Column key={id}>
                            <Footer.ColHeader>{officeLocation}</Footer.ColHeader>
                            {officeAddress.map((address) => (<Footer.ColText key={address}>{address}</Footer.ColText>))}
                        </Footer.Column>
                    ))}
                    {customerService.map(({ id, title, links }) => (
                        <Footer.Column key={id}>
                            <Footer.ColHeader>{title}</Footer.ColHeader>
                            {links.map(({ id, name, url }) => (
                                <Footer.Link key={id} href={url}>
                                    {name}
                                </Footer.Link>))}
                        </Footer.Column>
                    ))}
                </Footer.Row>
                <Footer.UsefulLinks>
                    {usefulLinks.map(({ id, title, url }) => (
                        <Footer.Link key={id} href={url}>{title}</Footer.Link>
                    ))}
                </Footer.UsefulLinks>
            </Footer.Container>
        </Footer>
    )
}