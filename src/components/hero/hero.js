import { AiOutlineCheck } from 'react-icons/ai';

import './hero.scss';

export default function Hero() {
    return (
        <section className='hero'>
            <div className='hero__intro'>
                <h1>Car Trawler - Search, Compare & Save</h1>
                <ul>
                    <li><span><AiOutlineCheck /></span> Free cancellation on most bookings</li>
                    <li><span><AiOutlineCheck /></span> 60,000 locations</li>
                    <li><span><AiOutlineCheck /></span> Customer support in 40+ languages</li>
                </ul>
            </div>
            <div className='hero__search-form'>
                <form>
                    <label for="location">Pick-up Location</label>
                    <input type="text" id="location" name="location" disabled value="Las Vegas - Airport" />
                    <label for="location">Pick-up date</label>
                    <input type="date" id="location" name="location" disabled value="2020-03-22" />
                    <label for="location">Location</label>
                    <input type="time" id="location" name="location" disabled value="10:00" />
                    <label for="location">Location</label>
                    <input type="date" id="location" name="location" disabled value="2020-04-06"/>
                    <label for="location">Location</label>
                    <input type="time" id="location" name="location" disabled value="10:00" />
                    <button type='submit'>Search</button>
                </form>
            </div>
        </section>
    )
}

