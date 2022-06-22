import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import FeedbackList from './components/feedbackList';
import FeedbackData from './data/feedbackData';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import { FeedbackProvider } from './context/FeedbackContext';
import AboutPage from './pages/AboutPage';
import AboutIconLink from './components/AboutIconLink';


function App() {


  return (
    <FeedbackProvider>


    <Router>
      <Header />
      <div classNames="container">
        <Routes>
          <Route exact path='/' element={
            <>
             <FeedbackForm  />
              <FeedbackStats />
              <FeedbackList />
            </>
          }>
  
          </Route>

        <Route path='/about'  element={<AboutPage />} />
      </Routes>
      <AboutIconLink />
      </div>
    </Router>
    </FeedbackProvider>
  );
}

Header.defaultProps = {
  text: 'Feedback UI',
};

export default App;
