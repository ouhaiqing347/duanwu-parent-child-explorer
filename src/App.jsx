import { useMemo, useState } from "react";
import {
  FaBookOpen,
  FaCheck,
  FaChevronLeft,
  FaChevronRight,
  FaCirclePlay,
  FaCompass,
  FaLeaf,
  FaLocationDot,
  FaRotate,
} from "react-icons/fa6";
import { GiBoatFishing, GiCook, GiScrollUnfurled } from "react-icons/gi";
import { PiCardsThreeFill, PiNotebookFill } from "react-icons/pi";

const assetUrl = (path) => `${import.meta.env.BASE_URL}${path}`;

const stations = [
  {
    id: "origin",
    number: 1,
    name: "来历岛",
    short: "端午从哪里来？",
    title: "从纪念屈原开始，认识端午的家国情怀",
    description:
      "农历五月初五是端午节。关于端午的来历，流传最广的是纪念爱国诗人屈原。今天我们从故事出发，理解节日背后的情感。",
    parentPrompt: "孩子可以想一想：为什么人们会把一个人的故事，记成一个节日？",
    image: assetUrl("assets/station-origin-island.webp"),
    icon: GiScrollUnfurled,
    position: { left: "49%", top: "32%" },
    color: "red",
  },
  {
    id: "boat",
    number: 2,
    name: "龙舟码头",
    short: "赛龙舟为什么热闹？",
    title: "龙舟竞渡，是团结协作的节日仪式",
    description:
      "赛龙舟需要鼓手、舵手和桨手配合。孩子可以从鼓点和划桨节奏里，看到集体协作的力量。",
    parentPrompt: "问问孩子：如果你在龙舟上，会选择当鼓手、桨手还是舵手？为什么？",
    image: assetUrl("assets/station-dragon-boat.webp"),
    icon: GiBoatFishing,
    position: { left: "64%", top: "29%" },
    color: "red",
  },
  {
    id: "kitchen",
    number: 3,
    name: "粽香厨房",
    short: "粽子里藏着什么？",
    title: "从一片粽叶，认识节令食物和家庭记忆",
    description:
      "粽子常用粽叶、糯米、红枣或豆沙等材料制作。不同地区还有咸粽、甜粽等口味差异。",
    parentPrompt: "和孩子一起观察：粽叶为什么能包住米？三角形是怎么折出来的？",
    image: assetUrl("assets/station-zongzi-kitchen.webp"),
    icon: GiCook,
    position: { left: "58%", top: "53%" },
    color: "green",
  },
  {
    id: "mugwort",
    number: 4,
    name: "艾草门",
    short: "门口为什么挂艾草？",
    title: "挂艾草、菖蒲，寄托健康平安的愿望",
    description:
      "端午正值仲夏，古人会在门口悬挂艾草、菖蒲，表达驱虫避疫、守护家人的朴素愿望。",
    parentPrompt: "带孩子闻一闻艾草香气，聊聊古人为什么会把植物和健康联系起来。",
    image: assetUrl("assets/station-mugwort-gate.webp"),
    icon: FaLeaf,
    position: { left: "79%", top: "43%" },
    color: "green",
  },
  {
    id: "poem",
    number: 5,
    name: "诗词亭",
    short: "古诗里怎么写端午？",
    title: "读一首端午诗，把节日装进语言里",
    description:
      "端午不只有热闹的活动，也有诗词中的情感。读诗时可以关注节令、人物和画面。",
    parentPrompt: "让孩子找一找诗里出现了哪些节日线索：时间、食物、植物或人物。",
    image: assetUrl("assets/station-poetry-pavilion.webp"),
    icon: FaBookOpen,
    position: { left: "48%", top: "68%" },
    color: "gold",
  },
  {
    id: "quiz",
    number: 6,
    name: "问答渡口",
    short: "知识小测来啦",
    title: "用五道题，把今天学到的内容串起来",
    description:
      "最后来到问答渡口。孩子可以先自己答，再和家长一起复盘每一道题背后的知识点。",
    parentPrompt: "答题后别急着看分数，先让孩子说说自己为什么这么选。",
    image: assetUrl("assets/station-quiz-pier.webp"),
    icon: PiNotebookFill,
    position: { left: "78%", top: "67%" },
    color: "red",
  },
];

const guideItems = [
  "一起朗读端午故事",
  "观察龙舟小细节",
  "动手包一次粽子",
  "诵读一首端午诗词",
  "完成知识小测",
];

const childQuestions = [
  "为什么端午在五月初五？",
  "龙舟比赛有什么意义？",
  "粽子为什么要用叶子包？",
  "艾草闻起来是什么味道？",
];

