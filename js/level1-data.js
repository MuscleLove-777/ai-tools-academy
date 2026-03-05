/* ============================================
   AI Tools Academy - Level 1: AI全体マップとテキスト生成AI（前編）
   ============================================ */

const LEVEL1_DATA = {
    id: 1,
    title: "AI全体マップとテキスト生成AI（前編）",
    icon: "🗺️",
    description: "AIサービスの全体像、ChatGPT/GPT-4o、Claudeの特徴と活用法",
    modules: [
        {
            id: 101,
            title: "AIサービスのカテゴリ全体像",
            duration: "15分",
            content: `
<h2>AIサービス カテゴリマップ</h2>
<p>2026年現在、AIサービスは大きく7つのカテゴリに分類できます。それぞれのカテゴリで代表的なサービスを把握しましょう。</p>

<table>
<thead>
<tr><th>カテゴリ</th><th>代表的サービス</th><th>主な用途</th></tr>
</thead>
<tbody>
<tr><td><strong>テキスト生成AI</strong></td><td>ChatGPT、Claude、Gemini、DeepSeek</td><td>文章生成・分析・翻訳・コーディング</td></tr>
<tr><td><strong>画像生成AI</strong></td><td>Midjourney、Stable Diffusion、DALL-E 3</td><td>アート・デザイン・広告素材</td></tr>
<tr><td><strong>音声AI</strong></td><td>ElevenLabs、Suno</td><td>音声合成・AI作曲</td></tr>
<tr><td><strong>動画生成AI</strong></td><td>Runway、Sora</td><td>動画クリップ生成・編集</td></tr>
<tr><td><strong>コーディングAI</strong></td><td>GitHub Copilot、Claude Code、Cursor</td><td>コード補完・自律開発</td></tr>
<tr><td><strong>検索特化AI</strong></td><td>Perplexity、NotebookLM</td><td>AI検索・資料分析</td></tr>
<tr><td><strong>オープンソースAI</strong></td><td>Llama、Mistral、Qwen</td><td>カスタムAI構築・ローカル実行</td></tr>
</tbody>
</table>

<h2>AI技術の進化タイムライン</h2>
<table>
<thead>
<tr><th>年</th><th>主な出来事</th></tr>
</thead>
<tbody>
<tr><td>2022年</td><td>ChatGPT登場</td></tr>
<tr><td>2023年</td><td>GPT-4公開、Claude登場、Midjourney v5</td></tr>
<tr><td>2024年</td><td>GPT-4o登場、Claude 3、Gemini 1.0、Sora発表</td></tr>
<tr><td>2025年</td><td>o1/o3登場、Claude 4、Gemini 2.0、Sora公開</td></tr>
<tr><td>2026年</td><td>GPT-5世代、Claude Opus 4.6、Gemini 2.5、動画AI普及</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 ポイント</div>
AIサービスは急速に進化しています。各カテゴリの代表的なサービスを知り、自分の業務に最適なツールを選べるようになることが、AI活用の第一歩です。
</div>
`,
            quiz: [
                { id: "q101_1", type: "choice", question: "AIサービスのカテゴリで、Perplexityが属するカテゴリはどれですか？", options: ["テキスト生成AI", "検索特化AI", "コーディングAI", "オープンソースAI"], answer: 1, explanation: "PerplexityはAI検索エンジンとして「検索特化AI」に分類されます。" },
                { id: "q101_2", type: "choice", question: "ChatGPTが登場した年はいつですか？", options: ["2020年", "2021年", "2022年", "2023年"], answer: 2, explanation: "ChatGPTは2022年にOpenAIから公開されました。" },
                { id: "q101_3", type: "choice", question: "以下のうちオープンソースAIはどれですか？", options: ["ChatGPT", "Claude", "Llama", "Gemini"], answer: 2, explanation: "LlamaはMetaが開発したオープンソースAIで、モデルの重みが公開されています。" }
            ]
        },
        {
            id: 102,
            title: "ChatGPT / GPT-4o（OpenAI）",
            duration: "20分",
            content: `
<h2>ChatGPT / GPT-4o の基本情報</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>OpenAI</td></tr>
<tr><td>最新モデル</td><td>GPT-4o、o3、GPT-4o mini</td></tr>
<tr><td>コンテキスト長</td><td>最大128Kトークン</td></tr>
<tr><td>マルチモーダル</td><td>テキスト・画像・音声・動画</td></tr>
<tr><td>日本語対応</td><td>良好</td></tr>
</tbody>
</table>

<h2>ChatGPT / GPT-4o の5つの強み</h2>
<table>
<thead>
<tr><th>番号</th><th>強み</th><th>詳細</th></tr>
</thead>
<tbody>
<tr><td>1</td><td><strong>世界最大のユーザーベース</strong></td><td>プラグイン・GPTsが豊富なエコシステム</td></tr>
<tr><td>2</td><td><strong>マルチモーダル対応</strong></td><td>テキスト+画像+音声の統合処理、リアルタイム音声会話</td></tr>
<tr><td>3</td><td><strong>高い汎用性</strong></td><td>文章生成、翻訳、要約、分析、コーディング支援</td></tr>
<tr><td>4</td><td><strong>GPTsによるカスタマイズ</strong></td><td>ノーコードでAIアプリ作成、GPT Storeで共有・販売</td></tr>
<tr><td>5</td><td><strong>推論モデル（o3）</strong></td><td>複雑な論理・数学問題に強い、ステップバイステップ推論</td></tr>
</tbody>
</table>

<h2>料金プラン</h2>
<table>
<thead>
<tr><th>プラン</th><th>月額料金</th><th>主な機能</th></tr>
</thead>
<tbody>
<tr><td>Free</td><td>無料</td><td>GPT-4o mini、制限付きGPT-4o</td></tr>
<tr><td>Plus</td><td>$20/月</td><td>GPT-4o、o3-mini、DALL-E、高度な分析</td></tr>
<tr><td>Pro</td><td>$200/月</td><td>無制限GPT-4o、o3、優先アクセス</td></tr>
<tr><td>Team</td><td>$25/月/人</td><td>チーム管理、高セキュリティ</td></tr>
<tr><td>Enterprise</td><td>要問合せ</td><td>SSO、管理コンソール、無制限利用</td></tr>
</tbody>
</table>

<h2>得意な用途</h2>
<ul>
<li>一般的な質問応答・対話</li>
<li>メール・企画書・レポート等のビジネス文書作成</li>
<li>多言語翻訳</li>
<li>データ分析（Advanced Data Analysis）</li>
<li>GPTsによるカスタムAI作成</li>
<li>画像生成（DALL-E 3統合）</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意点・弱み</div>
<ul>
<li>最新情報の正確性にムラがある場合がある</li>
<li>長文の一貫性維持は他モデルに劣ることがある</li>
<li>無料プランでは利用制限あり</li>
<li>ハルシネーション（事実と異なる内容の生成）のリスク</li>
</ul>
</div>
`,
            quiz: [
                { id: "q102_1", type: "choice", question: "GPT-4oのコンテキスト長はどれくらいですか？", options: ["最大8Kトークン", "最大32Kトークン", "最大128Kトークン", "最大1Mトークン"], answer: 2, explanation: "GPT-4oのコンテキスト長は最大128Kトークンです。" },
                { id: "q102_2", type: "choice", question: "ChatGPTでノーコードのAIアプリを作成できる機能は何ですか？", options: ["Plugins", "GPTs", "Advanced Data Analysis", "Copilot"], answer: 1, explanation: "GPTsはノーコードでカスタムAIアプリを作成でき、GPT Storeで共有・販売も可能です。" },
                { id: "q102_3", type: "choice", question: "ChatGPT Plusの月額料金はいくらですか？", options: ["無料", "$10/月", "$20/月", "$200/月"], answer: 2, explanation: "ChatGPT Plusは月額$20で、GPT-4o、o3-mini、DALL-Eなどの機能が利用できます。" }
            ]
        },
        {
            id: 103,
            title: "Claude（Anthropic）",
            duration: "20分",
            content: `
<h2>Claude の基本情報</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Anthropic</td></tr>
<tr><td>最新モデル</td><td>Claude Opus 4.6、Claude Sonnet 4.6、Claude Haiku 4.5</td></tr>
<tr><td>コンテキスト長</td><td>最大200Kトークン</td></tr>
<tr><td>マルチモーダル</td><td>テキスト・画像・PDF</td></tr>
<tr><td>日本語対応</td><td>良好</td></tr>
</tbody>
</table>

<h2>Claude の5つの強み</h2>
<table>
<thead>
<tr><th>番号</th><th>強み</th><th>詳細</th></tr>
</thead>
<tbody>
<tr><td>1</td><td><strong>超長文処理能力</strong></td><td>200Kトークンのコンテキスト。書籍1冊分を一度に処理可能</td></tr>
<tr><td>2</td><td><strong>高い安全性・倫理性</strong></td><td>Constitutional AI設計。有害な出力を抑制</td></tr>
<tr><td>3</td><td><strong>優れた文章品質</strong></td><td>自然で読みやすい日本語生成。論理的で構造化された出力</td></tr>
<tr><td>4</td><td><strong>コーディング能力</strong></td><td>Claude Codeで直接開発。大規模コードベースの理解</td></tr>
<tr><td>5</td><td><strong>Artifacts機能</strong></td><td>コード・文書のリアルタイムプレビュー。インタラクティブなコンテンツ生成</td></tr>
</tbody>
</table>

<h2>料金プラン</h2>
<table>
<thead>
<tr><th>プラン</th><th>月額料金</th><th>主な機能</th></tr>
</thead>
<tbody>
<tr><td>Free</td><td>無料</td><td>Sonnet利用（制限付き）</td></tr>
<tr><td>Pro</td><td>$20/月</td><td>Opus利用、優先アクセス、Projects</td></tr>
<tr><td>Team</td><td>$25/月/人</td><td>チーム管理、高い利用制限</td></tr>
<tr><td>Enterprise</td><td>要問合せ</td><td>SSO、SCIM、500Kコンテキスト</td></tr>
</tbody>
</table>

<h2>得意な用途</h2>
<ul>
<li>長文ドキュメントの分析・要約</li>
<li>法律文書・契約書のレビュー</li>
<li>高品質なコンテンツ作成（ブログ、記事、レポート）</li>
<li>プログラミング・コードレビュー</li>
<li>学術的な分析・論文支援</li>
<li>複雑な指示への対応</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">⚠️ 注意点・弱み</div>
<ul>
<li>リアルタイムのWeb検索機能は限定的</li>
<li>画像生成機能は非搭載</li>
<li>音声対話には非対応</li>
<li>無料プランの利用制限がやや厳しい</li>
</ul>
</div>
`,
            quiz: [
                { id: "q103_1", type: "choice", question: "Claudeのコンテキスト長は最大どのくらいですか？", options: ["最大32Kトークン", "最大128Kトークン", "最大200Kトークン", "最大1Mトークン"], answer: 2, explanation: "Claudeのコンテキスト長は最大200Kトークンで、書籍1冊分を一度に処理できます。" },
                { id: "q103_2", type: "choice", question: "Claudeの安全性を支える設計思想は何ですか？", options: ["RLHF", "Constitutional AI", "GPTs", "MoE"], answer: 1, explanation: "ClaudeはConstitutional AI設計により、高い安全性・倫理性を実現しています。" },
                { id: "q103_3", type: "choice", question: "Claudeが特に得意とする用途はどれですか？", options: ["リアルタイム音声会話", "画像生成", "長文ドキュメントの分析・要約", "動画生成"], answer: 2, explanation: "Claudeは200Kトークンのコンテキスト長を活かした長文ドキュメントの分析・要約を得意としています。" },
                { id: "q103_4", type: "fill", question: "Claudeの開発元の企業名は？（英語で）", answer: "Anthropic", explanation: "ClaudeはAnthropic社が開発したAIモデルです。" }
            ]
        }
    ]
};
