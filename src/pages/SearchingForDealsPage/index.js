import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

import { SearchDeals } from '../../components';
import './styles/searching-for-deals-page.scss';

export default function SearchingForDealsPage() {
    const navigate = useNavigate()
    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/cars-deals')
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate]);

    return (
        <div className="searching-for-deals">
            <SearchDeals />
        </div>
    )
}
