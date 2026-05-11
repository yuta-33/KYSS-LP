const formUrl = "https://forms.gle/Vf6ZCtHwiahEpxGg9";

const schedule = [
  ["9/4", "エントリー締切"],
  ["9/11", "一次通過者発表"],
  ["9/26", "ブラッシュアップDAY"],
  ["10/24", "FINAL PITCH"]
];

const faqItems = [
  {
    q: "アイデアが未完成でも参加できますか？",
    a: "参加できます。完成度だけでなく、課題意識や挑戦したい理由を重視します。"
  },
  {
    q: "個人でも参加できますか？",
    a: "個人・チームどちらでも参加可能です。"
  },
  {
    q: "参加費はかかりますか？",
    a: "現時点では無料開催を想定しています。"
  }
];

export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <div className="container">
          <p className="eyebrow">KYSS 2026</p>
          <h1>アイデアのその先へ</h1>
          <p className="lead">
            プレゼンで終わらない挑戦を、高知から。
            <br />
            KYSS 2026 は、若者のアイデアを実装と継続につなげる伴走型のイベントです。
          </p>

          <div className="summary">
            <div>
              <span>開催候補日</span>
              <strong>2026年10月24日予定</strong>
            </div>
            <div>
              <span>会場</span>
              <strong>オーテピア予定</strong>
            </div>
            <div>
              <span>エントリー締切</span>
              <strong>2026年9月4日</strong>
            </div>
          </div>

          <div className="actions">
            <a className="button primary" href="#about">
              詳細を見る
            </a>
            <a
              className="button secondary"
              href={formUrl}
              target="_blank"
              rel="noreferrer"
            >
              事前登録はこちら
            </a>
          </div>

          <div className="heroMedia">
            <img
              src="/header-photo.jpg"
              alt="KYSS関連イベントの様子"
            />
          </div>

          <p className="note">
            本ページは本告知前のつなぎ用LPです。詳細情報は今後更新予定です。
          </p>
        </div>
      </section>

      <section className="section" id="about">
        <div className="container">
          <h2>KYSS 2026とは</h2>
          <div className="grid three">
            <article className="card">
              <h3>ただの順位付けではない</h3>
              <p>アイデアの完成度だけではなく、挑戦の理由や熱量を重視します。</p>
            </article>
            <article className="card">
              <h3>伴走型サミット</h3>
              <p>通過者にはブラッシュアップやメンタリングを通じた支援を想定しています。</p>
            </article>
            <article className="card">
              <h3>次の一歩へつなげる</h3>
              <p>発表で終わらず、実装や継続、その先の挑戦機会へ接続していきます。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>募集部門</h2>
          <div className="grid two">
            <article className="card">
              <h3>U-18部門</h3>
              <p>高校生・高専生向け。アイデア段階でも応募可能です。</p>
            </article>
            <article className="card">
              <h3>U-30部門</h3>
              <p>大学生・専門学生・若手社会人向け。実装や継続を見据えた挑戦を歓迎します。</p>
            </article>
          </div>
          <p className="subtext">個人・チームのどちらでも参加可能です。</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>審査・評価のポイント</h2>
          <ul className="criteriaList">
            <li>熱量</li>
            <li>独自性・着眼点</li>
            <li>課題設定</li>
            <li>継続性・実装への意思</li>
          </ul>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>伴走支援</h2>
          <div className="grid three">
            <article className="card">
              <h3>ブラッシュアップDAY</h3>
              <p>通過後に、伝え方やアイデアの整理を行う機会を用意します。</p>
            </article>
            <article className="card">
              <h3>個別メンタリング</h3>
              <p>必要に応じて、大人の実務家との壁打ちを想定しています。</p>
            </article>
            <article className="card">
              <h3>次の挑戦機会へ</h3>
              <p>KOIB など、その先の接続先も視野に入れた設計を行います。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>スケジュール</h2>
          <div className="timeline">
            {schedule.map(([date, label]) => (
              <div className="timelineItem" key={`${date}-${label}`}>
                <strong>{date}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
          <p className="subtext">日程は現時点の仮情報であり、正式決定後に更新します。</p>
        </div>
      </section>

      <section className="section alt">
        <div className="container">
          <h2>FAQ</h2>
          <div className="faq">
            {faqItems.map((item) => (
              <details className="faqItem" key={item.q}>
                <summary>{item.q}</summary>
                <p>{item.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container ctaBlock">
          <h2>事前登録</h2>
          <p>
            現時点では参加予定人数の把握を目的とした事前登録のみを受け付けます。
            GoogleフォームのURL確定後、下のリンクを差し替えて公開します。
          </p>
          <a
            className="button primary"
            href={formUrl}
            target="_blank"
            rel="noreferrer"
          >
            事前登録フォームへ
          </a>
        </div>
      </section>
    </main>
  );
}
