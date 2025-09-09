import "./Experience.css";
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import qcImg from "../assets/qc.webp";
import xbrlImg from "../assets/xbrl.jpg";
import qaImg from "../assets/qa.webp";
import { useEffect } from "react";

export const Experience = () => {

    useEffect (()=>{
            document.body.style.backgroundColor = "black"
        })

    const today = new Date();
    const options = {month:"short",year:"numeric"}
    const year = today.getFullYear();
    const todayDate =  today.toLocaleDateString("en-US", options);
        
  return (
    <>
    <Navbar />
    <div className="experience-container">
      <h2 className="section-title">My Work Experience</h2>

      <div className="experience-grid">

        {/* XBRL Financial Associate */}
        <div className="experience-card">
          <img src={xbrlImg} alt="XBRL Financial Analyst" className="experience-img" />
          <h3>Financial Associate</h3>
          <h4>Edgar E-File Solutions Pvt. Ltd.</h4>
          <h4>Chennai</h4>
          <p className="duration">July 2022 – Dec 2023</p>
          <ul className="description">
            <li>Worked extensively with XBRL financial reporting.</li>
            <li>Analyzed financial statements ensuring compliance with regulatory standards.</li>
            <li>Validated financial reports for accuracy in data tagging and taxonomy mapping.</li>
          </ul>
        </div>

        {/* Financial Analyst - QC */}
        <div className="experience-card">
          <img src={qcImg} alt="Financial Analyst QC" className="experience-img" />
          <h3>Financial Analyst - QC</h3>
          <h4>Edgar E-File Solutions Pvt. Ltd.</h4>
          <h4>Chennai</h4>
          <p className="duration">Jan 2024 – Aug 2024</p>
          <ul className="description">
            <li>Handled SEC filings (10-K, 11-K, 10-Q, 20-F, 6-K, S-1, S-4, POS AM, 8-K, F1, F-4) for investment companies like Mutual Funds using XBRL tools (CompSci, EasyView, Xverify).</li>
            <li>Mapped financial data accurately to US GAAP, IFRS, and multiple taxonomies ensuring compliance.</li>
            <li>Prepared and validated XBRL/iXBRL reports maintaining EFM rules and SEC validations.</li>
            <li>Performed quality checks on XBRL instance documents including block text and Level 4 footnotes.</li>
          </ul>
        </div>

        {/* Manual Tester - QA */}
        <div className="experience-card">
          <img src={qaImg} alt="Manual Tester QA" className="experience-img" />
          <h3>Manual Tester - QA</h3>
          <h4>Edgar E-File Solutions Pvt. Ltd.</h4>
          <h4>Chennai</h4>
          <p className="duration">Sep 2024 – {todayDate} &#40;present&#41;</p>
          <ul className="description">
            <li>Performed manual testing for web-based financial applications.</li>
            <li>Prepared test summary reports and provided UAT support.</li>
            <li>Logged, tracked, and reported bugs using Jira & coordinated with developers for resolutions.</li>
            <li>Designed and executed manual test cases for web applications.</li>
            <li>Validated XBRL reports for accuracy in data tagging and taxonomy mapping.</li>
            <li>Performed retesting and closure validation on fixed bugs.</li>
          </ul>
        </div>

      </div>
    </div>
    <Footer />
    </>
  );
};