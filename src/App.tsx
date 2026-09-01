import { useCallback, useEffect, useRef, useState } from "react";
import {
  CalendarDays,
  Check,
  Heart,
  MapPin,
  Navigation,
  Plane,
  Volume2,
  VolumeX,
} from "lucide-react";
import heroIslandWedding from "../assets/hero-island-wedding-v4.webp";
import islandBroadcast from "../assets/island-broadcast-v3.webp";
import nookInc from "../assets/nook-inc.png";
import tidesOfPromise from "../assets/tides-of-promise.mp3";
import weddingSeason from "../assets/wedding-season-hd.jpg";

const schedule = [
  {
    time: "14:30",
    title: "机场前集合",
    note: "在机场输入 5 位 Dodo 密码，飞往晴屿岛",
    icon: Plane,
  },
  {
    time: "15:18",
    title: "草坪仪式",
    note: "在风铃与海浪声里交换约定",
    icon: Heart,
  },
  {
    time: "17:20",
    title: "岛上晚宴",
    note: "树影餐桌、蛋糕与第一支舞",
    icon: CalendarDays,
  },
  {
    time: "20:00",
    title: "星空散步",
    note: "若天气晴朗，就带上仙女棒去北岸看星星",
    icon: Navigation,
  },
];

type FormErrorTarget =
  | ""
  | "guestName"
  | "accommodation"
  | "checkInAt"
  | "checkOutAt";

function PhoneClock() {
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    const timer = window.setInterval(() => setNow(new Date()), 60000);
    return () => window.clearInterval(timer);
  }, []);

  return (
    <span>
      {now.toLocaleTimeString("zh-CN", {
        hour: "2-digit",
        minute: "2-digit",
      })}
    </span>
  );
}

function resizeMessageField(field: HTMLTextAreaElement) {
  const minimumHeight = 44;
  const maximumHeight = 132;
  field.style.height = `${minimumHeight}px`;
  const nextHeight = Math.min(
    maximumHeight,
    Math.max(minimumHeight, field.scrollHeight + 2),
  );
  field.style.height = `${nextHeight}px`;
  field.style.overflowY = field.scrollHeight + 2 > maximumHeight ? "auto" : "hidden";
}

function LeafMark({ small = false }: { small?: boolean }) {
  return (
    <span
      className={small ? "leaf-mark small" : "leaf-mark"}
      aria-hidden="true"
    >
      <i />
      <i />
      <i />
    </span>
  );
}

