/* ============================================
   AI Tools Academy - Level 2: テキスト生成AI（後編）
   ============================================ */

const LEVEL2_DATA = {
    id: 2,
    title: "テキスト生成AI（後編）",
    icon: "💬",
    description: "Gemini、DeepSeek、Microsoft Copilotの特徴と比較",
    modules: [
        {
            id: 201,
            title: "Gemini（Google）",
            duration: "15分",
            content: `
<h2>Gemini の基本情報</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Google DeepMind</td></tr>
<tr><td>最新モデル</td><td>Gemini 2.5 Pro、Gemini 2.5 Flash</td></tr>
<tr><td>コンテキスト長</td><td>最大1Mトークン（2.5 Pro）</td></tr>
<tr><td>マルチモーダル</td><td>テキスト・画像・音声・動画・コード</td></tr>
<tr><td>日本語対応</td><td>良好</td></tr>
</tbody>
</table>

<h2>Gemini の5つの強み</h2>
<table>
<thead>
<tr><th>番号</th><th>強み</th><th>詳細</th></tr>
</thead>
<tbody>
<tr><td>1</td><td><strong>圧倒的なコンテキスト長</strong></td><td>最大100万トークン。大量の資料を一括処理可能</td></tr>
<tr><td>2</td><td><strong>Googleサービス連携</strong></td><td>Gmail、Docs、Sheets統合。Google検索との連携</td></tr>
<tr><td>3</td><td><strong>強力なマルチモーダル</strong></td><td>動画の理解・分析が可能。画像+テキストの統合処理</td></tr>
<tr><td>4</td><td><strong>無料で高機能</strong></td><td>無料版でも高性能モデル利用可。Google AI Studioも無料枠あり</td></tr>
<tr><td>5</td><td><strong>コスト効率が高い</strong></td><td>API料金が比較的安い。Flashモデルで高速・低コスト</td></tr>
</tbody>
</table>

<h2>料金プラン</h2>
<table>
<thead>
<tr><th>プラン</th><th>月額料金</th><th>主な機能</th></tr>
</thead>
<tbody>
<tr><td>無料版</td><td>無料</td><td>Gemini 2.5 Flash、基本機能</td></tr>
<tr><td>Gemini Advanced</td><td>$19.99/月</td><td>2.5 Pro、1Mコンテキスト、Googleサービス統合</td></tr>
<tr><td>Google One AI Premium</td><td>$19.99/月</td><td>Gemini Advanced + 2TB ストレージ</td></tr>
<tr><td>Workspace向け</td><td>要問合せ</td><td>企業向け、データガバナンス</td></tr>
</tbody>
</table>

<h2>得意な用途</h2>
<ul>
<li>Googleサービスとの連携業務</li>
<li>大量資料の一括分析</li>
<li>動画コンテンツの理解・要約</li>
<li>多言語翻訳・ローカライゼーション</li>
<li>教育・学習支援</li>
</ul>
`,
            quiz: [
                { id: "q201_1", type: "choice", question: "Gemini 2.5 Proの最大コンテキスト長はどのくらいですか？", options: ["128Kトークン", "200Kトークン", "500Kトークン", "1Mトークン"], answer: 3, explanation: "Gemini 2.5 Proは最大100万（1M）トークンのコンテキスト長を持ち、業界最大級です。" },
                { id: "q201_2", type: "choice", question: "Geminiが他のAIと比べて特に強い点はどれですか？", options: ["オープンソースである", "Googleサービスとの連携", "ローカル実行が可能", "最も安全性が高い"], answer: 1, explanation: "GeminiはGmail、Docs、SheetsなどのGoogleサービスと統合されており、Google検索との連携も強みです。" },
                { id: "q201_3", type: "choice", question: "Geminiの開発元はどこですか？", options: ["OpenAI", "Anthropic", "Google DeepMind", "Meta"], answer: 2, explanation: "GeminiはGoogle DeepMindが開発したAIモデルです。" }
            ]
        },
        {
            id: 202,
            title: "DeepSeek・Microsoft Copilot",
            duration: "15分",
            content: `
<h2>DeepSeek の基本情報</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>DeepSeek（中国）</td></tr>
<tr><td>最新モデル</td><td>DeepSeek-V3、DeepSeek-R1</td></tr>
<tr><td>コンテキスト長</td><td>最大128Kトークン</td></tr>
<tr><td>マルチモーダル</td><td>テキスト中心</td></tr>
<tr><td>API利用</td><td>可能（非常に安価）</td></tr>
</tbody>
</table>

<h3>DeepSeek の強み</h3>
<ul>
<li><strong>圧倒的な低コスト</strong>：API料金が他社の1/10〜1/50。大量処理に最適</li>
<li><strong>優れた推論能力（R1）</strong>：数学・論理問題に強い。Chain-of-Thought推論</li>
<li><strong>オープンソース</strong>：モデル重みが公開。自社サーバーで運用可能</li>
<li><strong>コーディング能力</strong>：プログラミング支援・複雑なアルゴリズム問題に対応</li>
</ul>

<div class="info-box warning">
<div class="info-box-title">⚠️ DeepSeekの注意点</div>
<ul>
<li>データが中国のサーバーを経由する可能性</li>
<li>中国の規制に基づくコンテンツフィルタリング</li>
<li>機密情報の取り扱いに要注意</li>
<li>日本語の品質は他モデルにやや劣る場合がある</li>
</ul>
</div>

<h2>Microsoft Copilot の基本情報</h2>
<table>
<thead>
<tr><th>項目</th><th>内容</th></tr>
</thead>
<tbody>
<tr><td>開発元</td><td>Microsoft（OpenAI技術ベース）</td></tr>
<tr><td>ベースモデル</td><td>GPT-4o</td></tr>
<tr><td>主な統合先</td><td>Microsoft 365（Word, Excel, PowerPoint, Outlook, Teams）</td></tr>
</tbody>
</table>

<h3>Microsoft Copilot の強み</h3>
<ul>
<li><strong>Microsoft 365との完全統合</strong>：Word文書の自動生成、Excelの関数・分析自動化、PowerPointスライド自動作成、Outlookメール要約、Teams会議要約・議事録</li>
<li><strong>エンタープライズグレードの安全性</strong>：Microsoft 365のセキュリティ基盤。データが学習に使われない</li>
<li><strong>Bing検索連携</strong>：最新情報を反映した回答。ソース付きの信頼性の高い情報</li>
</ul>

<h3>Copilot 料金プラン</h3>
<table>
<thead>
<tr><th>プラン</th><th>月額料金</th><th>主な機能</th></tr>
</thead>
<tbody>
<tr><td>Copilot（無料）</td><td>無料</td><td>基本的なチャット、Web検索</td></tr>
<tr><td>Copilot Pro</td><td>$20/月</td><td>優先アクセス、Office統合</td></tr>
<tr><td>Copilot for Microsoft 365</td><td>$30/月/人</td><td>全Office統合、Teams連携、企業管理</td></tr>
</tbody>
</table>
`,
            quiz: [
                { id: "q202_1", type: "choice", question: "DeepSeekのAPI料金の特徴はどれですか？", options: ["業界で最も高い", "他社の1/10〜1/50と非常に安い", "完全無料", "他社と同程度"], answer: 1, explanation: "DeepSeekのAPI料金は他社の1/10〜1/50と圧倒的に安く、大量処理に最適です。" },
                { id: "q202_2", type: "choice", question: "Microsoft CopilotがベースとしているAIモデルはどれですか？", options: ["Claude", "Gemini", "GPT-4o", "Llama"], answer: 2, explanation: "Microsoft CopilotはOpenAIのGPT-4oをベースとしています。" },
                { id: "q202_3", type: "choice", question: "DeepSeekを利用する際に特に注意すべき点はどれですか？", options: ["料金が高い", "データが中国のサーバーを経由する可能性がある", "英語しか対応していない", "オープンソースでない"], answer: 1, explanation: "DeepSeekは中国企業のサービスであり、データが中国のサーバーを経由する可能性があるため、機密情報の取り扱いに注意が必要です。" }
            ]
        },
        {
            id: 203,
            title: "テキスト生成AI総合比較",
            duration: "15分",
            content: `
<h2>テキスト生成AI 10項目比較</h2>
<table>
<thead>
<tr><th>比較項目</th><th>ChatGPT</th><th>Claude</th><th>Gemini</th><th>DeepSeek</th><th>Copilot</th></tr>
</thead>
<tbody>
<tr><td><strong>総合力</strong></td><td>★5</td><td>★5</td><td>★4</td><td>★4</td><td>★4</td></tr>
<tr><td><strong>文章品質</strong></td><td>★4</td><td>★5</td><td>★4</td><td>★3</td><td>★4</td></tr>
<tr><td><strong>コーディング</strong></td><td>★5</td><td>★5</td><td>★4</td><td>★5</td><td>★4</td></tr>
<tr><td><strong>推論力</strong></td><td>★5(o3)</td><td>★5</td><td>★5</td><td>★5(R1)</td><td>★4</td></tr>
<tr><td><strong>長文処理</strong></td><td>★4</td><td>★5</td><td>★5</td><td>★4</td><td>★3</td></tr>
<tr><td><strong>日本語</strong></td><td>★4</td><td>★5</td><td>★4</td><td>★3</td><td>★4</td></tr>
<tr><td><strong>コスト</strong></td><td>★3</td><td>★3</td><td>★4</td><td>★5</td><td>★3</td></tr>
<tr><td><strong>安全性</strong></td><td>★4</td><td>★5</td><td>★4</td><td>★3</td><td>★4</td></tr>
<tr><td><strong>エコシステム</strong></td><td>★5</td><td>★4</td><td>★5</td><td>★3</td><td>★5</td></tr>
<tr><td><strong>マルチモーダル</strong></td><td>★5</td><td>★4</td><td>★5</td><td>★3</td><td>★4</td></tr>
</tbody>
</table>

<h2>用途別おすすめ</h2>
<table>
<thead>
<tr><th>用途</th><th>おすすめ</th><th>理由</th></tr>
</thead>
<tbody>
<tr><td>高品質な文章作成</td><td><strong>Claude</strong></td><td>文章品質と日本語の自然さが最高水準</td></tr>
<tr><td>汎用的な対話・作業</td><td><strong>ChatGPT</strong></td><td>エコシステムの充実度、マルチモーダル対応</td></tr>
<tr><td>大量資料の分析</td><td><strong>Gemini</strong></td><td>1Mトークンのコンテキスト長</td></tr>
<tr><td>コスト重視</td><td><strong>DeepSeek</strong></td><td>API料金が圧倒的に安い</td></tr>
<tr><td>Office業務の効率化</td><td><strong>Copilot</strong></td><td>Microsoft 365との完全統合</td></tr>
<tr><td>高度な推論</td><td><strong>ChatGPT(o3) / DeepSeek(R1)</strong></td><td>数学・論理問題への強さ</td></tr>
</tbody>
</table>

<div class="info-box tip">
<div class="info-box-title">💡 複数AIの使い分けが最強</div>
「1つのAIだけを使う」のではなく、タスクに応じて複数のAIを使い分けるのが最も効果的です。例えば、リサーチはPerplexity、文章はClaude、データ分析はChatGPT、Office作業はCopilotといった使い分けが理想的です。
</div>
`,
            quiz: [
                { id: "q203_1", type: "choice", question: "日本語の文章品質が最も高いと評価されているテキスト生成AIはどれですか？", options: ["ChatGPT", "Claude", "Gemini", "DeepSeek"], answer: 1, explanation: "Claudeは文章品質と日本語の自然さにおいて最高水準と評価されています。" },
                { id: "q203_2", type: "choice", question: "API料金が最も安いテキスト生成AIはどれですか？", options: ["ChatGPT", "Claude", "Gemini", "DeepSeek"], answer: 3, explanation: "DeepSeekのAPI料金は他社の1/10〜1/50と圧倒的に安価です。" },
                { id: "q203_3", type: "choice", question: "コンテキスト長が最も長いテキスト生成AIはどれですか？", options: ["ChatGPT（128K）", "Claude（200K）", "Gemini（1M）", "DeepSeek（128K）"], answer: 2, explanation: "Gemini 2.5 Proは最大100万（1M）トークンで、テキスト生成AIの中で最長です。" },
                { id: "q203_4", type: "fill", question: "Microsoft 365と完全統合されたAIサービスの名前は？（英語で）", answer: "Copilot", explanation: "Microsoft CopilotはWord、Excel、PowerPoint、Outlook、TeamsなどMicrosoft 365と完全統合されています。" }
            ]
        }
    ]
};
