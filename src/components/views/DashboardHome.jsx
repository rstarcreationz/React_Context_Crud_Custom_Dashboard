import React from "react";
import { MdArrowForwardIos } from "react-icons/md";
import { useContextCrud } from "../../context/ContactsCrudContext";
import { DashboardCard, SkillCard } from "../Reusable/CommonCard/Card";
import {
  dashboardcarddata,
  memberlist,
  skillcarddata,
} from "../Reusable/CommonCard/dashboardcarddata";
import { Button } from "../Reusable/Form/TextField";
import HeadingWrap from "../Reusable/Heading/HeadingWrap";
import {
  getRandomBg,
  transformToAvatar,
} from "../Reusable/HelperFunction/helperfunction";

export default function DashboardHome() {
  const { userInfo } = useContextCrud();

  return (
    <React.Fragment>
      <section className="_dashboard_section">
        <div className="row justify-content-center">
          <div className="col-7">
            <div className="_dashboard_banner">
              <h2>Hello {userInfo.fullname}!</h2>
              <h6>Welcome to the Dashboard</h6>
              <p>lorem ipsum dolor sit amet consectetur</p>
              <div className="mt-2">
                <Button
                  fieldType={"button"}
                  defaultClass={"btn"}
                  btnName={"Go to profile"}
                  btnType={"gradient"}
                  icon={<MdArrowForwardIos />}
                />
              </div>
            </div>
            <HeadingWrap
              title={"Rizwan's Home"}
              alignment={"text-start"}
              paragraph={""}
            />

            <div className="row">
              {dashboardcarddata.map((element, key) => (
                <div className="col-3" key={key}>
                  <DashboardCard cardItem={element} />
                </div>
              ))}
            </div>
          </div>
          <div className="col-5">
            <section className="right_column">
              <HeadingWrap
                title={"Top Skills"}
                alignment={"text-start"}
                paragraph={""}
              />

              <div className="row">
                {skillcarddata.map((element, key) => (
                  <div className="col-4" key={key}>
                    <SkillCard cardItem={element} />
                  </div>
                ))}
              </div>

              <HeadingWrap
                title={"Members"}
                alignment={"text-start"}
                paragraph={""}
              />

              <div className="_members_list">
                <div className="row">
                  {memberlist.map((item, key) => (
                    <div className="col" key={key}>
                      <div
                        className={`_avatar`}
                        style={{ backgroundColor: getRandomBg() }}
                      >
                        {transformToAvatar(item.fullname)}
                      </div>
                      <p className="_name">{item.name}</p>
                      <p className="_designation">{item.designation}</p>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
