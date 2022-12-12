import { BrowserRouter, Route, Routes } from "react-router-dom";

import DefaultPage from "components/DefaultPage";
import { JobsList, JobRegister, JobEdit, NotFound } from "pages";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="*" element={<NotFound />} />
      <Route element={<DefaultPage />}>
        <Route path="/" element={<JobsList />} />
        <Route path="/vagas/novo" element={<JobRegister />} />
        <Route path="/vagas/:id" element={<JobEdit />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