const facts = [
  {
    title: "端午节是为了纪念屈原",
    answer: "真",
    detail: "这是流传最广、最被大众熟知的说法，也承载了人们对忠诚与家国情怀的纪念。",
  },
  {
    title: "端午节只吃甜粽",
    answer: "假",
    detail: "各地口味不同，有甜粽、咸粽、碱水粽等，地域饮食差异很丰富。",
  },
  {
    title: "艾草和菖蒲常在端午出现",
    answer: "真",
    detail: "古人会把它们挂在门前，表达避秽、守护健康的愿望。",
  },
  {
    title: "所有地方端午习俗都一样",
    answer: "假",
    detail: "同一个节日会在不同地区形成不同做法，这也是传统文化有趣的地方。",
  },
];

const poems = [
  {
    title: "节令线索",
    content: "五月五日天晴明，杨花绕江啼晓莺。",
    note: "读诗时先找时间和景物，孩子更容易进入画面。",
  },
  {
    title: "人物情感",
    content: "国亡身殒今何有，只留离骚在世间。",
    note: "这类诗句适合引导孩子理解纪念与传承。",
  },
  {
    title: "生活画面",
    content: "彩线轻缠红玉臂，小符斜挂绿云鬟。",
    note: "可以让孩子找一找诗里的颜色和动作。",
  },
];

const quizQuestions = [
  {
    question: "端午节人们划龙舟，主要纪念哪位历史人物？",
    options: ["屈原", "伍子胥", "曹操", "李白"],
    answer: "屈原",
    explain: "端午纪念屈原是流传最广的说法，龙舟竞渡也常与这一故事联系在一起。",
  },
  {
    question: "端午节常见的传统食物是什么？",
    options: ["月饼", "粽子", "汤圆", "年糕"],
    answer: "粽子",
    explain: "粽子是端午代表性食物，口味和包法在不同地区会有差异。",
  },
  {
    question: "人们在门前挂艾草，主要表达什么愿望？",
    options: ["招财", "健康平安", "求雪", "庆丰收"],
    answer: "健康平安",
    explain: "端午挂艾草、菖蒲，寄托了古人守护家人、祈求安康的愿望。",
  },
  {
    question: "赛龙舟最能体现哪种能力？",
    options: ["单独表演", "团队协作", "安静阅读", "独自思考"],
    answer: "团队协作",
    explain: "龙舟需要鼓手、桨手、舵手配合，节奏一致才能前进。",
  },
  {
    question: "学习传统节日时，下面哪种做法更适合亲子共学？",
    options: ["只背答案", "边看边问边动手", "跳过故事", "只看图片"],
    answer: "边看边问边动手",
    explain: "故事、提问和动手体验结合，孩子更容易理解节日文化。",
  },
];

const zongziSteps = ["准备材料", "折粽叶", "放糯米", "包成型", "系绳子", "蒸一蒸"];

function StationIcon({ station }) {
  const Icon = station.icon;
  return <Icon aria-hidden="true" />;
}

