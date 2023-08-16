import { useTranslation } from 'react-i18next';
import React, { useState } from "react";


const FindingsPanel = () => {
  const { t } = useTranslation('Report');
  const [reportValue, setReportValue] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('ssss')
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="overflow-x-hidden overflow-y-auto invisible-scrollbar" data-cy="trackedMeasurements-panel">
        <div>
          <div className="flex justify-between px-2 py-1 bg-secondary-main">
            <span className="text-base font-bold tracking-widest text-white uppercase">{t('Report')}</span>
          </div>
          <div className="overflow-hidden ohif-scrollbar max-h-112">
            <div className="flex transition duration-300 bg-black border border-transparent cursor-default group">
              <div className="flex items-center justify-between flex-1 px-2 py-4">
                <textarea id="rpt" name='rpt' onChange={(e) => setReportValue(e.target.value)}>{reportValue}</textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="justify-left">
        <button
          className="cursor-pointer flex-row items-center justify-center gap-[5px] justify center px-[10px] outline-none rounded leading-[1.2] font-sans text-center whitespace-nowrap font-400 bg-inputfield-placeholder text-common-light cursor-default h-[26px] text-[13px] min-w-[32px] ml-2"
        >{t('Submit')}</button>
      </div>
    </form>
  )
};

export default FindingsPanel;
