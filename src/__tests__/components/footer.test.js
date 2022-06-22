import { render } from '@testing-library/react';
import { screen } from '@testing-library/dom';
import { toHaveAttribute } from '@testing-library/jest-dom';

import { FooterContainer } from '../../containers';


describe('<Footer />', () => {
    test('renders the <Footer /> with populated data', () => {
        render(
            <FooterContainer />
        );

        expect(screen.getByTestId('carTrawler-footer-image')).toBeInTheDocument();
        expect(screen.getByText('Driving successful Partnerships')).toBeInTheDocument();

        expect(screen.getByText('CarTrawler Coporate Head Office')).toBeInTheDocument();
        expect(screen.getByText('Classon House')).toBeInTheDocument();
        expect(screen.getByText('Dundrum Business park')).toBeInTheDocument();
        expect(screen.getByText('Dundrum')).toBeInTheDocument();
        expect(screen.getByText('Dublin 14')).toBeInTheDocument();
        expect(screen.getByText('Ireland')).toBeInTheDocument();

        expect(screen.getByText('New York Office')).toBeInTheDocument();
        expect(screen.getByText('14th Floor')).toBeInTheDocument();
        expect(screen.getByText('575 5th Avenue')).toBeInTheDocument();
        expect(screen.getByText('New York')).toBeInTheDocument();
        expect(screen.getByText('NY 10017')).toBeInTheDocument();
        expect(screen.getByText('United States')).toBeInTheDocument();

        expect(screen.getByText('London Office')).toBeInTheDocument();
        expect(screen.getByText('3 Waterhouse Square')).toBeInTheDocument();
        expect(screen.getByText('138 - 142 Holborn')).toBeInTheDocument();
        expect(screen.getByText('London')).toBeInTheDocument();
        expect(screen.getByText('EC2N 2SW')).toBeInTheDocument();
        expect(screen.getByText('United Kingdom')).toBeInTheDocument();

        expect(screen.getByText('Customer Service')).toBeInTheDocument();



        const manageMyBookingLink = screen.getByRole('link', { name: 'Manage My Booking' });
        expect(manageMyBookingLink).toHaveAttribute('href', 'https://customer.cartrawler.com/');

        const faqsLink = screen.getByRole('link', { name: 'FAQs' });
        expect(faqsLink).toHaveAttribute('href', 'https://cartrawler.com/ct/en-gb/faqs');


        const termsLink = screen.getByRole('link', { name: 'Terms and conditions' });
        expect(termsLink).toHaveAttribute('href', 'https://cartrawler.com/ct/en-gb/terms-and-conditions/');

        const privacyLink = screen.getByRole('link', { name: 'Privacy Policy' });
        expect(privacyLink).toHaveAttribute('href', 'https://cartrawler.com/ct/en-gb/privacy-policy/');

        const cookieLink = screen.getByRole('link', { name: 'Cookie Policy' });
        expect(cookieLink).toHaveAttribute('href', 'https://cartrawler.com/ct/en-gb/cookie-policy/');

        const p2bLink = screen.getByRole('link', { name: 'P2B regulations' });
        expect(p2bLink).toHaveAttribute('href', 'https://cartrawler.com/ct/en-gb/platform-to-business-p2b-regulation/');

        const mssLink = screen.getByRole('link', { name: 'Modern Slavery Statement' });
        expect(mssLink).toHaveAttribute('href', 'https://cartrawler.com/ct/en-gb/modern-slavery-statement/');

        const sitemapLink = screen.getByRole('link', { name: 'Sitemap' });
        expect(sitemapLink).toHaveAttribute('href', 'https://cartrawler.com/ct/en-gb/sitemap/');


    });
    test('renders the <Footer /> with 9 links', () => {
        render(
            <FooterContainer />
        );
        const LinkElements = screen.getAllByRole('link');
        expect(LinkElements).toHaveLength(9);

    });
});