export function App() {
  const [activeStationId, setActiveStationId] = useState("origin");
  const [checkedGuide, setCheckedGuide] = useState([0, 1]);
  const [flippedFacts, setFlippedFacts] = useState([0]);
  const [poemIndex, setPoemIndex] = useState(0);
  const [quizIndex, setQuizIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const activeStation = useMemo(
    () => stations.find((station) => station.id === activeStationId) ?? stations[0],
    [activeStationId],
  );

  const completed = Math.max(2, stations.findIndex((station) => station.id === activeStationId) + 1);
  const quiz = quizQuestions[quizIndex];
  const isCorrect = submitted && selectedAnswer === quiz.answer;

  const scrollToSection = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const chooseStation = (id) => {
    setActiveStationId(id);
    scrollToSection("station-detail");
  };

  const toggleGuide = (index) => {
    setCheckedGuide((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  const toggleFact = (index) => {
    setFlippedFacts((current) =>
      current.includes(index) ? current.filter((item) => item !== index) : [...current, index],
    );
  };

  const submitAnswer = () => {
    if (!selectedAnswer) return;
    if (!submitted && selectedAnswer === quiz.answer) {
      setScore((current) => current + 1);
    }
    setSubmitted(true);
  };

  const nextQuestion = () => {
    setQuizIndex((current) => (current + 1) % quizQuestions.length);
    setSelectedAnswer("");
    setSubmitted(false);
  };

  return (
    <main className="page-shell">
      <header className="site-header">
        <a className="brand-mark" href="#top" aria-label="返回首页">
          <img src={assetUrl("assets/station-dragon-boat.webp")} alt="" />
          <span>亲子龙舟探索课堂</span>
        </a>
        <nav className="top-nav" aria-label="主要导航">
          {[
            ["首页", "top"],
            ["探索地图", "top"],
            ["学习课堂", "station-detail"],
            ["动手实践", "practice"],
            ["诗词赏析", "poem"],
            ["知识小测", "quiz"],
          ].map(([item, target]) => (
            <button key={item} type="button" onClick={() => scrollToSection(target)}>
              {item}
            </button>
          ))}
        </nav>
        <button className="record-button" type="button" onClick={() => scrollToSection("guide")}>
          <PiNotebookFill aria-hidden="true" />
          学习记录
        </button>
      </header>

      <section className="hero-section" id="top">
        <img className="hero-map" src={assetUrl("assets/hero-river-map.webp")} alt="端午水岸学习地图" />
        <div className="hero-content">
          <p className="eyebrow">五月初五 · 端午安康</p>
          <h1>亲子龙舟探索课堂</h1>
          <p className="hero-copy">沿着水岸地图，和孩子一起读懂端午。</p>
          <div className="hero-actions">
            <button className="primary-action" type="button" onClick={() => chooseStation("origin")}>
              开始探索
              <FaCirclePlay aria-hidden="true" />
            </button>
            <button className="secondary-action" type="button" onClick={() => scrollToSection("guide")}>
              <PiNotebookFill aria-hidden="true" />
              家长引导卡
            </button>
          </div>
        </div>

        <div className="progress-card" aria-label="今日学习进度">
          <span>今日学习进度</span>
          <strong>已完成 {completed}/6</strong>
          <div className="progress-dots" aria-hidden="true">
            {stations.map((station) => (
              <span key={station.id} className={station.number <= completed ? "is-complete" : ""} />
            ))}
          </div>
        </div>

        <div className="map-hotspots" aria-label="端午学习站点">
          {stations.map((station) => (
            <button
              className={`hotspot ${activeStationId === station.id ? "is-active" : ""} ${station.color}`}
              key={station.id}
              style={station.position}
              type="button"
              onClick={() => chooseStation(station.id)}
              aria-label={`打开${station.name}`}
            >
              <strong>{station.number}</strong>
              <span>{station.name}</span>
            </button>
          ))}
        </div>
      </section>

      <section className="station-strip" aria-label="六站导航">
        {stations.map((station) => (
          <button
            type="button"
            className={activeStationId === station.id ? "station-chip is-active" : "station-chip"}
            key={station.id}
            onClick={() => chooseStation(station.id)}
          >
            <StationIcon station={station} />
            <span>{station.name}</span>
          </button>
        ))}
      </section>

      <section className="station-detail" id="station-detail">
        <div className="section-heading">
          <span className="station-number">{activeStation.number}</span>
          <div>
            <p>当前站点</p>
            <h2>{activeStation.name}</h2>
          </div>
        </div>
        <div className="station-grid">
          <article className="station-story">
            <div className="station-image-wrap">
              <img src={activeStation.image} alt={`${activeStation.name}插画`} />
            </div>
            <div className="story-copy">
              <p className="eyebrow">亲子共读</p>
              <h3>{activeStation.title}</h3>
              <p>{activeStation.description}</p>
              <div className="prompt-line">
                <FaCompass aria-hidden="true" />
                <span>{activeStation.parentPrompt}</span>
              </div>
            </div>
          </article>

          <aside className="lesson-panel">
            <p className="eyebrow">今天我们学什么？</p>
            <h3>{activeStation.short}</h3>
            <div className="lesson-list">
              {stations.slice(0, 4).map((station) => (
                <button
                  type="button"
                  key={station.id}
                  className={activeStationId === station.id ? "lesson-row is-active" : "lesson-row"}
                  onClick={() => setActiveStationId(station.id)}
                >
                  <StationIcon station={station} />
                  <span>{station.short}</span>
                </button>
              ))}
            </div>
          </aside>
        </div>
      </section>

      <section className="guide-and-facts" id="guide">
        <article className="guide-panel">
          <div className="panel-title">
            <PiNotebookFill aria-hidden="true" />
            <div>
              <p>家长引导卡</p>
              <h2>陪伴孩子更好地学习端午</h2>
            </div>
          </div>
          <div className="guide-list">
            {guideItems.map((item, index) => (
              <label key={item} className="check-row">
                <input
                  type="checkbox"
                  checked={checkedGuide.includes(index)}
                  onChange={() => toggleGuide(index)}
                />
                <span aria-hidden="true">
                  <FaCheck />
                </span>
                {item}
              </label>
            ))}
          </div>
        </article>

        <article className="question-panel">
          <div className="panel-title">
            <FaBookOpen aria-hidden="true" />
            <div>
              <p>孩子可以这样问</p>
              <h2>把知识变成对话</h2>
            </div>
          </div>
          <div className="question-bubbles">
            {childQuestions.map((question) => (
              <button key={question} type="button" onClick={() => scrollToSection("station-detail")}>
                {question}
              </button>
            ))}
          </div>
          <button className="small-link" type="button" onClick={() => scrollToSection("practice")}>
            查看亲子实践
            <FaChevronRight aria-hidden="true" />
          </button>
        </article>

        <article className="fact-panel">
          <div className="panel-title compact">
            <PiCardsThreeFill aria-hidden="true" />
            <div>
              <p>是真是假</p>
              <h2>点击卡片翻转</h2>
            </div>
          </div>
          <div className="fact-cards">
            {facts.map((fact, index) => {
              const flipped = flippedFacts.includes(index);
              return (
                <button
                  type="button"
                  key={fact.title}
                  className={flipped ? "fact-card is-flipped" : "fact-card"}
                  onClick={() => toggleFact(index)}
                  aria-pressed={flipped}
                >
                  <span className="fact-answer">{flipped ? fact.answer : "?"}</span>
                  <strong>{fact.title}</strong>
                  <small>{flipped ? fact.detail : "点我翻开答案"}</small>
                  <FaRotate aria-hidden="true" />
                </button>
              );
            })}
          </div>
        </article>
      </section>

      <section className="practice-band" id="practice">
        <div className="practice-heading">
          <div>
            <p className="eyebrow">粽子小厨房</p>
            <h2>一起动手，包出香香的粽子</h2>
          </div>
          <button className="secondary-action" type="button" onClick={() => scrollToSection("quiz")}>
            <FaCirclePlay aria-hidden="true" />
            挑战小测验
          </button>
        </div>
        <img src={assetUrl("assets/zongzi-steps.webp")} alt="包粽子的六个步骤插画" />
        <ol className="step-labels">
          {zongziSteps.map((step, index) => (
            <li key={step}>
              <span>{index + 1}</span>
              {step}
            </li>
          ))}
        </ol>
      </section>

      <section className="poem-section" id="poem">
        <div className="section-heading slim">
          <span className="station-number">诗</span>
          <div>
            <p>诗词亭</p>
            <h2>用声音读出节日画面</h2>
          </div>
        </div>
        <div className="poem-board">
          <button
            type="button"
            aria-label="上一首"
            onClick={() => setPoemIndex((current) => (current + poems.length - 1) % poems.length)}
          >
            <FaChevronLeft aria-hidden="true" />
          </button>
          <article>
            <p>{poems[poemIndex].title}</p>
            <blockquote>{poems[poemIndex].content}</blockquote>
            <span>{poems[poemIndex].note}</span>
          </article>
          <button
            type="button"
            aria-label="下一首"
            onClick={() => setPoemIndex((current) => (current + 1) % poems.length)}
          >
            <FaChevronRight aria-hidden="true" />
          </button>
        </div>
      </section>

      <section className="quiz-section" id="quiz">
        <div className="quiz-illustration">
          <img src={assetUrl("assets/station-quiz-pier.webp")} alt="问答渡口插画" />
        </div>
        <div className="quiz-card">
          <p className="eyebrow">挑战小测验</p>
          <div className="quiz-meta">
            <span>第 {quizIndex + 1} 题 / 共 {quizQuestions.length} 题</span>
            <span>当前得分 {score}</span>
          </div>
          <h2>{quiz.question}</h2>
          <div className="answer-grid">
            {quiz.options.map((option, index) => {
              const chosen = selectedAnswer === option;
              const correct = submitted && option === quiz.answer;
              const wrong = submitted && chosen && option !== quiz.answer;
              return (
                <button
                  type="button"
                  key={option}
                  className={`answer-option ${chosen ? "is-selected" : ""} ${correct ? "is-correct" : ""} ${wrong ? "is-wrong" : ""}`}
                  onClick={() => !submitted && setSelectedAnswer(option)}
                >
                  <span>{String.fromCharCode(65 + index)}.</span>
                  {option}
                </button>
              );
            })}
          </div>
          {submitted && (
            <div className={isCorrect ? "quiz-result is-correct" : "quiz-result"}>
              <strong>{isCorrect ? "答对了！" : "再想一想"}</strong>
              <span>{quiz.explain}</span>
            </div>
          )}
          <div className="quiz-actions">
            <button className="primary-action" type="button" onClick={submitAnswer} disabled={!selectedAnswer || submitted}>
              提交答案
            </button>
            <button className="secondary-action" type="button" onClick={nextQuestion}>
              下一题
              <FaChevronRight aria-hidden="true" />
            </button>
          </div>
        </div>
      </section>

      <footer className="page-footer">
        <FaLocationDot aria-hidden="true" />
        <span>端午节科普分享 · 适合课堂导入、亲子共读和活动现场讲解</span>
      </footer>
    </main>
  );
}
