import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import { lazy } from 'react';

const JobList = lazy(() => import('../pages/JobList/JobList'));
const DetailedJob = lazy(() => import('../pages/DetailedJob/DetailedJob'));

export const App = () => {
  return (
    <>
      <GlobalStyle />
      <Routes basename="/Aleannlab-test">
        <Route path="/" element={<JobList />} />
        <Route path="/:jobId" element={<DetailedJob />} />
      </Routes>
    </>
  );
};
