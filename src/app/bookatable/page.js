import FooterWithCta from '../components/footer/FooterWithCta';
import MegaHeader from '../components/headers/MegaHeader';
import BookATable from './BookATable';

export const metadata = {
    title: 'Book a Table - Little India Restaurant',
    description: 'Reserve your dining table at Little India in Lakewood, Colorado to enjoy authentic Indian cuisine and traditional hospitality.',
};

export default function Page() {
    return (
        <>
            <MegaHeader />


            <BookATable />
            
            <FooterWithCta />
        </>
    );
}