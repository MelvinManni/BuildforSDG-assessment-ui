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
      <div className='blue-top-bg'></div>
      <div className='estimator-holder'>
        <div className='estimate-card eone'></div>
        <div className='estimate-card etwo'></div>
        <div className='estimate-card emain'>
          <div className='header'>
            <div className='img'>
              <img
                src='.\assets\images\coronavirus.jpg'
                alt='coronavirus'
                className='coronavirus'
              />
            </div>
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
                    <i>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='procedures'
                        class='svg-inline--fa fa-procedures fa-w-20'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 640 512'
                      >
                        <path
                          fill='currentColor'
                          d='M528 224H272c-8.8 0-16 7.2-16 16v144H64V144c0-8.8-7.2-16-16-16H16c-8.8 0-16 7.2-16 16v352c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-48h512v48c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16V336c0-61.9-50.1-112-112-112zM136 96h126.1l27.6 55.2c5.9 11.8 22.7 11.8 28.6 0L368 51.8 390.1 96H512c8.8 0 16-7.2 16-16s-7.2-16-16-16H409.9L382.3 8.8C376.4-3 359.6-3 353.7 8.8L304 108.2l-19.9-39.8c-1.4-2.7-4.1-4.4-7.2-4.4H136c-4.4 0-8 3.6-8 8v16c0 4.4 3.6 8 8 8zm24 256c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64z'
                        ></path>
                      </svg>
                    </i>
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
                    <i>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='users'
                        class='svg-inline--fa fa-users fa-w-20'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 640 512'
                      >
                        <path
                          fill='currentColor'
                          d='M96 224c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm448 0c35.3 0 64-28.7 64-64s-28.7-64-64-64-64 28.7-64 64 28.7 64 64 64zm32 32h-64c-17.6 0-33.5 7.1-45.1 18.6 40.3 22.1 68.9 62 75.1 109.4h66c17.7 0 32-14.3 32-32v-32c0-35.3-28.7-64-64-64zm-256 0c61.9 0 112-50.1 112-112S381.9 32 320 32 208 82.1 208 144s50.1 112 112 112zm76.8 32h-8.3c-20.8 10-43.9 16-68.5 16s-47.6-6-68.5-16h-8.3C179.6 288 128 339.6 128 403.2V432c0 26.5 21.5 48 48 48h288c26.5 0 48-21.5 48-48v-28.8c0-63.6-51.6-115.2-115.2-115.2zm-223.7-13.4C161.5 263.1 145.6 256 128 256H64c-35.3 0-64 28.7-64 64v32c0 17.7 14.3 32 32 32h65.9c6.3-47.4 34.9-87.3 75.2-109.4z'
                        ></path>
                      </svg>
                    </i>
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
                    <i>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='file-alt'
                        class='svg-inline--fa fit fa-file-alt fa-w-12'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 640 512'
                      >
                        <path
                          fill='currentColor'
                          d='M224 136V0H24C10.7 0 0 10.7 0 24v464c0 13.3 10.7 24 24 24h336c13.3 0 24-10.7 24-24V160H248c-13.2 0-24-10.8-24-24zm64 236c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-64c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12v8zm0-72v8c0 6.6-5.4 12-12 12H108c-6.6 0-12-5.4-12-12v-8c0-6.6 5.4-12 12-12h168c6.6 0 12 5.4 12 12zm96-114.1v6.1H256V0h6.1c6.4 0 12.5 2.5 17 7l97.9 98c4.5 4.5 7 10.6 7 16.9z'
                        ></path>
                      </svg>
                    </i>
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
                    <i>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='history'
                        class='svg-inline--fa fa-history fa-w-16'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 640 512'
                      >
                        <path
                          fill='currentColor'
                          d='M504 255.531c.253 136.64-111.18 248.372-247.82 248.468-59.015.042-113.223-20.53-155.822-54.911-11.077-8.94-11.905-25.541-1.839-35.607l11.267-11.267c8.609-8.609 22.353-9.551 31.891-1.984C173.062 425.135 212.781 440 256 440c101.705 0 184-82.311 184-184 0-101.705-82.311-184-184-184-48.814 0-93.149 18.969-126.068 49.932l50.754 50.754c10.08 10.08 2.941 27.314-11.313 27.314H24c-8.837 0-16-7.163-16-16V38.627c0-14.254 17.234-21.393 27.314-11.314l49.372 49.372C129.209 34.136 189.552 8 256 8c136.81 0 247.747 110.78 248 247.531zm-180.912 78.784l9.823-12.63c8.138-10.463 6.253-25.542-4.21-33.679L288 256.349V152c0-13.255-10.745-24-24-24h-16c-13.255 0-24 10.745-24 24v135.651l65.409 50.874c10.463 8.137 25.541 6.253 33.679-4.21z'
                        ></path>
                      </svg>
                    </i>
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
                    <i>
                      <svg
                        aria-hidden='true'
                        focusable='false'
                        data-prefix='fas'
                        data-icon='spinner'
                        class='svg-inline--fa fa-spinner fa-w-16'
                        role='img'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 512 512'
                      >
                        <path
                          fill='currentColor'
                          d='M304 48c0 26.51-21.49 48-48 48s-48-21.49-48-48 21.49-48 48-48 48 21.49 48 48zm-48 368c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zm208-208c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.49-48-48-48zM96 256c0-26.51-21.49-48-48-48S0 229.49 0 256s21.49 48 48 48 48-21.49 48-48zm12.922 99.078c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.491-48-48-48zm294.156 0c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48c0-26.509-21.49-48-48-48zM108.922 60.922c-26.51 0-48 21.49-48 48s21.49 48 48 48 48-21.49 48-48-21.491-48-48-48z'
                        ></path>
                      </svg>
                    </i>
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
