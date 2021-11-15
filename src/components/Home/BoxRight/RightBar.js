import React from "react";
import { Link } from "react-router-dom";

import "./RightBar.scss";

export default function RightBar() {
  return (
    <div>
      <aside className="Aside">
        <div className="continer">
          <div className="sideBox">
            <div className="title">
              <h2>My Blogs</h2>
            </div>
            <div className="Cards">
              <div className="NewsCard">
                <p>
                  Durov Telegram’dagi rasmiy reklamalarni o‘chirish pulli
                  bo‘lishini e'lon qildi
                </p>
                <span>
                  00.00.0000 <span> 00.00</span>
                </span>
              </div>
              <div className="NewsCard">
                <p>
                  Durov Telegram’dagi rasmiy reklamalarni o‘chirish pulli
                  bo‘lishini e'lon qildi
                </p>
                <span>
                  00.00.0000 <span> 00.00</span>
                </span>
              </div>
              <div className="NewsCard">
                <p>
                  Durov Telegram’dagi rasmiy reklamalarni o‘chirish pulli
                  bo‘lishini e'lon qildi
                </p>
                <span>
                  00.00.0000 <span> 00.00</span>
                </span>
              </div>
              <div className="NewsCard">
                <p>
                  Durov Telegram’dagi rasmiy reklamalarni o‘chirish pulli
                  bo‘lishini e'lon qildi
                </p>
                <span>
                  00.00.0000 <span> 00.00</span>
                </span>
              </div>
              <div className="NewsCard">
                <p>
                  Durov Telegram’dagi rasmiy reklamalarni o‘chirish pulli
                  bo‘lishini e'lon qildi
                </p>
                <span>
                  00.00.0000 <span> 00.00</span>
                </span>
              </div>
              <div className="NewsCard">
                <p>
                  Durov Telegram’dagi rasmiy reklamalarni o‘chirish pulli
                  bo‘lishini e'lon qildi
                </p>
                <span>
                  00.00.0000 <span> 00.00</span>
                </span>
              </div>
              <div className="NewsCard">
                <p>
                  Durov Telegram’dagi rasmiy reklamalarni o‘chirish pulli
                  bo‘lishini e'lon qildi
                </p>
                <span>
                  00.00.0000 <span> 00.00</span>
                </span>
              </div>
              <div className="NewsCard">
                <p>
                  Durov Telegram’dagi rasmiy reklamalarni o‘chirish pulli
                  bo‘lishini e'lon qildi
                </p>
                <span>
                  00.00.0000 <span> 00.00</span>
                </span>
              </div>
            </div>
            <div className="MoreBtn">
            
              <Link className="btn" to="/blogs">
                More Blogs
              </Link>
            </div>
          </div>
        </div>
      </aside>
    </div>
  );
}
