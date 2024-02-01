import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Question from '../pages/Question';

export default function RouteIndex() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />}>
                    <Route path='/questions' element={<Question />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}
