const formUrl =
  "https://docs.google.com/forms/d/e/1FAIpQLSdaStvXF1OA85h5eEz6yxdydvC5sYsN3MFI6ee2te8cNZ8K8w/viewform";

const schedule = [
  ["9/4（金）", "一次審査（書類選考）エントリー締切"],
  ["9/5（土）〜9/10（木）", "一次審査 実施期間"],
  ["9/11（金）", "一次審査 通過者発表（事務局より連絡）"],
  ["9/26（土）", "ブラッシュアップDAY＆説明会"],
  ["9/26（土）〜10/17（土）", "二次審査に向けたメンタリング期間"],
  ["10/24（土）", "最終審査会（FINAL PITCH）"]
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
    a: "参加費は無料です。"
  },
  {
    q: "エントリーにはGoogleアカウントが必要ですか？",
    a: "PDF資料のアップロードが必要なため、Googleアカウントでの送信が必要です。"
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
            KYSS 2026 は、若者のアイデアや事業を実装と継続につなげる伴走型のビジネスコンテストです。
          </p>

          <div className="summary">
            <div>
              <span>最終審査会</span>
              <strong>2026年10月24日（土）</strong>
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
              エントリーはこちら
            </a>
          </div>

          <div className="heroMedia">
            <img
              src="/header-photo.jpg"
              alt="KYSS関連イベントの様子"
            />
          </div>

          <p className="note">
            会場変更など重要な連絡はメールで行います。必ずご自身または保護者が確認できるメールアドレスでエントリーしてください。
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
              <p>通過者にはブラッシュアップやメンタリングを通じた支援を行います。</p>
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
        <div className="container prizeSection">
          <h2>賞金</h2>
          <div className="prizeList">
            <article className="prizeItem">
              <h3>最優秀賞</h3>
              <p>全体で最も優れたアイデア・挑戦に賞金30万円贈呈予定です。</p>
            </article>
            <article className="prizeItem">
              <h3>部門賞</h3>
              <p>各部門で優れたアイデア・挑戦に賞金10万円贈呈予定です。</p>
            </article>
          </div>
          <p className="sectionLead">総額50万円を予定しています。</p>
        </div>
      </section>


      <section className="section alt">
        <div className="container">
          <h2>審査・評価のポイント</h2>
          <ul className="criteriaList">
            <li>熱意・原体験</li>
            <li>新規性・独自性</li>
            <li>課題解決性</li>
            <li>実装・継続意欲</li>
            <li>市場性・将来性</li>
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>伴走支援</h2>
          <div className="grid three">
            <article className="card">
              <h3>ブラッシュアップDAY</h3>
              <p>通過後に、説明会と審査員紹介を含む対面でのブラッシュアップ機会を用意します。</p>
            </article>
            <article className="card">
              <h3>個別メンタリング</h3>
              <p>二次審査に向けて、実現性や継続性を高める個別伴走支援を行います。</p>
            </article>
            <article className="card">
              <h3>次の挑戦機会へ</h3>
              <p>KOIB など、その先の接続先も視野に入れた設計を行います。</p>
            </article>
          </div>
        </div>
      </section>

      <section className="section alt">
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
          <p className="subtext">会場はオーテピアを予定しています。変更がある場合はメールにてご連絡します。</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>エントリー資料</h2>
          <div className="grid two">
            <article className="card">
              <h3>アイデア内容資料 / 事業内容資料（PDF）</h3>
              <p>
                ピッチ用スライドに収まりきらない内容を補足する資料です。審査項目に沿って、原体験、課題、ターゲット、独自性、社会性、市場性、実現性、継続性などを記載してください。
              </p>
            </article>
            <article className="card">
              <h3>ピッチ用スライド（PDF）</h3>
              <p>
                発表を想定したスライド資料をPDFで提出してください。アイデア内容資料 / 事業内容資料と同じPDFでも構いません。
              </p>
            </article>
          </div>
        </div>
      </section>

      <section className="section">
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

      <section className="section alt">
        <div className="container ctaBlock">
          <h2>エントリー</h2>
          <p>
            エントリーにはPDF資料のアップロードが必要です。会場変更や審査結果などの重要な連絡はメールで行います。
          </p>
          <a
            className="button primary"
            href={formUrl}
            target="_blank"
            rel="noreferrer"
          >
            エントリーフォームへ
          </a>
        </div>
      </section>
    </main>
  );
}
