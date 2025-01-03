import { render} from '@testing-library/react';
import Footer from '../src/components/Footer';

describe('Footer Component', () => {
    it('should render the footer text correctly', () => {
        const { getByText } = render(<Footer />);

      
        const footerText = getByText((content, element) =>
            element?.tagName === 'H2' &&
            content.includes('Bruno Estevan') &&
            content.includes('Desenvolvido por Bruno Estevan')
        );
        expect(footerText).toBeInTheDocument();
    });

    it('should have correct styles', () => {
        const { container } = render(<Footer />);

      
        expect(container.firstChild).toHaveStyle('background-color: #0f172a');
        expect(container.firstChild).toHaveStyle('display: flex');
        expect(container.firstChild).toHaveStyle('justify-content: center');
        expect(container.firstChild).toHaveStyle('width: 100%');
    });
});
