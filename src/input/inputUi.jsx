import React from 'react';
import SevereImpact from '../output/severeImpact';
import Disclaimer from '../output/disclaimer';
import Impact from '../output/impact';
import covid19ImpactEstimator from '../estimatorCalc/estimator';
import { useState } from 'react';

export default function InputUi() {
  const [data, setData] = useState({
    totalHospitalBeds: '',
    population: '',
    reportedCases: '',
    timeToElapse: '',
    periodType: 'days',
  });

  function estimateChange(event) {
    const { name, value } = event.target;

    setData((prev) => {
      if (name === 'data-total-hospital-beds') {
        return {
          totalHospitalBeds: value,
          population: prev.population,
          reportedCases: prev.reportedCases,
          timeToElapse: prev.timeToElapse,
          periodType: prev.periodType,
        };
      } else if (name === 'data-population') {
        return {
          totalHospitalBeds: prev.totalHospitalBeds,
          population: value,
          reportedCases: prev.reportedCases,
          timeToElapse: prev.timeToElapse,
          periodType: prev.periodType,
        };
      } else if (name === 'data-reported-cases') {
        return {
          totalHospitalBeds: prev.totalHospitalBeds,
          population: prev.population,
          reportedCases: value,
          timeToElapse: prev.timeToElapse,
          periodType: prev.periodType,
        };
      } else if (name === 'data-time-to-elapse') {
        return {
          totalHospitalBeds: prev.totalHospitalBeds,
          population: prev.population,
          reportedCases: prev.reportedCases,
          timeToElapse: value,
          periodType: prev.periodType,
        };
      } else if (name === 'data-period-type') {
        return {
          totalHospitalBeds: prev.totalHospitalBeds,
          population: prev.population,
          reportedCases: prev.reportedCases,
          timeToElapse: prev.timeToElapse,
          periodType: value,
        };
      } else {
        console.log('There seems to be an ERROR');
      }
    });
  }

  function estimateSubmit(event) {
    let input1 = document.getElementById('totalHospitalBeds').value;
    let input2 = document.getElementById('population').value;
    let input3 = document.getElementById('reportedCases').value;
    let input4 = document.getElementById('timeToElapse').value;
    let load = document.getElementById('loading');
    event.preventDefault();
    if (input1 === '' || input2 === '' || input3 === '' || input4 === '') {
      document.getElementById('warning').style.display = 'block';
      setTimeout(() => {
        document.getElementById('warning').style.display = 'none';
      }, 2400);
    } else {
      load.style.display = 'block';
      setTimeout(() => {
        document.getElementById('output').style.display = 'block';
        load.style.display = 'none';
      }, 1500);
    }
  }

  let inputdata = {
    totalHospitalBeds: parseInt(data.totalHospitalBeds),
    population: parseInt(data.population),
    reportedCases: parseInt(data.reportedCases),
    timeToElapse: parseInt(data.timeToElapse),
    periodType: data.periodType,
  };

  const impact = covid19ImpactEstimator(inputdata).impact;
  const severeImpact = covid19ImpactEstimator(inputdata).severeImpact;

  return (
    <div>
      <div className='blue-top-bg'>
      </div>
      <div className='estimator-holder'>
        <div className='estimate-card eone'></div>
        <div className='estimate-card etwo'></div>
        <div className='estimate-card emain'>
          <div className='header'>
            <img
              src='.\assets\images\coronavirus.png'
              alt='coronavirus'
              className='coronavirus'
            />
            <p className='header__main'>
              <span className='bigger'>COVID-19</span> Infections Estimator
            </p>

            <p className='header__sub'>#BuildforSDG</p>
          </div>

          <div className='description'>
            <p className='description__text'>
              Please enter the details requested below
            </p>
          </div>

          <div className='input'>
            <form>
              <div>
                <div className='totalHospitalBeds'>
                  <input
                    onChange={estimateChange}
                    type='number'
                    name='data-total-hospital-beds'
                    id='totalHospitalBeds'
                    required
                    min='1'
                    value={data.totalHospitalBeds}
                  />
                  <label htmlFor='totalHospitalBeds'>Total hospital beds</label>
                  <span className='line'></span>
                  <div className='icon'>
                    <i className='fas fa-procedures'></i>
                  </div>
                </div>

                <div className='population'>
                  <input
                    onChange={estimateChange}
                    type='number'
                    name='data-population'
                    id='population'
                    required
                    min='1'
                    value={data.population}
                  />
                  <label htmlFor='population'>Population</label>
                  <span className='line'></span>
                  <div className='icon'>
                    <i className='fas fa-users'></i>
                  </div>
                </div>

                <div className='reportedCases'>
                  <input
                    onChange={estimateChange}
                    type='number'
                    name='data-reported-cases'
                    id='reportedCases'
                    required
                    min='1'
                    value={data.reportedCases}
                  />
                  <label htmlFor='reportedCases'>reported cases</label>
                  <span className='line'></span>
                  <div className='icon'>
                    <i className='fas fa-file-alt'></i>
                  </div>
                </div>

                <div className='periodType'>
                  <label htmlFor='periodType'>Period Type</label>
                  <select
                    name='data-period-type'
                    onChange={estimateChange}
                    id='periodType'
                  >
                    <option disabled>Select Period Type</option>
                    <option value='days'>Days</option>
                    <option value='weeks'>Weeks</option>
                    <option value='months'>Months</option>
                  </select>
                </div>

                <div className='timeToElapse'>
                  <input
                    onChange={estimateChange}
                    type='number'
                    name='data-time-to-elapse'
                    id='timeToElapse'
                    required
                    min='1'
                    value={data.timeToElapse}
                  />
                  <label htmlFor='timeToElapse'>time to elapse</label>
                  <span className='line'></span>
                  <div className='icon'>
                    <i className='fas fa-history'></i>
                  </div>
                </div>
              </div>
              <div>
                <div className='warning'>
                  <span id='warning'>Please fill all the input fields! </span>
                </div>

                <button
                  onClick={estimateSubmit}
                  name='data-go-estimate'
                  type='submit'
                >
                  Estimate
                  <span id='loading'>
                    <i className='fas fa-spinner'></i>
                  </span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='output' id='output'>
        <div className='output-container'>
          <button
            id='close'
            onClick={function () {
              document.getElementById('output').style.display = 'none';
            }}
          >
            <i className='far fa-times-circle'></i>
          </button>
          <div className='output-card'>
            <div className='output_title'>
              <p>Impact</p>
            </div>
            <Impact
              current={impact.currentlyInfected}
              infections={impact.infectionsByRequestedTime}
              severe={impact.severeCasesByRequestedTime}
              hospital={impact.hospitalBedsByRequestedTime}
              icu={impact.casesForICUByRequestedTime}
              ventilators={impact.casesForVentilatorsByRequestedTime}
            />
            <Disclaimer />
          </div>

          <div className='output-card two'>
            <div className='output_title'>
              <p>Severe Impact</p>
            </div>
            <SevereImpact
              current={severeImpact.currentlyInfected}
              infections={severeImpact.infectionsByRequestedTime}
              severe={severeImpact.severeCasesByRequestedTime}
              hospital={severeImpact.hospitalBedsByRequestedTime}
              icu={severeImpact.casesForICUByRequestedTime}
              ventilators={severeImpact.casesForVentilatorsByRequestedTime}
            />
            <Disclaimer />
          </div>
        </div>
      </div>
    </div>
  );
}
