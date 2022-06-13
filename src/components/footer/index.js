import { FooterWrapper, Container, Identity, Logo, Slogan, Row, Column, ColHeader, ColText, Link, UsefulLinks } from "./styles/footer";

export default function Footer({ children, ...restProps }) {
    return <FooterWrapper {...restProps}>{children}</FooterWrapper>
}

Footer.Container = function FooterContainer({ children, ...restProps }) {
    return <Container {...restProps}>{children}</Container>
}
Footer.Identity = function FooterIdentity({ children, ...restProps }) {
    return <Identity {...restProps}>{children}</Identity>
}

Footer.Logo = function FooterLogo({ ...restProps }) {
    return <Logo {...restProps} />
}

Footer.Slogan = function FooterSlogan({ children, ...restProps }) {
    return <Slogan {...restProps} >{children}</Slogan>
}

Footer.Row = function FooterRow({ children, ...restProps }) {
    return <Row {...restProps}>{children}</Row>
}

Footer.Column = function FooterCol({ children, ...restProps }) {
    return <Column {...restProps}>{children}</Column>
}

Footer.ColHeader = function FooterColHeader({ children, ...restProps }) {
    return <ColHeader {...restProps}>{children}</ColHeader>
}

Footer.ColText = function FooterColHeader({ children, ...restProps }) {
    return <ColText {...restProps}>{children}</ColText>
}

Footer.Link = function FooterLink({ children, ...restProps }) {
    return <Link {...restProps}>{children}</Link>
}

Footer.UsefulLinks = function FooterUsefulLinks({ children, ...restProps }) {
    return <UsefulLinks {...restProps}>{children}</UsefulLinks>
}