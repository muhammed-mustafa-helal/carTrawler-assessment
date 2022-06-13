import { Footer } from '../components'

export default function FooterContainer() {
    return (
        <Footer>
            <Footer.Container>
                <Footer.Identity>
                    <Footer.Logo src="images/ct-logo-light.svg"/>
                    <Footer.Slogan>Driving successful Partnerships</Footer.Slogan>
                </Footer.Identity>
                <Footer.Row>
                    <Footer.Column>
                        <Footer.ColHeader>CarTrawler Coporate Head Office</Footer.ColHeader>
                        <Footer.ColText>
                            Classon House
                        </Footer.ColText>
                        <Footer.ColText>
                            Dundrum Business park
                        </Footer.ColText>
                        <Footer.ColText>
                            Dundrum
                        </Footer.ColText>
                        <Footer.ColText>
                            Dublin 14
                        </Footer.ColText>
                        <Footer.ColText>
                            Ireland
                        </Footer.ColText>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.ColHeader>New York Office</Footer.ColHeader>
                        <Footer.ColText>
                            14th Floor
                        </Footer.ColText>
                        <Footer.ColText>
                            575 5th Avenue
                        </Footer.ColText>
                        <Footer.ColText>
                            New York
                        </Footer.ColText>
                        <Footer.ColText>
                            NY 10017
                        </Footer.ColText>
                        <Footer.ColText>
                            United States
                        </Footer.ColText>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.ColHeader>London Office</Footer.ColHeader>
                        <Footer.ColText>
                            3 Waterhouse Square
                        </Footer.ColText>
                        <Footer.ColText>
                            138 - 142 Holborn
                        </Footer.ColText>
                        <Footer.ColText>
                            London
                        </Footer.ColText>
                        <Footer.ColText>
                            EC2N 2SW
                        </Footer.ColText>
                        <Footer.ColText>
                            United Kingdom
                        </Footer.ColText>
                    </Footer.Column>
                    <Footer.Column>
                        <Footer.ColHeader>Customer Service</Footer.ColHeader>
                        <Footer.Link href="https://customer.cartrawler.com">Manage my Booking</Footer.Link>
                        <Footer.Link href="https://cartrawler.com/ct/en-gb/faqs">FAQs</Footer.Link>
                    </Footer.Column>
                </Footer.Row>
                <Footer.UsefulLinks>
                    <Footer.Link href="https://cartrawler.com/ct/en-gb/terms-and-conditions">Terms and conditions</Footer.Link>
                    <Footer.Link href="https://cartrawler.com/ct/en-gb/privacy-policy/">Privacy Policy</Footer.Link>
                    <Footer.Link href="https://cartrawler.com/ct/en-gb/disclaimer/">Disclaimer</Footer.Link>
                    <Footer.Link href="https://cartrawler.com/ct/en-gb/cookie-policy/">Cookie Policy</Footer.Link>
                    <Footer.Link href="https://cartrawler.com/ct/en-gb/platform-to-business-p2b-regulation/">P2B Regulations</Footer.Link>
                    <Footer.Link href="https://cartrawler.com/ct/en-gb/modern-slavery-statement/">Modern Slavery Statement</Footer.Link>
                    <Footer.Link href="https://cartrawler.com/ct/en-gb/sitemap/">Sitemap</Footer.Link>
                </Footer.UsefulLinks>
            </Footer.Container>
        </Footer>
    )
}