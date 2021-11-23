import React, { useState, useRef, useEffect } from "react";
import "./Section.scss";
import Chart from "react-google-charts";
import axios from "axios";

//Slider
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper.min.css";
import SwiperCore, { Autoplay } from 'swiper';
//Slider

export default function Section({ token, ...props }) {

  SwiperCore.use([Autoplay])

  const [feeds, setFeedsData] = useState([]);

  const tokenProp = useRef("token");
  tokenProp.current = token;

  useEffect(() => {
    const abortController = new AbortController();

    async function fetchInstagramPost() {
      try {
        axios
          .get(
            `https://graph.instagram.com/me/media?fields=media_type,media_url,timestamp,username,like_count,caption&limit=${props.limit}&access_token=${tokenProp.current}`
          )
          .then((resp) => {
            setFeedsData(resp.data.data);
            console.log(resp);
          });
      } catch (err) {
        console.log("error", err);
      }
    }

    fetchInstagramPost();

    return () => {
      abortController.abort();
    };
  }, [props.limit]);

  return (
    <div>
      <section className="section">
        <div className="continer">
          <div className="box animate1">
            <Swiper
               autoplay={{ delay: 5000 }}
              style={{ width: "300px" }}
              pagination={{
                type: "fraction",
              }}
              navigation={true}
              className="mySwiper"
            >
              {feeds.length > 0 ? (
                feeds.map((feed) => (
                  <SwiperSlide className="cards">
                    <div className="boxContiner">
                      <div className="imgBox">
                        <div
                          className="img"
                          style={{
                            backgroundImage: `url(${feed.media_url})`,
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "100% 100%",
                          }}
                        >
                          <p>
                            {" "}
                            <span>{feed.timestamp.substring(0, 10)}</span>{" "}
                            <span>{feed.timestamp.substring(11, 16)}</span>{" "}
                          </p>
                        </div>
                        {/* <img src={feed.media_url} alt={feed.caption} /> */}
                      </div>
                    </div>
                  </SwiperSlide>
                ))
              ) : (
                <div className="loaderBox">
                  <div className="loader"></div>
                </div>
              )}
            </Swiper>
          </div>
          <div className="box animate2">
            <Chart
              style={{ color: "#fff" }}
              height={"45vh"}
              chartType="PieChart"
              loader={
                <div className="loaderBox">
                  <div className="loader"></div>
                </div>
              }
              data={[
                ["Task", "Hours per Day"],
                ["HTML", 30],
                ["CSS", 15],
                ["SASS", 15],
                ["JavaScript", 15],
                ["React.js", 25],
              ]}
              options={{
                slices: {
                  0: { color: "#E44D26" },
                  1: { color: "#42A5F5" },
                  2: { color: "#BE3361" },
                  3: { color: "#FFCA28" },
                  4: { color: "#61DAFB" },
                },
                legendTextStyle: { color: "#FFF" },
                titleTextStyle: { color: "#FFF" },
                hAxis: {
                  color: "#000",
                },
                chartArea: {
                  backgroundColor: {
                    fill: "#00000000",
                    fillOpacity: 0,
                  },
                },
                backgroundColor: {
                  fill: "#00000000",
                  fillOpacity: 0,
                },
              }}
              rootProps={{ "data-testid": "1" }}
            />
          </div>
        </div>
      </section>
    </div>
  );
}
