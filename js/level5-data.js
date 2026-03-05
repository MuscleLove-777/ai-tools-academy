/* ============================================
   AI Tools Academy - Level 5: オープンソースAI・料金比較
   ============================================ */

const LEVEL5_DATA = {
    id: 5,
    title: "オープンソースAI・料金比較",
    icon: "💰",
    description: "Llama、Mistral等のオープンソースAIと全サービスの料金徹底比較",
    modules: [
        {
            id: 501,
            title: "オープンソースAI（Llama・Mistral）",
            duration: "20分",
            content: `
<h2>Llama（Meta）</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Meta（Facebook）</td></tr>
<tr><td>最新モデル</td><td>Llama 4</td></tr>
<tr><td>ライセンス</td><td>Llama Community License</td></tr>
<tr><td>パラメータ</td><td>8B〜405B</td></tr>
<tr><td>実行環境</td><td>ローカル / クラウド</td></tr>
</tbody>
</table>

<h3>Llama の強み</h3>
<ul>
<li><strong>完全オープンソース</strong>：モデル重みが無料公開。商用利用可能（条件付き）</li>
<li><strong>高い性能</strong>：GPT-4に匹敵する性能（大型モデル）。多言語対応</li>
<li><strong>カスタマイズ自由</strong>：ファインチューニング可能。自社データでの追加学習</li>
<li><strong>プライバシー保護</strong>：ローカル実行でデータ外部不送信。オンプレミス運用可能</li>
<li><strong>豊富なエコシステム</strong>：Ollama、vLLM等の実行ツール。HuggingFace等での配布</li>
</ul>

<h3>Llama モデルバリエーション</h3>
<table>
<thead>
<tr><th>モデル</th><th>パラメータ数</th><th>必要VRAM</th><th>用途</th></tr>
</thead>
<tbody>
<tr><td>Llama 4 Scout</td><td>17B (MoE)</td><td>16GB+</td><td>軽量な汎用タスク</td></tr>
<tr><td>Llama 4 Maverick</td><td>17B (MoE)</td><td>32GB+</td><td>高品質な汎用タスク</td></tr>
<tr><td>Llama 3.3 70B</td><td>70B</td><td>40GB+</td><td>高性能な推論・分析</td></tr>
<tr><td>Llama 3.1 405B</td><td>405B</td><td>複数GPU</td><td>最高性能（研究向け）</td></tr>
</tbody>
</table>

<h3>実行方法</h3>
<table>
<thead>
<tr><th>方法</th><th>難易度</th><th>コスト</th></tr>
</thead>
<tbody>
<tr><td>Ollama（ローカル）</td><td>低</td><td>無料（GPU必要）</td></tr>
<tr><td>vLLM（サーバー）</td><td>中</td><td>無料（GPU必要）</td></tr>
<tr><td>HuggingFace Inference</td><td>低</td><td>無料〜従量課金</td></tr>
<tr><td>AWS Bedrock</td><td>低</td><td>従量課金</td></tr>
<tr><td>Together AI</td><td>低</td><td>従量課金（安価）</td></tr>
</tbody>
</table>

<h2>Mistral（Mistral AI）</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Mistral AI（フランス）</td></tr>
<tr><td>最新モデル</td><td>Mistral Large、Mixtral</td></tr>
<tr><td>ライセンス</td><td>Apache 2.0（一部モデル）</td></tr>
<tr><td>特徴</td><td>高効率・軽量・高速</td></tr>
</tbody>
</table>

<h3>Mistral の強み</h3>
<ul>
<li><strong>効率性の高さ</strong>：小型モデルで大型モデル並みの性能。MoEアーキテクチャ</li>
<li><strong>ヨーロッパ発のAI</strong>：EU規制に準拠。GDPR対応のデータ処理</li>
<li><strong>多言語対応</strong>：ヨーロッパ言語に強い。日本語も対応</li>
<li><strong>低コスト運用</strong>：API料金が安い。少ないGPUリソースで動作</li>
</ul>

<div class="info-box tip">
<div class="info-box-title">💡 オープンソースAIの価値</div>
オープンソースAIの最大の価値は<strong>データの主権</strong>です。自社のデータを外部に送信せずにAIを活用できるため、機密性の高い業務やGDPR等の規制が厳しい環境で重要な選択肢となります。
</div>
`,
            quiz: [
                { id: "q501_1", type: "choice", question: "Llamaをローカルで最も簡単に実行できるツールはどれですか？", options: ["Docker", "Ollama", "Kubernetes", "TensorFlow"], answer: 1, explanation: "Ollamaは難易度が低く、ローカルでLlamaを簡単に実行できるツールです。" },
                { id: "q501_2", type: "choice", question: "Mistralの開発元の国はどこですか？", options: ["アメリカ", "中国", "フランス", "日本"], answer: 2, explanation: "MistralはフランスのMistral AI社が開発したオープンソースAIです。" },
                { id: "q501_3", type: "choice", question: "オープンソースAIの最大の価値はどれですか？", options: ["常に最高性能である", "完全無料である", "データの主権（外部送信不要）", "サポートが手厚い"], answer: 2, explanation: "オープンソースAIの最大の価値はデータの主権です。自社データを外部に送信せずにAIを活用できます。" }
            ]
        },
        {
            id: 502,
            title: "全サービス料金比較",
            duration: "20分",
            content: `
<h2>テキスト生成AI 個人向けプラン比較</h2>
<table>
<thead>
<tr><th>サービス</th><th>無料プラン</th><th>個人有料プラン</th><th>月額料金</th></tr>
</thead>
<tbody>
<tr><td>ChatGPT</td><td>あり（制限付き）</td><td>Plus / Pro</td><td>$20 / $200</td></tr>
<tr><td>Claude</td><td>あり（制限付き）</td><td>Pro</td><td>$20</td></tr>
<tr><td>Gemini</td><td>あり</td><td>Advanced</td><td>$19.99</td></tr>
<tr><td>Copilot</td><td>あり（制限付き）</td><td>Pro</td><td>$20</td></tr>
<tr><td>Perplexity</td><td>あり</td><td>Pro</td><td>$20</td></tr>
<tr><td>DeepSeek</td><td>あり（高機能）</td><td>-</td><td>基本無料</td></tr>
</tbody>
</table>

<h2>API料金比較（入力100万トークンあたり）</h2>
<table>
<thead>
<tr><th>モデル</th><th>料金</th><th>コスト評価</th></tr>
</thead>
<tbody>
<tr><td>Gemini 2.5 Flash</td><td>$0.15</td><td>最安クラス</td></tr>
<tr><td>GPT-4o mini</td><td>$0.15</td><td>最安クラス</td></tr>
<tr><td>DeepSeek V3</td><td>$0.27</td><td>非常に安い</td></tr>
<tr><td>Claude Haiku 4.5</td><td>$0.80</td><td>安い</td></tr>
<tr><td>Gemini 2.5 Pro</td><td>$1.25</td><td>中程度</td></tr>
<tr><td>GPT-4o</td><td>$2.50</td><td>やや高い</td></tr>
<tr><td>Claude Sonnet 4.6</td><td>$3.00</td><td>やや高い</td></tr>
<tr><td>Claude Opus 4.6</td><td>$15.00</td><td>高い</td></tr>
<tr><td>GPT-4o (o3)</td><td>$15.00</td><td>高い</td></tr>
</tbody>
</table>

<h2>画像・音声・動画AI 料金比較</h2>
<table>
<thead>
<tr><th>サービス</th><th>カテゴリ</th><th>最安有料プラン</th><th>無料枠</th></tr>
</thead>
<tbody>
<tr><td>Midjourney</td><td>画像生成</td><td>$10/月</td><td>なし</td></tr>
<tr><td>Stable Diffusion</td><td>画像生成</td><td>無料（ローカル）</td><td>無制限</td></tr>
<tr><td>ElevenLabs</td><td>音声合成</td><td>$5/月</td><td>10,000文字/月</td></tr>
<tr><td>Suno</td><td>AI作曲</td><td>$10/月</td><td>10曲/日</td></tr>
<tr><td>Runway</td><td>動画生成</td><td>$12/月</td><td>125クレジット</td></tr>
<tr><td>Sora</td><td>動画生成</td><td>$20/月(Plus)</td><td>なし</td></tr>
</tbody>
</table>

<h2>コーディングAI 料金比較</h2>
<table>
<thead>
<tr><th>サービス</th><th>無料プラン</th><th>有料プラン</th><th>月額料金</th></tr>
</thead>
<tbody>
<tr><td>GitHub Copilot</td><td>あり(制限付き)</td><td>Pro</td><td>$10/月</td></tr>
<tr><td>Cursor</td><td>あり(制限付き)</td><td>Pro</td><td>$20/月</td></tr>
<tr><td>Claude Code</td><td>なし</td><td>API従量課金</td><td>従量課金</td></tr>
<tr><td>Windsurf</td><td>あり</td><td>Pro</td><td>$15/月</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q502_1", type: "choice", question: "API料金が最も安いモデルはどれですか？", options: ["GPT-4o", "Claude Sonnet 4.6", "Gemini 2.5 Flash / GPT-4o mini", "Claude Opus 4.6"], answer: 2, explanation: "Gemini 2.5 FlashとGPT-4o miniは入力100万トークンあたり$0.15で最安クラスです。" },
                { id: "q502_2", type: "choice", question: "コーディングAIの中で最も月額料金が安い有料プランはどれですか？", options: ["Cursor Pro ($20/月)", "GitHub Copilot Pro ($10/月)", "Windsurf Pro ($15/月)", "Claude Code (従量課金)"], answer: 1, explanation: "GitHub Copilot Proは$10/月で、コーディングAIの中で最も安い定額プランです。" },
                { id: "q502_3", type: "choice", question: "画像生成AIで唯一、完全無料（ローカル実行）で利用できるのはどれですか？", options: ["Midjourney", "DALL-E 3", "Stable Diffusion", "Adobe Firefly"], answer: 2, explanation: "Stable Diffusionはローカル実行すれば無料（初期GPU投資のみ）で無制限に利用できます。" }
            ]
        },
        {
            id: 503,
            title: "予算別おすすめ構成",
            duration: "15分",
            content: `
<h2>予算別おすすめAI構成</h2>

<h3>無料で始める（0円/月）</h3>
<table>
<thead>
<tr><th>用途</th><th>推奨サービス</th></tr>
</thead>
<tbody>
<tr><td>テキスト生成</td><td>Gemini無料版 or ChatGPT無料版</td></tr>
<tr><td>画像生成</td><td>Stable Diffusion（ローカル）</td></tr>
<tr><td>検索</td><td>Perplexity無料版</td></tr>
<tr><td>資料分析</td><td>NotebookLM</td></tr>
<tr><td>コーディング</td><td>GitHub Copilot Free</td></tr>
</tbody>
</table>

<h3>バランス重視（約$20/月 ≒ 約3,000円）</h3>
<table>
<thead>
<tr><th>用途</th><th>推奨サービス</th></tr>
</thead>
<tbody>
<tr><td>テキスト生成</td><td>ChatGPT Plus（$20/月）※DALL-E 3・Sora含む</td></tr>
<tr><td>検索</td><td>Perplexity無料版</td></tr>
<tr><td>資料分析</td><td>NotebookLM</td></tr>
<tr><td>コーディング</td><td>GitHub Copilot Free</td></tr>
</tbody>
</table>

<h3>開発者向け（約$30/月 ≒ 約4,500円）</h3>
<table>
<thead>
<tr><th>用途</th><th>推奨サービス</th></tr>
</thead>
<tbody>
<tr><td>テキスト生成</td><td>Claude Pro（$20/月）</td></tr>
<tr><td>コーディング</td><td>GitHub Copilot Pro（$10/月）</td></tr>
<tr><td>検索</td><td>Perplexity無料版</td></tr>
<tr><td>資料分析</td><td>NotebookLM</td></tr>
</tbody>
</table>

<h3>クリエイティブ制作（約$40/月 ≒ 約6,000円）</h3>
<table>
<thead>
<tr><th>用途</th><th>推奨サービス</th></tr>
</thead>
<tbody>
<tr><td>テキスト生成</td><td>Claude Pro（$20/月）</td></tr>
<tr><td>画像生成</td><td>Midjourney Basic（$10/月）</td></tr>
<tr><td>コーディング</td><td>GitHub Copilot Pro（$10/月）</td></tr>
<tr><td>検索・資料</td><td>Perplexity無料版 + NotebookLM</td></tr>
</tbody>
</table>

<h3>フル装備（約$137/月 ≒ 約20,500円）</h3>
<table>
<thead>
<tr><th>用途</th><th>推奨サービス</th></tr>
</thead>
<tbody>
<tr><td>テキスト生成</td><td>ChatGPT Plus + Claude Pro（$40/月）</td></tr>
<tr><td>画像生成</td><td>Midjourney Standard（$30/月）</td></tr>
<tr><td>検索</td><td>Perplexity Pro（$20/月）</td></tr>
<tr><td>コーディング</td><td>Cursor Pro（$20/月）</td></tr>
<tr><td>動画</td><td>Runway Standard（$12/月）</td></tr>
<tr><td>音声</td><td>ElevenLabs Starter（$5/月）</td></tr>
<tr><td>音楽</td><td>Suno Pro（$10/月）</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 コスト最適化のコツ</div>
まずは無料プランで各サービスを試し、自分の業務に本当に必要なものだけ有料化するのが最もコスト効率の良い方法です。NotebookLMのように完全無料でも非常に高機能なサービスも活用しましょう。
</div>
`,
            quiz: [
                { id: "q503_1", type: "choice", question: "完全無料で利用でき、資料分析に優れたAIサービスはどれですか？", options: ["Perplexity Pro", "ChatGPT Plus", "NotebookLM", "Midjourney"], answer: 2, explanation: "NotebookLMはGoogleアカウントのみで完全無料で利用でき、資料分析に優れています。" },
                { id: "q503_2", type: "choice", question: "月額約3,000円（$20）の予算で最も効果的なAI構成はどれですか？", options: ["Midjourney Standard", "ChatGPT Plus（DALL-E・Sora含む）", "GitHub Copilot Pro + Cursor Pro", "ElevenLabs Pro"], answer: 1, explanation: "ChatGPT Plusは$20/月でテキスト生成、画像生成（DALL-E 3）、動画生成（Sora）を含む高いコストパフォーマンスです。" },
                { id: "q503_3", type: "choice", question: "AIサービスのコスト最適化で最も重要なことはどれですか？", options: ["最も高いプランを契約する", "すべてのサービスに課金する", "無料で試してから本当に必要なものだけ有料化する", "1つのサービスだけに絞る"], answer: 2, explanation: "まず無料プランで試し、自分の業務に本当に必要なものだけ有料化するのが最もコスト効率が良い方法です。" }
            ]
        }
    ]
};
