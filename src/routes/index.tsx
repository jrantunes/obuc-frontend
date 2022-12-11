import { BrowserRouter, Route, Routes } from "react-router-dom";

import { JobsList, JobMerge, NotFound } from "pages";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<JobsList />} />
      <Route path="/vagas/novo" element={<JobMerge />} />
      <Route path="/vagas/:id" element={<JobMerge />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default Router;