export function App() {
  const [sound, setSound] = useState(false);
  const [name, setName] = useState("");
  const [partySize, setPartySize] = useState("1");
  const [accommodation, setAccommodation] = useState<
    "idle" | "yes" | "no"
  >("idle");
  const [checkInAt, setCheckInAt] = useState("");
  const [checkOutAt, setCheckOutAt] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [formError, setFormError] = useState("");
  const [formErrorTarget, setFormErrorTarget] =
    useState<FormErrorTarget>("");
  const audioRef = useRef<HTMLAudioElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const successHeadingRef = useRef<HTMLHeadingElement>(null);
  const messageRef = useRef<HTMLTextAreaElement>(null);

  const stopBgm = useCallback(() => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.currentTime = 0;
    setSound(false);
  }, []);

  useEffect(() => () => stopBgm(), [stopBgm]);

  useEffect(() => {
    const stopWhenHidden = () => {
      if (document.hidden) stopBgm();
    };
    document.addEventListener("visibilitychange", stopWhenHidden);
    return () => document.removeEventListener("visibilitychange", stopWhenHidden);
  }, [stopBgm]);

  useEffect(() => {
    if (!submitted) return;
    window.requestAnimationFrame(() => {
      const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)",
      ).matches;
      formRef.current?.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "center",
      });
      successHeadingRef.current?.focus({ preventScroll: true });
    });
  }, [submitted]);

  useEffect(() => {
    if (!submitted && messageRef.current) {
      resizeMessageField(messageRef.current);
    }
  }, [submitted]);

  const clearFormError = () => {
    setFormError("");
    setFormErrorTarget("");
  };

  const showFormError = (
    target: Exclude<FormErrorTarget, "">,
    message: string,
    selector: string,
  ) => {
    setFormErrorTarget(target);
    setFormError(message);
    window.requestAnimationFrame(() => {
      formRef.current?.querySelector<HTMLElement>(selector)?.focus();
    });
  };

  const toggleSound = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (sound) {
      stopBgm();
      return;
    }
    audio.volume = 0.34;
    void audio.play().catch(() => setSound(false));
  };

  const jump = () => {
    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    document.querySelector("#broadcast")?.scrollIntoView({
      behavior: reducedMotion ? "auto" : "smooth",
    });
  };

  return (
    <main>
      <audio
        ref={audioRef}
        src={tidesOfPromise}
        loop
        preload="metadata"
        onPlay={() => setSound(true)}
        onPause={() => setSound(false)}
      />
      <button
        className="sound-button"
        onClick={toggleSound}
        aria-label={sound ? "关闭岛屿婚礼音乐" : "播放岛屿婚礼音乐"}
        aria-pressed={sound}
      >
        {sound ? <Volume2 /> : <VolumeX />}
      </button>
      <section className="hero" id="top">
        <img
          className="hero-key-visual"
          src={heroIslandWedding}
          alt="晴屿岛的婚礼现场，新人在白色花门前牵手，渡渡鸟机组与水上飞机在机场旁迎接宾客"
          fetchPriority="high"
        />
        <nav className="island-nav" aria-label="页面导航">
          <a href="#top" className="nav-brand">
            <LeafMark small /> 岛屿婚礼事务所
          </a>
          <div>
            <a href="#schedule">行程</a>
            <a href="#map">地图</a>
            <a href="#rsvp">回执</a>
          </div>
        </nav>

        <div className="hero-copy">
          <p className="eyebrow">
            <Plane size={17} /> DODO AIRLINES · 晴屿岛特别航班
          </p>
          <div className="hero-poster-title">
            <h1>晴屿岛婚礼</h1>
            <p>
              林屿 <Heart fill="currentColor" /> 苏晴
            </p>
          </div>
          <div className="event-summary" aria-label="婚礼时间和地点">
            <span>
              <CalendarDays aria-hidden="true" />
              <span>
                <b>2030.10.01</b>
                <small>星期二 · 14:30</small>
              </span>
            </span>
            <span>
              <MapPin aria-hidden="true" />
              <span>
                <b>青屿湖畔礼堂</b>
                <small>机场前集合</small>
              </span>
            </span>
          </div>
        </div>
        <div className="hero-cta-slot">
          <button className="primary-button hero-cta" onClick={jump}>
            查看登岛安排 <Plane size={17} />
          </button>
        </div>
      </section>

      <section className="broadcast" id="broadcast">
        <img
          className="broadcast-scene"
          src={islandBroadcast}
          alt="西施惠在鲜花装点的服务处播报晴屿岛婚礼消息"
          loading="lazy"
          decoding="async"
        />
        <div className="broadcast-hud">
          <span>晴屿岛</span>
          <time dateTime="2030-10-01T14:30">10月1日 · 星期二</time>
        </div>
        <div className="broadcast-dialogue">
          <span className="broadcast-speaker">岛内广播</span>
          <p>晴屿岛的各位岛民，大家下午好！</p>
          <p>
            现在开始播报今天的岛内广播。今天岛上将举行一场特别的婚礼，请大家在 14:30 到机场前集合！
          </p>
        </div>
      </section>

      <section className="phone-zone" id="schedule">
        <div className="section-heading light">
          <h2>NookPhone · 婚礼日程</h2>
          <span>今天的岛内行程，已经为你排好。</span>
        </div>
        <div className="phone-shell">
          <div className="phone-top">
            <PhoneClock />
            <LeafMark small />
          </div>
          <div className="phone-screen">
            <div className="app-title">
              <span className="app-icon">
                <CalendarDays />
              </span>
              <div>
                <small>晴屿岛限定应用</small>
                <b>晴屿岛婚礼日</b>
              </div>
            </div>
            <div className="phone-agenda">
            {schedule.map(({ time, title, note, icon: Icon }, index) => (
              <article key={title} className="agenda-row">
                <time>{time}</time>
                <span className="agenda-icon">
                  <Icon />
                  {index < schedule.length - 1 && <i />}
                </span>
                <div className="agenda-copy">
                  <h3>{title}</h3>
                  <p>{note}</p>
                </div>
              </article>
            ))}
            </div>
          </div>
          <div className="home-pill" />
        </div>
      </section>

      <section className="map-section" id="map">
        <div className="map-board">
          <div
            className="map-art"
            role="img"
            aria-label="晴屿岛婚礼日路线图：14:30 机场前集合，15:18 仪式草坪，17:20 晚宴区，20:00 北岸散步"
          >
            <div className="island-shape" aria-hidden="true" />
            <svg className="map-river" viewBox="0 0 100 100" aria-hidden="true">
              <path d="M52 -8 C40 15 66 24 55 43 C44 61 62 73 46 108" />
            </svg>
            <svg
              className="route-line"
              viewBox="0 0 100 100"
              aria-hidden="true"
            >
              <path d="M14 83 C30 76 50 70 68 55 C59 39 43 30 25 21 C45 15 66 14 84 19" />
            </svg>
            <span className="map-detail detail-pond" aria-hidden="true" />
            <span className="map-detail detail-plaza" aria-hidden="true" />
            <span className="map-detail detail-orchard" aria-hidden="true" />
            <span className="pin pin-a">
              <i>1</i>
              <b>机场前</b>
              <small>14:30</small>
            </span>
            <span className="pin pin-b">
              <i>2</i>
              <b>仪式草坪</b>
              <small>15:18</small>
            </span>
            <span className="pin pin-c">
              <i>3</i>
              <b>晚宴区</b>
              <small>17:20</small>
            </span>
            <span className="pin pin-d">
              <i>4</i>
              <b>北岸</b>
              <small>20:00</small>
            </span>
            <div className="map-legend">
              <Navigation size={16} /> 婚礼日路线 · 4 站
            </div>
          </div>
          <div className="map-copy">
            <dl>
              <div>
                <dt>集合地点</dt>
                <dd>晴屿岛机场前广场</dd>
              </div>
              <div>
                <dt>婚礼地点</dt>
                <dd>青屿湖畔礼堂</dd>
              </div>
              <div>
                <dt>建议穿着</dt>
                <dd>海岛轻礼服 / 柔和自然色</dd>
              </div>
              <div>
                <dt>随身物品</dt>
                <dd>好心情、相机和一点点期待</dd>
              </div>
            </dl>
            <a
              className="map-link"
              href="https://maps.apple.com/?q=%E9%9D%92%E5%B1%BF%E6%B9%96%E7%95%94%E7%A4%BC%E5%A0%82"
              target="_blank"
              rel="noreferrer"
            >
              打开地图 <Navigation size={17} />
            </a>
          </div>
        </div>
      </section>

      <section className="photo-section" id="photo">
        <div className="wedding-photo">
          <img
            src={weddingSeason}
            alt="动物森友会婚礼季中的莉咏与健兆"
            loading="lazy"
            decoding="async"
          />
          <span>巴猎岛 · 六月婚礼季留影</span>
        </div>
        <div className="photo-copy">
          <h2>
            婚礼季的浪漫，
            <br />
            这次轮到我们。
          </h2>
          <span>
            每年六月，莉咏和健兆都会去巴猎岛拍结婚纪念照。今天，我们也把这份粉色浪漫搬到了晴屿岛。
          </span>
        </div>
      </section>

      <section className="rsvp-section" id="rsvp">
        <div className="passport">
          <div className="passport-cover">
            <LeafMark />
            <p>QINGYU ISLAND</p>
            <h2>登岛护照</h2>
            <span>WEDDING PASSPORT</span>
          </div>
          <form
            ref={formRef}
            className="passport-page"
            noValidate
            onSubmit={(event) => {
              event.preventDefault();
              if (!name.trim()) {
                showFormError(
                  "guestName",
                  "请填写你的姓名后再提交回执。",
                  '[name="guestName"]',
                );
                return;
              }
              if (accommodation === "idle") {
                showFormError(
                  "accommodation",
                  "请选择是否需要住宿。",
                  ".accommodation-field button",
                );
                return;
              }
              if (accommodation === "yes" && !checkInAt) {
                showFormError(
                  "checkInAt",
                  "请填写入住日期和时间。",
                  '[name="checkInAt"]',
                );
                return;
              }
              if (accommodation === "yes" && !checkOutAt) {
                showFormError(
                  "checkOutAt",
                  "请填写退房日期和时间。",
                  '[name="checkOutAt"]',
                );
                return;
              }
              if (
                accommodation === "yes" &&
                checkOutAt <= checkInAt
              ) {
                showFormError(
                  "checkOutAt",
                  "退房时间需要晚于入住时间，请重新选择。",
                  '[name="checkOutAt"]',
                );
                return;
              }
              clearFormError();
              setSubmitted(true);
            }}
          >
            {submitted ? (
              <div className="success" role="status" aria-live="polite">
                <span>
                  <Check />
                </span>
                <h2 ref={successHeadingRef} tabIndex={-1}>
                  出席回执已登记！
                </h2>
                <p>
                  {name}，已为你预留 {partySize} 个席位
                  {accommodation === "yes" ? "，住宿时间也已记录" : ""}。
                  婚礼当天见！Dodo 密码会在婚礼前发送给你。
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSubmitted(false);
                    window.requestAnimationFrame(() => {
                      const reducedMotion = window.matchMedia(
                        "(prefers-reduced-motion: reduce)",
                      ).matches;
                      formRef.current?.scrollIntoView({
                        behavior: reducedMotion ? "auto" : "smooth",
                        block: "center",
                      });
                      formRef.current
                        ?.querySelector<HTMLInputElement>('[name="guestName"]')
                        ?.focus({ preventScroll: true });
                    });
                  }}
                >
                  修改回执
                </button>
              </div>
            ) : (
              <>
                <label className="form-field">
                  <span>
                    宾客姓名 <b>必填</b>
                  </span>
                  <input
                    name="guestName"
                    autoComplete="name"
                    maxLength={30}
                    value={name}
                    onChange={(e) => {
                      setName(e.target.value);
                      if (formError) clearFormError();
                    }}
                    placeholder="请输入你的姓名"
                    aria-invalid={formErrorTarget === "guestName"}
                    aria-describedby={
                      formErrorTarget === "guestName" ? "rsvp-error" : undefined
                    }
                    required
                  />
                </label>
                <label className="form-field">
                  <span>
                    出席人数 <b>含本人</b>
                  </span>
                  <select
                    name="partySize"
                    value={partySize}
                    onChange={(event) => setPartySize(event.target.value)}
                  >
                    {[1, 2, 3, 4, 5, 6].map((count) => (
                      <option key={count} value={count}>
                        {count} 人
                      </option>
                    ))}
                  </select>
                </label>
                <fieldset
                  className="accommodation-field"
                  aria-invalid={formErrorTarget === "accommodation"}
                  aria-describedby={
                    formErrorTarget === "accommodation"
                      ? "rsvp-error"
                      : undefined
                  }
                >
                  <legend>
                    是否需要住宿 <b>必填</b>
                  </legend>
                  <button
                    type="button"
                    className={accommodation === "yes" ? "selected" : ""}
                    aria-pressed={accommodation === "yes"}
                    onClick={() => {
                      setAccommodation("yes");
                      clearFormError();
                    }}
                  >
                    需要住宿
                  </button>
                  <button
                    type="button"
                    className={accommodation === "no" ? "selected" : ""}
                    aria-pressed={accommodation === "no"}
                    onClick={() => {
                      setAccommodation("no");
                      setCheckInAt("");
                      setCheckOutAt("");
                      clearFormError();
                    }}
                  >
                    无需住宿
                  </button>
                </fieldset>
                {accommodation === "yes" && (
                  <div className="accommodation-dates">
                    <label className="form-field">
                      <span>
                        入住日期时间 <b>必填</b>
                      </span>
                      <input
                        type="datetime-local"
                        name="checkInAt"
                        value={checkInAt}
                        onChange={(event) => {
                          setCheckInAt(event.target.value);
                          clearFormError();
                        }}
                        aria-invalid={formErrorTarget === "checkInAt"}
                        aria-describedby={
                          formErrorTarget === "checkInAt"
                            ? "rsvp-error"
                            : undefined
                        }
                        required
                      />
                    </label>
                    <label className="form-field">
                      <span>
                        退房日期时间 <b>必填</b>
                      </span>
                      <input
                        type="datetime-local"
                        name="checkOutAt"
                        value={checkOutAt}
                        onChange={(event) => {
                          setCheckOutAt(event.target.value);
                          clearFormError();
                        }}
                        aria-invalid={formErrorTarget === "checkOutAt"}
                        aria-describedby={
                          formErrorTarget === "checkOutAt"
                            ? "rsvp-error"
                            : undefined
                        }
                        required
                      />
                    </label>
                  </div>
                )}
                <label className="form-field">
                  <span>
                    联系电话 <b>选填</b>
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    autoComplete="tel"
                    inputMode="tel"
                    maxLength={20}
                    value={phone}
                    onChange={(event) => setPhone(event.target.value)}
                    placeholder="方便我们与你确认"
                  />
                </label>
                <label className="form-field">
                  <span>
                    留言祝福 <b>选填</b>
                  </span>
                  <textarea
                    ref={messageRef}
                    name="message"
                    rows={1}
                    maxLength={200}
                    value={message}
                    onChange={(event) => {
                      resizeMessageField(event.currentTarget);
                      setMessage(event.target.value);
                    }}
                    placeholder="写下想对我们说的话"
                  />
                  <small className="message-count">{message.length} / 200</small>
                </label>
                {formError && (
                  <p className="form-error" id="rsvp-error" role="alert">
                    {formError}
                  </p>
                )}
                <button className="submit-button" type="submit">
                  确认出席 <Plane />
                </button>
                <p className="form-note">
                  以上信息仅用于本次婚礼的席位与住宿安排。Dodo 密码将在婚礼前发送。
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      <footer>
        <img src={nookInc} alt="Nook Inc." loading="lazy" decoding="async" />
        <p>这是一份私人、非商业的粉丝概念请柬，与 Nintendo 无官方关联。</p>
        <a href="#top">返回顶部</a>
      </footer>
    </main>
  );
}
