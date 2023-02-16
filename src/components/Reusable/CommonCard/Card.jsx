import React from "react";
import CountUp from "react-countup";

export const DashboardCard = ({ cardItem }) => {
  return (
    <React.Fragment>
      <div className={`_card _dashcard ${cardItem.name}`}>
        <div className="_icon">{cardItem.icon}</div>
        <div className="_content">
          <p className="text-center">{cardItem.name}</p>
          <h4 className="text-center">
            {cardItem.count > 10 ? cardItem.count : "0" + cardItem.count}
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};

export const SkillCard = ({ cardItem }) => {
  return (
    <React.Fragment>
      <div className={`_card _skillcard ${cardItem.name}`}>
        <div className="_icon">{cardItem.icon}</div>
        <div className="_content">
          <p className="text-center">{cardItem.name}</p>
          <h4 className="text-center">
            <CountUp
              className="account-balance"
              start={0}
              end={cardItem.count}
              duration={3}
              useEasing={true}
              separator=","
              suffix="%"
            />
          </h4>
        </div>
      </div>
    </React.Fragment>
  );
};
